/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component, no-magic-numbers, react/no-array-index-key */
/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */

import domToReact from 'html-react-parser/lib/dom-to-react';
import PropTypes from 'prop-types';
import { createRef, PureComponent } from 'react';
import { A11y, FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ChevronRight from './icons/chevron-right.png';
import StarIcon from './icons/star-icon.svg';
import {
    MobileSliderSpaceBetween,
    ScrollSpeed,
    SliderSpaceBetween,
    StarRating,
    TestimonialsSliderBreakpoints
} from './TestimonialsSlider.config';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import './TestimonialsSlider.style';
/** @namespace ScandipwaPageBuilderCustomizations/Component/TestimonialsSlider/Component */
export class TestimonialsSliderComponent extends PureComponent {
    static propTypes = {
        isMobile: PropTypes.bool.isRequired,
        testimonials: PropTypes.arrayOf(Element).isRequired,
        parserOptions: PropTypes.shape({
            trim: PropTypes.bool.isRequired,
            replace: PropTypes.func.isRequired
        }).isRequired
    };

    state = {
        navigationPrevRef: null,
        navigationNextRef: null
    };

    navigationPrevRef = createRef();

    navigationNextRef = createRef();

    componentDidMount() {
        this.setState({
            navigationPrevRef: this.navigationPrevRef.current,
            navigationNextRef: this.navigationNextRef.current
        });
    }

    renderContent() {
        const { testimonials, parserOptions } = this.props;

        /**
         * Considering all default testimonials/slides consists of 4 parts:
         * - date
         * - review/testimonial
         * - author's picture
         * - author's name
         */
        return (
            <>
                { testimonials.map((testimonial, index) => (
                    <SwiperSlide key={ index }>
                        { this.renderStarRating(testimonial) }
                        { domToReact(testimonial.children, parserOptions) }
                    </SwiperSlide>
                )) }
            </>
        );
    }

    renderStarRating(testimonial) {
        const { attribs: { class: className = '' } = {} } = testimonial;

        if (!className || !className.length) {
            return null;
        }

        const starsAmount = StarRating.filter((record) => className.includes(record.className))[0];

        if (!starsAmount) {
            return null;
        }

        return (
            <span block="Star" elem="Rating">
                    { new Array(starsAmount.rating).fill(null).map((_, index) => (
                        <img src={ StarIcon } alt="star icon" key={ index } />
                    )) }
            </span>
        );
    }

    renderCustomArrows() {
        return (
            <>
                <div
                  ref={ this.navigationPrevRef }
                  block="TestimonialsSlider"
                  elem="NavigationPrev"
                >
                    <img src={ ChevronRight } alt="Chevron Right Icon" />
                </div>
                <div
                  ref={ this.navigationNextRef }
                  block="TestimonialsSlider"
                  elem="NavigationNext"
                >
                    <img src={ ChevronRight } alt="Chevron Left Icon" />
                </div>
            </>
        );
    }

    render() {
        const { isMobile } = this.props;
        const {
            navigationPrevRef,
            navigationNextRef
        } = this.state;

        return (
            <div
              block="TestimonialsSlider"
              mods={ { isMobile } }
            >
                <Swiper
                  modules={ [Navigation] }
                  spaceBetween={ isMobile ? MobileSliderSpaceBetween : SliderSpaceBetween }
                  speed={ ScrollSpeed }
                  navigation={ {
                      prevEl: navigationPrevRef,
                      nextEl: navigationNextRef
                  } }
                  breakpoints={ TestimonialsSliderBreakpoints }
                >
                    { this.renderContent() }
                </Swiper>
                { this.renderCustomArrows() }
            </div>
        );
    }
}

export default TestimonialsSliderComponent;
