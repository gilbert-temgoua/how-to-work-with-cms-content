/**
 * @category  ScandiPWA
 * @package   ScandiPWA/PageBuilderCustomizations
 * @author    info <info@scandiweb.com>
 * @copyright Copyright (c) 2023 Scandiweb, Inc (https://scandiweb.com)
 */
define([
    'jquery',
    'mage/accordion'
], function ($) {
    'use strict';

    return function (config, element) {
        var accordionElement = $(element),
            hashIndex = window.location.href.indexOf('#'),
            anchor = accordionElement.data('accordion-anchor') || false,
            isAnchored = (hashIndex !== -1 && anchor && anchor === window.location.href.substr(hashIndex + 1));

        accordionElement.accordion({
            active: accordionElement.data('accordion-active') || isAnchored ? [0] : [],
            collapsible: true,
            multipleCollapsible: true
        });

        if (isAnchored) {
            $('html, body').animate({
                scrollTop: accordionElement.offset().top
            }, 500);
        }
    };
});
