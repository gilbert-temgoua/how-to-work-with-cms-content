/* eslint-disable max-lines */
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

import './SocialBlockWidget.style';

/** @namespace ScandipwaPageBuilderCustomizations/Component/SocialBlockWidget/Component */
export class SocialBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        blockSlogan: PropTypes.string.isRequired,
        socialTilesData: PropTypes.arrayOf(
            PropTypes.shape({
                caption: PropTypes.string.isRequired,
                icon: PropTypes.shape({
                    iconSrc: PropTypes.string.isRequired,
                    iconAlt: PropTypes.string.isRequired,
                    iconTitle: PropTypes.string.isRequired
                }),
                tileUrl: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    };

    renderBlockTitle() {
        const { blockTitle } = this.props;

        if (!blockTitle) {
            return null;
        }

        return (
            <div block="SocialBlock" elem="SocialMediaTitle">
                <span>{ blockTitle }</span>
            </div>
        );
    }

    renderBlockSlogan() {
        const { blockSlogan } = this.props;

        if (!blockSlogan) {
            return null;
        }

        return (
            <div block="SocialBlock" elem="SocialMediaSlogan">
                <span>{ blockSlogan }</span>
            </div>
        );
    }

    renderMediaListTextHolder(caption) {
        return (
            <p block="SocialBlock" elem="SocialMediaListTextHolder">
                <strong>
                        <span block="SocialBlock" elem="SocialMediaListText">
                            { caption }
                        </span>
                </strong>
            </p>
        );
    }

    renderSocialBlocks() {
        const {
            socialTilesData
        } = this.props;

        return (
            <div block="SocialBlock" elem="SocialMediaList">
                <div block="SocialBlock" elem="SocialMediaListWrapper">
                    { socialTilesData.map(({
                        caption,
                        icon: {
                            src: iconSrc,
                            alt: iconAlt,
                            title: iconTitle
                        },
                        tileUrl
                    }) => {
                        if (!iconSrc || !caption) {
                            return null;
                        }

                        return (
                            <div block="SocialBlock" elem="SocialMediaListContent">
                                <div block="SocialBlock" elem="SocialMediaListFigure">
                                    <Link to={ tileUrl }>
                                        <Image
                                          src={ iconSrc }
                                          alt={ iconAlt }
                                          title={ iconTitle }
                                          mix={ {
                                              block: 'SocialBlock',
                                              elem: 'SocialMediaListImg'
                                          } }
                                        />
                                    </Link>
                                </div>
                                { this.renderMediaListTextHolder(caption) }
                            </div>
                        );
                    }) }
                </div>
            </div>
        );
    }

    renderBlockDescription() {
        return (
            <div block="SocialBlock" elem="SocialMedia">
                { this.renderBlockTitle() }
                { this.renderBlockSlogan() }
                { this.renderSocialBlocks() }
            </div>
        );
    }

    render() {
        return (
            <div block="SocialBlock">
                { this.renderBlockDescription() }
            </div>
        );
    }
}

export default SocialBlockWidgetComponent;
