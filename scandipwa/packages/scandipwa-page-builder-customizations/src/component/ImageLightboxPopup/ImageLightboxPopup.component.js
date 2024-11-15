/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import Lightbox from 'react-awesome-lightbox';

import Image from 'Component/Image';

// vvv 'react-awesome-lightbox' styles
import './ReactAwesomeLightbox.style.css';
import './ImageLightboxPopup.style';

/** @namespace ScandipwaPageBuilderCustomizations/Component/ImageLightboxPopup/Component */
export class ImageLightboxPopupComponent extends PureComponent {
    static propTypes = {
        isPopupVisible: PropTypes.bool,
        onImageClick: PropTypes.func.isRequired,
        onPopupClose: PropTypes.func.isRequired,
        payload: PropTypes.shape({
            alt: PropTypes.string,
            className: PropTypes.string,
            src: PropTypes.string,
            title: PropTypes.string
        }).isRequired
    };

    static defaultProps = {
        isPopupVisible: false
    };

    renderImageContent() {
        const {
            payload: {
                src = '',
                alt = '',
                title = ''
            } = {}
        } = this.props;

        if (!src) {
            return null;
        }

        return (
            <Image
              src={ src }
              alt={ alt }
              title={ title }
            />
        );
    }

    renderImage() {
        const {
            payload: {
                src,
                alt,
                title,
                className
            },
            onImageClick
        } = this.props;

        if (!src) {
            return null;
        }

        const isMobileHidden = className && className === 'pagebuilder-mobile-hidden'
            ? 'isMobileHidden'
            : 'isDesktopHidden';

        return (
            <button
              onClick={ onImageClick }
              block="ImageBlock"
              elem={ isMobileHidden }
            >
                <Image
                  src={ src }
                  alt={ alt }
                  title={ title }
                />
            </button>
        );
    }

    renderImagePopup() {
        const {
            onPopupClose,
            isPopupVisible,
            payload: {
                src,
                title = ''
            }
        } = this.props;

        if (!isPopupVisible || !src) {
            return null;
        }

        return (
            <Lightbox
              image={ src }
              title={ title }
              onClose={ onPopupClose }
            />
        );
    }

    render() {
        return (
            <div block="ImageLightboxPopup">
                { this.renderImagePopup() }
                { this.renderImage() }
            </div>
        );
    }
}

export default ImageLightboxPopupComponent;
