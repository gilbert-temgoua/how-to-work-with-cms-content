/* eslint-disable no-magic-numbers */
/**
 * @vendor      Buff
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import CategoryBlockWidget from './CategoryBlockWidget.component';

/** @namespace ScandipwaPageBuilderCustomizations/Component/CategoryBlockWidget/Container */
export class CategoryBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'data-block-title': PropTypes.string.isRequired,
        'data-block-subtitle': PropTypes.string.isRequired,
        'data-block-image-text': PropTypes.string.isRequired,
        'data-block-image-src': PropTypes.string.isRequired,
        'data-block-image-alt': PropTypes.string.isRequired,
        'data-block-image-title': PropTypes.string.isRequired,
        'data-block-image-url': PropTypes.string.isRequired,
        'data-block-button-text': PropTypes.string.isRequired,
        'data-block-button-url': PropTypes.string.isRequired,
        'data-first-category-image-src': PropTypes.string.isRequired,
        'data-first-category-image-alt': PropTypes.string.isRequired,
        'data-first-category-image-title': PropTypes.string.isRequired,
        'data-first-category-url': PropTypes.string.isRequired,
        'data-first-category-caption': PropTypes.string.isRequired,
        'data-second-category-image-src': PropTypes.string.isRequired,
        'data-second-category-image-alt': PropTypes.string.isRequired,
        'data-second-category-image-title': PropTypes.string.isRequired,
        'data-second-category-url': PropTypes.string.isRequired,
        'data-second-category-caption': PropTypes.string.isRequired,
        'data-third-category-image-src': PropTypes.string.isRequired,
        'data-third-category-image-alt': PropTypes.string.isRequired,
        'data-third-category-image-title': PropTypes.string.isRequired,
        'data-third-category-url': PropTypes.string.isRequired,
        'data-third-category-caption': PropTypes.string.isRequired,
        'data-fourth-category-image-src': PropTypes.string.isRequired,
        'data-fourth-category-image-alt': PropTypes.string.isRequired,
        'data-fourth-category-image-title': PropTypes.string.isRequired,
        'data-fourth-category-url': PropTypes.string.isRequired,
        'data-fourth-category-caption': PropTypes.string.isRequired,
        'data-block-description': PropTypes.string,
        'data-shop-button-text': PropTypes.string,
        'data-shop-button-url': PropTypes.string
    };

    // default values for optional content
    static defaultProps = {
        'data-block-description': undefined,
        'data-shop-button-text': undefined,
        'data-shop-button-url': undefined
    };

    containerProps() {
        const {
            'data-block-title': blockTitle,
            'data-block-subtitle': blockSubtitle,
            'data-block-description': blockDescription,
            'data-block-image-text': blockImageText,
            'data-block-image-src': blockImageSrc,
            'data-block-image-alt': blockImageAlt,
            'data-block-image-title': blockImageTitle,
            'data-block-image-url': blockImageUrl,
            'data-block-button-text': blockButtonText,
            'data-block-button-url': blockButtonUrl,
            'data-first-category-image-src': firstCategoryImageSrc,
            'data-first-category-image-alt': firstCategoryImageAlt,
            'data-first-category-image-title': firstCategoryImageTitle,
            'data-first-category-url': firstCategoryUrl,
            'data-first-category-caption': firstCategoryCaption,
            'data-second-category-image-src': secondCategoryImageSrc,
            'data-second-category-image-alt': secondCategoryImageAlt,
            'data-second-category-image-title': secondCategoryImageTitle,
            'data-second-category-url': secondCategoryUrl,
            'data-second-category-caption': secondCategoryCaption,
            'data-third-category-image-src': thirdCategoryImageSrc,
            'data-third-category-image-alt': thirdCategoryImageAlt,
            'data-third-category-image-title': thirdCategoryImageTitle,
            'data-third-category-url': thirdCategoryUrl,
            'data-third-category-caption': thirdCategoryCaption,
            'data-fourth-category-image-src': fourthCategoryImageSrc,
            'data-fourth-category-image-alt': fourthCategoryImageAlt,
            'data-fourth-category-image-title': fourthCategoryImageTitle,
            'data-fourth-category-url': fourthCategoryUrl,
            'data-fourth-category-caption': fourthCategoryCaption,
            'data-shop-button-text': shopButtonText,
            'data-shop-button-url': shopButtonUrl
        } = this.props;

        return {
            blockTitle,
            blockSubtitle,
            blockDescription,
            blockImageText,
            blockImageSrc,
            blockImageAlt,
            blockImageTitle,
            blockImageUrl,
            blockButtonText,
            blockButtonUrl,
            firstCategoryImageSrc,
            firstCategoryImageAlt,
            firstCategoryImageTitle,
            firstCategoryUrl,
            firstCategoryCaption,
            secondCategoryImageSrc,
            secondCategoryImageAlt,
            secondCategoryImageTitle,
            secondCategoryUrl,
            secondCategoryCaption,
            thirdCategoryImageSrc,
            thirdCategoryImageAlt,
            thirdCategoryImageTitle,
            thirdCategoryUrl,
            thirdCategoryCaption,
            fourthCategoryImageSrc,
            fourthCategoryImageAlt,
            fourthCategoryImageTitle,
            fourthCategoryUrl,
            fourthCategoryCaption,
            shopButtonText,
            shopButtonUrl
        };
    }

    render() {
        return (
            <CategoryBlockWidget
              { ...this.containerProps() }
            />
        );
    }
}

export default CategoryBlockWidgetContainer;
