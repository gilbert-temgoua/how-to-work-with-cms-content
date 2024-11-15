<?php

/**
 * Adobe page builder compatibility ScandiPWA
 * @copyright Scandiweb, Inc. All rights reserved.
 */

declare(strict_types=1);

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    'Scandiweb_AdobePageBuilder',
    __DIR__
);
