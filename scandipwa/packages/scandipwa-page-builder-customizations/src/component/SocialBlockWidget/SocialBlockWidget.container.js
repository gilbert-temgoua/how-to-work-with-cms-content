/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import SocialBlockWidget from './SocialBlockWidget.component';

/** @namespace ScandipwaPageBuilderCustomizations/Component/SocialBlockWidget/Container */
export class SocialBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'data-block-title': PropTypes.string.isRequired,
        'data-block-slogan': PropTypes.string.isRequired,
        'data-first-icon-src': PropTypes.string.isRequired,
        'data-first-icon-alt': PropTypes.string.isRequired,
        'data-first-icon-title': PropTypes.string.isRequired,
        'data-first-url': PropTypes.string.isRequired,
        'data-first-caption': PropTypes.string.isRequired,
        'data-second-icon-src': PropTypes.string.isRequired,
        'data-second-icon-alt': PropTypes.string.isRequired,
        'data-second-icon-title': PropTypes.string.isRequired,
        'data-second-url': PropTypes.string.isRequired,
        'data-second-caption': PropTypes.string.isRequired,
        'data-third-icon-src': PropTypes.string.isRequired,
        'data-third-icon-alt': PropTypes.string.isRequired,
        'data-third-icon-title': PropTypes.string.isRequired,
        'data-third-url': PropTypes.string.isRequired,
        'data-third-caption': PropTypes.string.isRequired,
        'data-fourth-icon-src': PropTypes.string.isRequired,
        'data-fourth-icon-alt': PropTypes.string.isRequired,
        'data-fourth-icon-title': PropTypes.string.isRequired,
        'data-fourth-url': PropTypes.string.isRequired,
        'data-fourth-caption': PropTypes.string.isRequired,
        'data-fifth-icon-src': PropTypes.string.isRequired,
        'data-fifth-icon-alt': PropTypes.string.isRequired,
        'data-fifth-icon-title': PropTypes.string.isRequired,
        'data-fifth-url': PropTypes.string.isRequired,
        'data-fifth-caption': PropTypes.string.isRequired
    };

    state = {
        socialTilesData: []
    };

    __construct(props) {
        super.__construct(props);

        const { socialTilesData } = this.state;
        const {
            'data-first-icon-src': firstIconSrc,
            'data-first-icon-alt': firstIconAlt,
            'data-first-icon-title': firstIconTitle,
            'data-first-url': firstUrl,
            'data-first-caption': firstCaption,
            'data-second-icon-src': secondIconSrc,
            'data-second-icon-alt': secondIconAlt,
            'data-second-icon-title': secondIconTitle,
            'data-second-url': secondUrl,
            'data-second-caption': secondCaption,
            'data-third-icon-src': thirdIconSrc,
            'data-third-icon-alt': thirdIconAlt,
            'data-third-icon-title': thirdIconTitle,
            'data-third-url': thirdUrl,
            'data-third-caption': thirdCaption,
            'data-fourth-icon-src': fourthIconSrc,
            'data-fourth-icon-alt': fourthIconAlt,
            'data-fourth-icon-title': fourthIconTitle,
            'data-fourth-url': fourthUrl,
            'data-fourth-caption': fourthCaption,
            'data-fifth-icon-src': fifthIconSrc,
            'data-fifth-icon-alt': fifthIconAlt,
            'data-fifth-icon-title': fifthIconTitle,
            'data-fifth-url': fifthUrl,
            'data-fifth-caption': fifthCaption
        } = this.props;

        socialTilesData.push(...[
            {
                caption: firstCaption,
                icon: { src: firstIconSrc, alt: firstIconAlt, title: firstIconTitle },
                url: firstUrl
            },
            {
                caption: secondCaption,
                icon: { src: secondIconSrc, alt: secondIconAlt, title: secondIconTitle },
                url: secondUrl
            },
            {
                caption: thirdCaption,
                icon: { src: thirdIconSrc, alt: thirdIconAlt, title: thirdIconTitle },
                url: thirdUrl
            },
            {
                caption: fourthCaption,
                icon: { src: fourthIconSrc, alt: fourthIconAlt, title: fourthIconTitle },
                url: fourthUrl
            },
            {
                caption: fifthCaption,
                icon: { src: fifthIconSrc, alt: fifthIconAlt, title: fifthIconTitle },
                url: fifthUrl
            }
        ]);
    }

    containerProps() {
        const { socialTilesData } = this.state;
        const {
            'data-block-title': blockTitle,
            'data-block-slogan': blockSlogan
        } = this.props;

        return {
            blockTitle,
            blockSlogan,
            socialTilesData
        };
    }

    render() {
        return (
            <SocialBlockWidget
              { ...this.containerProps() }
            />
        );
    }
}

export default SocialBlockWidgetContainer;
