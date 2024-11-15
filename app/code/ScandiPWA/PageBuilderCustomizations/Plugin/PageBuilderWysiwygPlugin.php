<?php
/**
 * @category  ScandiPWA
 * @package   ScandiPWA/PageBuilderCustomizations
 * @author    info <info@scandiweb.com>
 * @copyright Copyright (c) 2023 Scandiweb, Inc (https://scandiweb.com)
 */

declare(strict_types=1);

namespace ScandiPWA\PageBuilderCustomizations\Plugin;

use Magento\Framework\DataObject;
use Magento\PageBuilder\Model\Wysiwyg\DefaultConfigProvider;
use Magento\Ui\Block\Wysiwyg\ActiveEditor;
use Magento\Framework\View\Asset\Repository;

class PageBuilderWysiwygPlugin
{
    /**
     * @var ActiveEditor
     */
    protected ActiveEditor $activeEditor;

    /**
     * @var Repository
     */
    protected $_assetRepo;

    /**
     * Config constructor.
     * @param ActiveEditor $activeEditor
     * @param Repository $assetRepo
     */
    public function __construct(
        ActiveEditor $activeEditor,
        Repository $assetRepo
    ) {
        $this->activeEditor = $activeEditor;
        $this->_assetRepo = $assetRepo;
    }

    /**
     * @param DefaultConfigProvider $source
     * @param DataObject $result
     * @return DataObject
     */
    public function afterGetConfig(DefaultConfigProvider $source, DataObject $result): DataObject
    {
        $editor = $this->activeEditor->getWysiwygAdapterPath();

        if (strpos($editor, 'tinymce4Adapter') || strpos($editor, 'tinymce5Adapter')) {
            if (($result->getDataByPath('settings/menubar')) || ($result->getDataByPath('settings/toolbar')) || ($result->getDataByPath('settings/plugins'))) {
                // do not override ui_element config (unsure if this is needed)
                return $result;
            }

            $tinymceSettings = $result->getData('tinymce');

            if (!is_array($tinymceSettings)) {
                $tinymceSettings = [];
            }

            // Full list of available plugins can be found here: https://www.tiny.cloud/docs/plugins/opensource/
            // Adds 'source-code', 'codesample' buttons to WYSIWYG interface
            $tinymceSettings['toolbar'] = 'undo redo | styleselect | fontsizeselect | lineheight | forecolor backcolor ' .
                '| bold italic underline | alignleft aligncenter alignright | numlist bullist ' .
                '| link image table charmap | code codesample';

            $tinymceSettings['plugins'] = implode(
                ' ',
                [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'charmap',
                    'media',
                    'noneditable',
                    'table',
                    'paste',
                    'code',
                    'help',
                    'table',
                    'image',
                    'imagetools',
                    'codesample'
                ]
            );

            $result->setData('tinymce', $tinymceSettings);
        }

        return $result;
    }
}
