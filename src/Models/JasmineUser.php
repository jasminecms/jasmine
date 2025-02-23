<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Jasmine\Jasmine\Bread\Breadable;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\FieldsManifest;
use Jasmine\Jasmine\Bread\Fields\GroupedField;
use Jasmine\Jasmine\Bread\Fields\InputField;
use Jasmine\Jasmine\Bread\Fields\SwitchField;
use Jasmine\Jasmine\Database\Factories\JasmineUserFactory;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 *
 *
 * @property int                                                            $id
 * @property string                                                         $name
 * @property string                                                         $email
 * @property bool                                                           $admin
 * @property array                                                          $roles
 * @property array                                                          $permissions
 * @property string                                                         $password
 * @property string|null                                                    $otp_secret
 * @property string|null                                                    $otp_remember_token
 * @property string|null                                                    $remember_token
 * @property Carbon|null                                                    $created_at
 * @property Carbon|null                                                    $updated_at
 * @property-read Collection<int, JasmineUserApiToken>                      $apiTokens
 * @property-read int|null                                                  $api_tokens_count
 * @property-read mixed                                                     $avatar_url
 * @property-read DatabaseNotificationCollection<int, DatabaseNotification> $notifications
 * @property-read int|null                                                  $notifications_count
 * @method static Builder|JasmineUser newModelQuery()
 * @method static Builder|JasmineUser newQuery()
 * @method static Builder|JasmineUser query()
 * @method static Builder|JasmineUser whereAdmin($value)
 * @method static Builder|JasmineUser whereCreatedAt($value)
 * @method static Builder|JasmineUser whereEmail($value)
 * @method static Builder|JasmineUser whereId($value)
 * @method static Builder|JasmineUser whereName($value)
 * @method static Builder|JasmineUser whereOtpRememberToken($value)
 * @method static Builder|JasmineUser whereOtpSecret($value)
 * @method static Builder|JasmineUser wherePassword($value)
 * @method static Builder|JasmineUser wherePermissions($value)
 * @method static Builder|JasmineUser whereRememberToken($value)
 * @method static Builder|JasmineUser whereRoles($value)
 * @method static Builder|JasmineUser whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class JasmineUser extends Authenticatable implements BreadableInterface
{
    use HasFactory;
    use Notifiable, Breadable;
    
    protected static string $factory = JasmineUserFactory::class;
    
    protected $fillable = [
        'name',
        'email',
        'admin',
        'roles',
        'permissions',
        'password',
        'otp_secret',
    ];
    
    protected $hidden = [
        'password',
        'otp_secret',
        'otp_remember_token',
        'remember_token',
    ];
    
    protected $casts = [
        'admin'       => 'boolean',
        'roles'       => 'array',
        'permissions' => 'array',
    ];
    
    public function avatarUrl(): Attribute
    {
        return Attribute::get(function () {
            $uiAvatar = 'https://ui-avatars.com/api/' . urlencode($this->name ?? 'X') . '/100/EBF4FF/7F9CF5';
            
            if (!$this->email) return $uiAvatar;
            
            return 'https://www.gravatar.com/avatar/' . md5(strtolower($this->email))
                . '?d=' . urlencode($uiAvatar)
                . '&s=100';
        });
    }
    
    public function apiTokens(): HasMany
    {
        return $this->hasMany(JasmineUserApiToken::class);
    }
    
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }
    
    public function jCan(string $permission): bool
    {
        if ($this->id === 1 || $this->admin) return true;
        
        if (!str_contains($permission, '*')) return in_array($permission, $this->permissions ?? []);
        
        foreach ($this->permissions as $per) if (Str::is($permission, $per)) return true;
        
        return false;
    }
    
    public static function getBreadableKey(): string { return 'jasmine-users'; }
    
    public static function getMenuIcon(): string { return 'bi-people'; }
    
    public function getTitle(): string { return $this->name; }
    
    public static function browseableColumns(): array
    {
        return [
            'name',
            'email',
            'admin',
            'permissions' => fn($i) => count($i),
            [
                'data'       => 'otp_secret',
                'label'      => '2FA',
                'searchable' => false,
                'render'     => fn($v, $r) => !!$r->otp_secret,
            ],
        ];
    }
    
    public static function fieldsManifest(): FieldsManifest
    {
        /** @var JasmineUser $user */
        $user = func_get_arg(0);
        $unique = Rule::unique('jasmine_users', 'email');
        if ($user->exists) $unique->ignore($user->id);
        
        return new FieldsManifest([
            'col-md-4'        => [
                'Details' => [
                    (new InputField('name'))->setValidation(['required']),
                    (new InputField('email'))->setOptions(['type' => 'email'])
                        ->setValidation(['required', $unique]),
                ],
            ],
            'col-md-8 xperms' => [
                '_Access' => [
                    (new SwitchField('admin'))
                        ->setDescription('Admins have access to everything'),
                    //(new GroupedField('roles')),
                    (new GroupedField('permissions'))->setFields(Jasmine::getPermissionFields()),
                ],
            ],
        ]);
    }
    
    public static function jasmineOnRetrievedForEdit(JasmineUser $u): array
    {
        if (!$u->exists) return $u->toArray();
        
        // prep permissions
        $u->permissions = Arr::undot(
            array_combine($u->permissions, array_map(fn() => true, $u->permissions))
            + array_map(fn() => false, Jasmine::getPermissions())
        );
        
        return $u->toArray();
    }
    
    public static function jasmineOnSaving(array $data, JasmineUser $u): array
    {
        if (!$u->exists) $data['password'] = bcrypt(Str::random(64));
        
        // normalize permissions
        if ($u->id === 1) $data['admin'] = true;
        $data['permissions'] = array_keys(array_filter(Arr::dot($data['permissions'] ?? []), fn($p) => $p));
        
        return $data;
    }
    
    public static function jasmineOnDeleting(JasmineUser $u): void
    {
        // prevent deleting first user
        if ($u->id === 1) redirect()->back()->withSwal([
            'icon'  => 'error',
            'title' => 'Oops!',
            'text'  => 'First user cannot be deleted',
        ])->throwResponse();
        
        // prevent self destruction
        if ($u->id === Auth::guard(config('jasmine.auth.guard'))->user()->id) redirect()->back()->withSwal([
            'icon'  => 'error',
            'title' => 'Oops!',
            'text'  => 'You Cannot delete yourself',
        ])->throwResponse();
    }
    
}
