/**
 * @vendor      Scandipwa
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ExampleBannerWidget.style';

/** @namespace ScandipwaPageBuilderCustomizations/Component/ExampleBannerWidget/Component */
export class ExampleBannerWidgetComponent extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        const {
            title
        } = this.props;

        return (
            <span>
                { title }
            </span>
        );
    }
}

export default ExampleBannerWidgetComponent;
