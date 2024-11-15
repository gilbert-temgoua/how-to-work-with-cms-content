/**
 * @category  ScandiPWA
 * @package   ScandiPWA/PageBuilderCustomizations
 * @author    info <info@scandiweb.com>
 * @copyright Copyright (c) 2023 Scandiweb, Inc (https://scandiweb.com)
 */

define([
    'jquery',
    'mage/validation',
    'Magento_Ui/js/lib/validation/utils',
    'jquery/validate'
], function ($, validation, utils) {
    'use strict';

    return function (validator) {
        validator.addRule(
            'validate-video-sources',
            function (href) {
                if (utils.isEmptyNoTrim(href)) {
                    return true;
                }

                href = (href || '').replace(/^\s+/, '').replace(/\s+$/, '');

                return validateIsUrl(href) && (
                    href.match(/youtube\.com|youtu\.be|youtube-nocookie\.com/) ||
                    href.match(/vimeo\.com/) ||
                    href.match(/\.(mp4|ogv|webm)(?!\w)/)
                );
            },
            $.mage.__('Please enter a valid video URL. ' +
                'Valid URLs have a video file extension (.mp4, .webm, .ogv) or links to videos on YouTube or Vimeo.')
        );

        return validator;
    };

    /**
     * Validate that string is url
     * @param {String} href
     * @return {Boolean}
     */
    function validateIsUrl(href) {
        return (/^(http|https|ftp):\/\/(([A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))(\.[A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))*)(:(\d+))?(\/[A-Z0-9~](([A-Z0-9_~-]|\.)*[A-Z0-9~]|))*\/?(.*)?$/i).test(href);//eslint-disable-line max-len
    }
});
