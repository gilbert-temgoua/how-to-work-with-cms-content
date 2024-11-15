/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { lazy, PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';

import Loader from 'Component/Loader';

export const TestimonialsSlider = lazy(() => import(
    /* webpackMode: "lazy", webpackChunkName: "testimonialsSlider" */
    './TestimonialsSlider.component'
));

/** @namespace ScandipwaPageBuilderCustomizations/Component/TestimonialsSlider/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isMobile: state.ConfigReducer.device.isMobile
});

/** @namespace ScandipwaPageBuilderCustomizations/Component/TestimonialsSlider/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace ScandipwaPageBuilderCustomizations/Component/TestimonialsSlider/Container */
export class TestimonialsSliderContainer extends PureComponent {
    static propTypes = {
        isMobile: PropTypes.bool.isRequired,
        testimonials: PropTypes.arrayOf(Element).isRequired,
        parserOptions: PropTypes.shape({
            trim: PropTypes.bool.isRequired,
            replace: PropTypes.func.isRequired
        }).isRequired
    };

    containerProps() {
        const {
            isMobile,
            testimonials,
            parserOptions
        } = this.props;

        return {
            isMobile,
            testimonials,
            parserOptions
        };
    }

    render() {
        return (
            <Suspense
              fallback={ <Loader /> }
            >
                <TestimonialsSlider
                  { ...this.containerProps() }
                />
            </Suspense>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestimonialsSliderContainer);
