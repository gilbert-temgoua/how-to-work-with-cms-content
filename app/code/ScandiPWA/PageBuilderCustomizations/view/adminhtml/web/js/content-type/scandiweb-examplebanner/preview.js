<!--
/**
 * ExampleVendor_PageBuilderExampleBanner
 *
 * @category ExampleVendor
 * @package  ExampleVendor_PageBuilderExampleBanner
 * @author   John Doe <info@scandiweb.com>
 */
-->

define([
    'Magento_PageBuilder/js/content-type/preview',
    'knockout'
], function (PreviewBase, ko) {
    'use strict';
    var $super;

    function Preview(parent, config, stageId) {
        PreviewBase.call(this, parent, config, stageId);

        this.bannerTitlePreview = ko.observable("Banner title");
    }

    Preview.prototype = Object.create(PreviewBase.prototype);
    $super = PreviewBase.prototype;

    Preview.prototype.retrieveOptions = function retrieveOptions() {
        var options = $super.retrieveOptions.call(this, arguments);

        // Change option menu icons
        options.remove.icon = "<i class='icon-admin-pagebuilder-error'></i>";

        // Change tooltips
        options.edit.title = "Open Editor";
        options.remove.title = "Delete";
        // options.move.title = "Move";
        // options.duplicate.title = "Duplicate";

        // Remove menu options
        // delete options.move;
        // delete options.duplicate;
        // delete options.edit;
        // delete options.remove;

        return options;
    };

    Preview.prototype.afterObservablesUpdated = function afterObservablesUpdated() {
        $super.afterObservablesUpdated.call(this, arguments);

        var data = this.contentType.dataStore.getState();

        if (data['banner_title']) {
            this.bannerTitlePreview(data['banner_title'][0]['value']);
        }
    }

    return Preview;
});
