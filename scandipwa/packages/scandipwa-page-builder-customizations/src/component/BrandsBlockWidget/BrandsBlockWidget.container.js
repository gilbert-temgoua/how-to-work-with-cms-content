/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import BrandsBlockWidget from './BrandsBlockWidget.component';

/** @namespace ScandipwaPageBuilderCustomizations/Component/BrandsBlockWidget/Container */
export class BrandsBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'data-block-title': PropTypes.string.isRequired,
        'data-first-brand-url': PropTypes.string.isRequired,
        'data-first-brand-img-src': PropTypes.string.isRequired,
        'data-first-brand-img-alt': PropTypes.string.isRequired,
        'data-first-brand-img-title': PropTypes.string.isRequired,
        'data-second-brand-url': PropTypes.string.isRequired,
        'data-second-brand-img-src': PropTypes.string.isRequired,
        'data-second-brand-img-alt': PropTypes.string.isRequired,
        'data-second-brand-img-title': PropTypes.string.isRequired,
        'data-third-brand-url': PropTypes.string.isRequired,
        'data-third-brand-img-src': PropTypes.string.isRequired,
        'data-third-brand-img-alt': PropTypes.string.isRequired,
        'data-third-brand-img-title': PropTypes.string.isRequired,
        'data-button-url': PropTypes.string.isRequired,
        'data-button-text': PropTypes.string.isRequired
    };

    state = {
        blocksData: []
    };

    __construct(props) {
        super.__construct(props);

        const {
            blocksData
        } = this.state;
        const {
            'data-first-brand-url': firstBrandUrl,
            'data-first-brand-img-src': firstBrandImgSrc,
            'data-first-brand-img-alt': firstBrandImgAlt,
            'data-first-brand-img-title': firstBrandImgTitle,
            'data-second-brand-url': secondBrandUrl,
            'data-second-brand-img-src': secondBrandImgSrc,
            'data-second-brand-img-alt': secondBrandImgAlt,
            'data-second-brand-img-title': secondBrandImgTitle,
            'data-third-brand-url': thirdBrandUrl,
            'data-third-brand-img-src': thirdBrandImgSrc,
            'data-third-brand-img-alt': thirdBrandImgAlt,
            'data-third-brand-img-title': thirdBrandImgTitle
        } = this.props;

        blocksData.push(...[
            {
                icon: { src: firstBrandImgSrc, alt: firstBrandImgAlt, title: firstBrandImgTitle },
                url: firstBrandUrl
            },
            {
                icon: { src: secondBrandImgSrc, alt: secondBrandImgAlt, title: secondBrandImgTitle },
                url: secondBrandUrl
            },
            {
                icon: { src: thirdBrandImgSrc, alt: thirdBrandImgAlt, title: thirdBrandImgTitle },
                url: thirdBrandUrl
            }
        ]);
    }

    containerProps() {
        const {
            blocksData
        } = this.state;
        const {
            'data-block-title': blockTitle,
            'data-button-url': buttonUrl,
            'data-button-text': buttonText
        } = this.props;

        return {
            blockTitle,
            buttonUrl,
            buttonText,
            blocksData
        };
    }

    render() {
        return (
            <BrandsBlockWidget
              { ...this.containerProps() }
            />
        );
    }
}

export default BrandsBlockWidgetContainer;
