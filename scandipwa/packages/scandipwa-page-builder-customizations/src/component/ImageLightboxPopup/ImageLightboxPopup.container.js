/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import ImageLightboxPopup from './ImageLightboxPopup.component';

/** @namespace ScandipwaPageBuilderCustomizations/Component/ImageLightboxPopup/Container/mapStateToProps */
export const mapStateToProps = () => ({});

/** @namespace ScandipwaPageBuilderCustomizations/Component/ImageLightboxPopup/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace ScandipwaPageBuilderCustomizations/Component/ImageLightboxPopup/Container */
export class ImageLightboxPopupContainer extends PureComponent {
    static propTypes = {
        payload: PropTypes.shape({
            alt: PropTypes.string,
            className: PropTypes.string,
            src: PropTypes.string,
            title: PropTypes.string
        }).isRequired
    };

    state = {
        isPopupVisible: false
    };

    containerFunctions = {
        onImageClick: this.onImageClick.bind(this),
        onPopupClose: this.onPopupClose.bind(this)
    };

    containerProps() {
        const { isPopupVisible } = this.state;
        const { payload } = this.props;

        return {
            isPopupVisible,
            payload
        };
    }

    onImageClick() {
        this.setState({ isPopupVisible: true });
    }

    onPopupClose() {
        this.setState({ isPopupVisible: false });
    }

    render() {
        return (
            <ImageLightboxPopup
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageLightboxPopupContainer);
