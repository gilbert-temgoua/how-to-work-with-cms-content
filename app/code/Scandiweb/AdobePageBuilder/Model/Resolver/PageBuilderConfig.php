<?php

/**
 * Adobe page builder compatibility ScandiPWA
 * @copyright Scandiweb, Inc. All rights reserved.
 */

declare(strict_types=1);

namespace Scandiweb\AdobePageBuilder\Model\Resolver;

use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Query\Resolver\ContextInterface;
use Magento\Framework\GraphQl\Query\ResolverInterface;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;
use Magento\PageBuilder\Block\GoogleMapsApi;

class PageBuilderConfig implements ResolverInterface
{
    protected GoogleMapsApi $googleMapsApi;

    public function __construct(
        GoogleMapsApi $googleMapsApi
    ) {
        $this->googleMapsApi = $googleMapsApi;
    }

    /**
     * @param Field            $field
     * @param ContextInterface $context
     * @param ResolveInfo      $info
     * @param array|null       $value
     * @param array|null       $args
     *
     * @return string[]
     */
    public function resolve(
        Field $field,
        $context,
        ResolveInfo $info,
        array $value = null,
        array $args = null
    ) {
        return [
            'googleMapsApiKey' => $this->googleMapsApi->getApiKey(),
            'googleMapsStyle' => $this->googleMapsApi->getStyle(),
        ];
    }
}
