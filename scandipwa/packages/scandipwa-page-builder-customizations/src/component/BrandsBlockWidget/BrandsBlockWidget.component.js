/* eslint-disable arrow-body-style */
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

import './BrandsBlockWidget.style';

/** @namespace ScandipwaPageBuilderCustomizations/Component/BrandsBlockWidget/Component */
export class BrandsBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        buttonUrl: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        blocksData: PropTypes.arrayOf(
            PropTypes.shape({
                icon: PropTypes.shape({
                    imgSrc: PropTypes.string.isRequired,
                    imgAlt: PropTypes.string.isRequired,
                    imgTitle: PropTypes.string.isRequired
                }),
                url: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    };

    renderBlockTitle() {
        const {
            blockTitle
        } = this.props;

        return (
            <h2 block="BrandsBlock" elem="Title">
                { blockTitle }
            </h2>
        );
    }

    renderLastBlock() {
        return (
            <div block="BrandsBlock" elem="FeaturedBrandsContent">
                { this.renderBlockTitle() }
                { this.renderBlockActions() }
            </div>
        );
    }

    renderFeaturedBrands() {
        const {
            blocksData
        } = this.props;

        return (
            <div block="BrandsBlock" elem="FeaturedBrands">
                <div block="BrandsBlock" elem="FeaturedBrandsWrapper">
                    <div block="BrandsBlock" elem="FeaturedBrandsColumn">
                        { blocksData.map(({
                            icon: {
                                src: imgSrc,
                                alt: imgAlt,
                                title: imgTitle
                            },
                            url
                        }) => (
                            <div block="BrandsBlock" elem="FeaturedBrandsContent">
                                <div block="BrandsBlock" elem="FeaturedBrandsFigure">
                                    <Link
                                      block="BrandsBlock"
                                      elem="FeaturedBrandsLink"
                                      to={ url }
                                    >
                                        <Image
                                          src={ imgSrc }
                                          alt={ imgAlt }
                                          title={ imgTitle }
                                          mix={ {
                                              block: 'BrandsBlock',
                                              elem: 'FeaturedBrandsFigureImg'
                                          } }
                                        />
                                    </Link>
                                </div>
                            </div>
                        )) }
                        { this.renderLastBlock() }
                    </div>
                </div>
            </div>
        );
    }

    renderBlockActions() {
        const {
            buttonUrl,
            buttonText
        } = this.props;

        return (
            <div block="BrandsBlock" elem="Actions">
                <div block="BrandsBlock" elem="ActionsItem">
                    <Link
                      to={ buttonUrl }
                      block="BrandsBlock"
                      elem="ActionsButton"
                    >
                        <span
                          block="BrandsBlock"
                          elem="ActionsButtonText"
                        >
                            { buttonText }
                        </span>
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div block="BrandsBlock">
                { this.renderFeaturedBrands() }
            </div>
        );
    }
}

export default BrandsBlockWidgetComponent;
