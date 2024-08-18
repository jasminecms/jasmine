<?php

namespace Jasmine\Jasmine\Registers;

trait RegistersLocales
{
    private array $locales = [];

    public function getLocales(): array
    {
        return $this->locales;
    }

    /** Set available locales, overwrites existing */
    public function registerLocales(array $locales): void
    {
        $this->locales = $locales;
    }
}
