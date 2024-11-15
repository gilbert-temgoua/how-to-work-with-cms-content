/* eslint-disable no-magic-numbers */
/**
 * @vendor      Scandipwa
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import ExampleBannerWidget from './ExampleBannerWidget.component';

/** @namespace ScandipwaPageBuilderCustomizations/Component/ExampleBannerWidget/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    storeCode: state.ConfigReducer.code
});

/** @namespace ScandipwaPageBuilderCustomizations/Component/ExampleBannerWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace ScandipwaPageBuilderCustomizations/Component/ExampleBannerWidget/Container */
export class ExampleBannerWidgetContainer extends PureComponent {
    static propTypes = {
        'data-variable-input': PropTypes.string.isRequired,
        storeCode: PropTypes.string.isRequired
    };

    containerProps() {
        const {
            'data-variable-input': bannerTitle = '',
            storeCode
        } = this.props;

        const title = this.configureTitle(bannerTitle);

        return {
            title,
            storeCode
        };
    }

    configureTitle(bannerTitle) {
        const { storeCode } = this.props;

        if (!bannerTitle.length) {
            return '';
        }

        const titleData = JSON.parse(bannerTitle);
        const localizedTitle = titleData.find((obj) => obj.label === storeCode);

        // if translated strings for some stores are not set or store codes from BE form do not match,
        // use default banner title value
        if (!localizedTitle || !localizedTitle.value.length) {
            return titleData.find((obj) => obj.label === 'Default label').value;
        }

        return localizedTitle.value;
    }

    render() {
        return (
            <ExampleBannerWidget
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleBannerWidgetContainer);
