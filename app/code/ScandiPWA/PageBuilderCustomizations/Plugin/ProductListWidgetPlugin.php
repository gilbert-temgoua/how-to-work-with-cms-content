<?php
/**
 * @category  ScandiPWA
 * @package   ScandiPWA/PageBuilderCustomizations
 * @author    info <info@scandiweb.com>
 * @copyright Copyright (c) 2023 Scandiweb, Inc (https://scandiweb.com)
 */

declare(strict_types=1);

namespace ScandiPWA\PageBuilderCustomizations\Plugin;

use Magento\Catalog\Model\ResourceModel\Product\Collection;
use Magento\CatalogWidget\Block\Product\ProductsList as SourceProductList;

/**
 * Plugin that adds the missing product attributes to the Product List Widget's collection.
 * Data is used to return filtered products and prepare the 'Products' content type
 * grid template in Page Builder's admin preview
 *
 * @package PageBuilderCustomizations\Plugin
 */
class ProductListWidgetPlugin
{
    /**
     * @param SourceProductList $subject
     * @param Collection $result
     * @return Collection
     */
    public function afterCreateCollection(SourceProductList $subject, Collection $result): Collection
    {
        $result?->addAttributeToSelect('name')
            ->addAttributeToSelect('thumbnail');

        return $result;
    }
}
