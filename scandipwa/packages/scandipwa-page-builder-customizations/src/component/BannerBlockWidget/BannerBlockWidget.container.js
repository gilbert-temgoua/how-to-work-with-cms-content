/* eslint-disable no-magic-numbers */
/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import BannerBlockWidget from './BannerBlockWidget.component';

/** @namespace ScandipwaPageBuilderCustomizations/Component/BannerBlockWidget/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isMobile: state.ConfigReducer.device.isMobile
});

/** @namespace ScandipwaPageBuilderCustomizations/Component/BannerBlockWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace ScandipwaPageBuilderCustomizations/Component/BannerBlockWidget/Container */
export class BannerBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'data-banner-title': PropTypes.string.isRequired,
        'data-banner-subtitle': PropTypes.string.isRequired,
        'data-banner-text': PropTypes.string.isRequired,
        'data-banner-desktop-image-src': PropTypes.string.isRequired,
        'data-banner-desktop-image-alt': PropTypes.string.isRequired,
        'data-banner-desktop-image-title': PropTypes.string.isRequired,
        'data-banner-mobile-image-src': PropTypes.string.isRequired,
        'data-banner-mobile-image-alt': PropTypes.string.isRequired,
        'data-banner-mobile-image-title': PropTypes.string.isRequired,
        'data-button-url': PropTypes.string.isRequired,
        'data-button-text': PropTypes.string.isRequired,
        'data-button-color': PropTypes.string.isRequired,
        'data-banner-mobile-layout': PropTypes.string.isRequired,
        isMobile: PropTypes.bool.isRequired
    };

    containerProps() {
        const {
            'data-banner-title': bannerTitle,
            'data-banner-subtitle': bannerSubtitle,
            'data-banner-text': bannerText,
            'data-banner-desktop-image-src': bannerDesktopImageSrc,
            'data-banner-desktop-image-alt': bannerDesktopImageAlt,
            'data-banner-desktop-image-title': bannerDesktopImageTitle,
            'data-banner-mobile-image-src': bannerMobileImageSrc,
            'data-banner-mobile-image-alt': bannerMobileImageAlt,
            'data-banner-mobile-image-title': bannerMobileImageTitle,
            'data-button-url': buttonUrl,
            'data-button-text': buttonText,
            'data-button-color': buttonColor,
            'data-banner-mobile-layout': mobileLayout,
            isMobile
        } = this.props;

        return {
            bannerTitle,
            bannerText,
            bannerSubtitle,
            bannerDesktopImageSrc,
            bannerDesktopImageAlt,
            bannerDesktopImageTitle,
            bannerMobileImageSrc,
            bannerMobileImageAlt,
            bannerMobileImageTitle,
            buttonUrl,
            buttonText,
            buttonColor,
            mobileLayout,
            isMobile
        };
    }

    render() {
        return (
            <BannerBlockWidget
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerBlockWidgetContainer);
