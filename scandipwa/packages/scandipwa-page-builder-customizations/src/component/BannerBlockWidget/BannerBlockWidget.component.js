/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Image from 'Component/Image';
import Link from 'Component/Link';

import './BannerBlockWidget.style';

/** @namespace ScandipwaPageBuilderCustomizations/Component/BannerBlockWidget/Component */
export class BannerBlockWidgetComponent extends PureComponent {
    static propTypes = {
        bannerTitle: PropTypes.string.isRequired,
        bannerText: PropTypes.string.isRequired,
        bannerSubtitle: PropTypes.string.isRequired,
        bannerDesktopImageSrc: PropTypes.string.isRequired,
        bannerDesktopImageAlt: PropTypes.string.isRequired,
        bannerDesktopImageTitle: PropTypes.string.isRequired,
        bannerMobileImageSrc: PropTypes.string.isRequired,
        bannerMobileImageAlt: PropTypes.string.isRequired,
        bannerMobileImageTitle: PropTypes.string.isRequired,
        buttonUrl: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        buttonColor: PropTypes.string.isRequired,
        mobileLayout: PropTypes.string.isRequired,
        isMobile: PropTypes.bool.isRequired
    };

    renderBannerImage() {
        const {
            bannerDesktopImageSrc,
            bannerDesktopImageAlt,
            bannerDesktopImageTitle,
            bannerMobileImageSrc,
            bannerMobileImageAlt,
            bannerMobileImageTitle,
            isMobile
        } = this.props;

        if (isMobile) {
            return (
                <div block="BannerBlock" elem="BannerImage">
                    <Image
                      src={ bannerMobileImageSrc }
                      alt={ bannerMobileImageAlt }
                      title={ bannerMobileImageTitle }
                    />
                </div>
            );
        }

        return (
            <div block="BannerBlock" elem="BannerImage">
                <Image
                  src={ bannerDesktopImageSrc }
                  alt={ bannerDesktopImageAlt }
                  title={ bannerDesktopImageTitle }
                />
            </div>
        );
    }

    renderDescriptionTitle() {
        const {
            bannerTitle
        } = this.props;

        return (
            <div block="DescriptionContent" elem="Title">
                <span>
                    { bannerTitle }
                </span>
            </div>
        );
    }

    renderDescriptionText() {
        const {
            bannerText
        } = this.props;

        if (!bannerText === 0) {
            return null;
        }

        return (
            <div block="DescriptionContent" elem="Text">
                <span>
                    { bannerText }
                </span>
            </div>
        );
    }

    renderDescriptionSubtitle() {
        const {
            bannerSubtitle
        } = this.props;

        if (!bannerSubtitle) {
            return null;
        }

        return (
            <div block="DescriptionContent" elem="Subtitle">
                <span>
                    { bannerSubtitle }
                </span>
            </div>
        );
    }

    renderDescriptionActions() {
        const {
            buttonUrl,
            buttonText,
            buttonColor
        } = this.props;

        // TODO: implement update for "0" int values passed from BE when not set
        if (buttonUrl === 0 && buttonText === 0 && buttonColor === 0) {
            return null;
        }

        return (
            <div block="BannerBlock" elem="DescriptionActions">
                <Link
                  to={ buttonUrl }
                  block="Button"
                  style={ { 'background-color': buttonColor } }
                >
                    <span>{ buttonText }</span>
                </Link>
            </div>
        );
    }

    renderBannerDescription() {
        return (
            <div
              block="BannerBlock"
              elem="Description"
            >
                <div block="BannerBlock" elem="DescriptionContent">
                    { this.renderDescriptionSubtitle() }
                    { this.renderDescriptionTitle() }
                    { this.renderDescriptionText() }
                </div>
                { this.renderDescriptionActions() }
            </div>
        );
    }

    render() {
        const { mobileLayout } = this.props;
        return (
            <div block="BannerBlock" mix={ { block: mobileLayout } }>
                { this.renderBannerImage() }
                { this.renderBannerDescription() }
            </div>
        );
    }
}

export default BannerBlockWidgetComponent;
