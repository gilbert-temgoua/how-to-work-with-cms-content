<?php

declare(strict_types=1);

namespace ScandiPWA\PageBuilderCustomizations\Plugin;

use Magento\Cms\Model\ResourceModel\Block\CollectionFactory;
use Magento\Framework\App\ObjectManager;
use Magento\PageBuilder\Model\Stage\Renderer\CmsStaticBlock;
use Magento\PageBuilder\Model\Stage\Renderer\WidgetDirective;
use Magento\PageBuilder\Model\Stage\HtmlFilter;
use Magento\PageBuilder\Model\Filter\Template;

/**
 * Plugin to load admin block preview if they are identified by string identifiers and not numeric IDs.
 * This is useful when organizing content on CMS pages as string identifiers are more explanatory
 * and easier to understand than numeric block ids
 */
class BlockIdentifier
{
    /**
     * @var CollectionFactory
     */
    private $blockCollectionFactory;
    /**
     * @var WidgetDirective
     */
    private $widgetDirectiveRenderer;
    /**
     * @var HtmlFilter
     */
    private $htmlFilter;
    /**
     * @var Template|mixed
     */
    private $templateFilter;

    /**
     * @param CollectionFactory $blockCollectionFactory
     * @param WidgetDirective $widgetDirectiveRenderer
     * @param HtmlFilter $htmlFilter
     * @param Template|null $templateFilter
     */
    public function __construct(
        CollectionFactory $blockCollectionFactory,
        WidgetDirective $widgetDirectiveRenderer,
        HtmlFilter $htmlFilter,
        Template $templateFilter = null
    ) {
        $this->htmlFilter = $htmlFilter;
        $this->widgetDirectiveRenderer = $widgetDirectiveRenderer;
        $this->blockCollectionFactory = $blockCollectionFactory;
        $this->templateFilter = $templateFilter ?? ObjectManager::getInstance()
            ->get(Template::class);
    }

    /**
     * Will trigger after render and will check if the block was found or not.
     *
     * If it was not found we will try to check if the id provided was a string identifier
     *
     * @param CmsStaticBlock $cmsStaticBlock
     * @param array $result
     * @param array $params
     * @return array
     */
    public function afterRender(CmsStaticBlock $cmsStaticBlock, array $result, array $params): array
    {
        if ($result['error'] !== null) {

            // Shortcut if needed fields aren't present
            if (empty($params['directive']) && empty($params['identifier'])) {
                return $result;
            }

            $result = $this->getBlockByIdentifier($result, $params);
        }

        return $result;
    }

    /**
     * Will try to load block by string identifier if it was not found by the original function
     * The original function searches blocks by their numeric ids, so if the string was passed this function
     * will get the block instead of an error
     *
     * @param array $result
     * @param array $params
     * @return mixed
     */
    private function getBlockByIdentifier(array $result, array $params)
    {
        $collection = $this->blockCollectionFactory->create();
        $blocks = $collection
            ->addFieldToSelect(['title', 'is_active'])
            ->addFieldToFilter('identifier', ['eq' => $params['block_id']])
            ->load();

        if ($blocks->count() === 0) {
            $result['error'] = sprintf(__('Block with identifier: %s doesn\'t exist')->render(), $params['block_id']);

            return $result;
        }

        $block = $blocks->getFirstItem();
        $result['title'] = $block->getTitle();

        if ($block->isActive()) {
            $directiveResult = $this->widgetDirectiveRenderer->render($params);
            $result['content'] = $this->htmlFilter->filterHtml(
                $this->templateFilter->filter($directiveResult['content'])
            );
        } else {
            $result['error'] = __('Block disabled');
        }

        return $result;
    }
}
