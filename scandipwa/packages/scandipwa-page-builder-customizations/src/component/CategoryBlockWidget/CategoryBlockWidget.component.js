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

import './CategoryBlockWidget.style';

/** @namespace ScandipwaPageBuilderCustomizations/Component/CategoryBlockWidget/Component */
export class CategoryBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        blockSubtitle: PropTypes.string.isRequired,
        blockDescription: PropTypes.string.isRequired,
        blockImageText: PropTypes.string.isRequired,
        blockImageSrc: PropTypes.string.isRequired,
        blockImageAlt: PropTypes.string.isRequired,
        blockImageTitle: PropTypes.string.isRequired,
        blockImageUrl: PropTypes.string.isRequired,
        blockButtonText: PropTypes.string.isRequired,
        blockButtonUrl: PropTypes.string.isRequired,
        firstCategoryImageSrc: PropTypes.string.isRequired,
        firstCategoryImageAlt: PropTypes.string.isRequired,
        firstCategoryImageTitle: PropTypes.string.isRequired,
        firstCategoryUrl: PropTypes.string.isRequired,
        firstCategoryCaption: PropTypes.string.isRequired,
        secondCategoryImageSrc: PropTypes.string.isRequired,
        secondCategoryImageAlt: PropTypes.string.isRequired,
        secondCategoryImageTitle: PropTypes.string.isRequired,
        secondCategoryUrl: PropTypes.string.isRequired,
        secondCategoryCaption: PropTypes.string.isRequired,
        thirdCategoryImageSrc: PropTypes.string.isRequired,
        thirdCategoryImageAlt: PropTypes.string.isRequired,
        thirdCategoryImageTitle: PropTypes.string.isRequired,
        thirdCategoryUrl: PropTypes.string.isRequired,
        thirdCategoryCaption: PropTypes.string.isRequired,
        fourthCategoryImageSrc: PropTypes.string.isRequired,
        fourthCategoryImageAlt: PropTypes.string.isRequired,
        fourthCategoryImageTitle: PropTypes.string.isRequired,
        fourthCategoryUrl: PropTypes.string.isRequired,
        fourthCategoryCaption: PropTypes.string.isRequired,
        shopButtonUrl: PropTypes.string.isRequired,
        shopButtonText: PropTypes.string.isRequired
    };

    renderBlockImage() {
        const {
            blockImageSrc,
            blockImageAlt,
            blockImageTitle,
            blockImageUrl,
            blockButtonText,
            blockButtonUrl,
            blockImageText
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnBanner">
                <figure block="CategoryBlock" elem="ImagePlaceholder">
                    <Link to={ blockImageUrl }>
                        <Image
                          src={ blockImageSrc }
                          alt={ blockImageAlt }
                          title={ blockImageTitle }
                          mix={ {
                              block: 'CategoryBlock',
                              elem: 'Image'
                          } }
                        />
                    </Link>
                </figure>
                <div block="CategoryBlock" elem="ButtonHolder">
                    <p block="CategoryBlock" elem="MainImageTextP">
                            <span
                              block="CategoryBlock"
                              elem="MainImageText"
                            >
                                { blockImageText }
                            </span>
                    </p>
                    <div block="CategoryBlock" elem="ButtonItem">
                        <Link
                          to={ blockButtonUrl }
                          block="CategoryBlock"
                          elem="Button"
                        >
                            <span
                              block="CategoryBlock"
                              elem="ButtonText"
                            >
                                { blockButtonText }
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    renderOptionalContent() {
        const {
            blockDescription,
            shopButtonUrl,
            shopButtonText
        } = this.props;

        if (blockDescription === undefined || shopButtonUrl === undefined || shopButtonText === undefined) {
            return null;
        }

        return (
            <div block="CategoryBlock" elem="ColumnHidden">
                <p block="CategoryBlock" elem="DescriptionP">
                    <span
                      block="CategoryBlock"
                      elem="Description"
                    >
                        { blockDescription }
                    </span>
                </p>
                { this.renderShopButton() }
            </div>
        );
    }

    renderBlockTitle() {
        const {
            blockTitle,
            blockSubtitle
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnGroup">
                <div block="CategoryBlock" elem="ColumnVisible">
                    <div block="CategoryBlock" elem="TitleBlock">
                        <p block="CategoryBlock" elem="SubtitleP">
                            <span
                              block="CategoryBlock"
                              elem="Subtitle"
                            >
                                { blockSubtitle }
                            </span>
                        </p>
                        <p block="CategoryBlock" elem="TitleP">
                            <span
                              block="CategoryBlock"
                              elem="Title"
                            >
                                { blockTitle }
                            </span>
                        </p>
                    </div>
                </div>
                { this.renderOptionalContent() }
            </div>
        );
    }

    renderCategoriesFirstGrid() {
        const {
            firstCategoryImageSrc,
            firstCategoryImageAlt,
            firstCategoryImageTitle,
            firstCategoryUrl,
            firstCategoryCaption,
            secondCategoryImageSrc,
            secondCategoryImageAlt,
            secondCategoryImageTitle,
            secondCategoryUrl,
            secondCategoryCaption
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnFirstGrid">
                <div block="CategoryBlock" elem="CategoryHolder">
                    <Link
                      block="CategoryBlock"
                      elem="CategoryImageLink"
                      to={ firstCategoryUrl }
                    >
                        <Image
                          src={ firstCategoryImageSrc }
                          alt={ firstCategoryImageAlt }
                          title={ firstCategoryImageTitle }
                          mix={ {
                              block: 'CategoryBlock',
                              elem: 'CategoryImage'
                          } }
                        />
                        <figcaption
                          block="CategoryBlock"
                          elem="CategoryCaption"
                        >
                            { firstCategoryCaption }
                        </figcaption>
                    </Link>
                </div>
                <div block="CategoryBlock" elem="CategoryHolder">
                    <Link
                      block="CategoryBlock"
                      elem="CategoryImageLink"
                      to={ secondCategoryUrl }
                    >
                        <Image
                          src={ secondCategoryImageSrc }
                          alt={ secondCategoryImageAlt }
                          title={ secondCategoryImageTitle }
                          mix={ {
                              block: 'CategoryBlock',
                              elem: 'CategoryImage'
                          } }
                        />
                        <figcaption
                          block="CategoryBlock"
                          elem="CategoryCaption"
                        >
                            { secondCategoryCaption }
                        </figcaption>
                    </Link>
                </div>
            </div>
        );
    }

    renderCategoriesSecondGrid() {
        const {
            thirdCategoryImageSrc,
            thirdCategoryImageAlt,
            thirdCategoryImageTitle,
            thirdCategoryUrl,
            thirdCategoryCaption,
            fourthCategoryImageSrc,
            fourthCategoryImageAlt,
            fourthCategoryImageTitle,
            fourthCategoryUrl,
            fourthCategoryCaption
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnSecondGrid">
                <div block="CategoryBlock" elem="CategoryHolder">
                    <Link
                      to={ thirdCategoryUrl }
                      block="CategoryBlock"
                      elem="CategoryImageLink"
                    >
                        <Image
                          src={ thirdCategoryImageSrc }
                          alt={ thirdCategoryImageAlt }
                          title={ thirdCategoryImageTitle }
                          mix={ {
                              block: 'CategoryBlock',
                              elem: 'CategoryImage'
                          } }
                        />
                        <figcaption
                          block="CategoryBlock"
                          elem="CategoryCaption"
                        >
                            { thirdCategoryCaption }
                        </figcaption>
                    </Link>
                </div>
                <div block="CategoryBlock" elem="CategoryHolder">
                    <Link
                      block="CategoryBlock"
                      elem="CategoryImageLink"
                      to={ fourthCategoryUrl }
                    >
                        <Image
                          src={ fourthCategoryImageSrc }
                          alt={ fourthCategoryImageAlt }
                          title={ fourthCategoryImageTitle }
                          mix={ {
                              block: 'CategoryBlock',
                              elem: 'CategoryImage'
                          } }
                        />
                        <figcaption
                          block="CategoryBlock"
                          elem="CategoryCaption"
                        >
                            { fourthCategoryCaption }
                        </figcaption>
                    </Link>
                </div>
            </div>
        );
    }

    renderShopButton() {
        const {
            shopButtonUrl,
            shopButtonText
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ShopButtonHolder">
                <div block="CategoryBlock" elem="ShopButtonItem">
                    <Link
                      to={ shopButtonUrl }
                      block="CategoryBlock"
                      elem="ShopButton"
                    >
                        <span
                          block="CategoryBlock"
                          elem="ShopButtonText"
                        >
                            { shopButtonText }
                        </span>
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div block="CategoryBlock">
                { this.renderBlockTitle() }
                <div block="CategoryBlock" elem="ColumnGroup">
                    { this.renderBlockImage() }
                    { this.renderCategoriesFirstGrid() }
                    { this.renderCategoriesSecondGrid() }
                </div>
            </div>
        );
    }
}

export default CategoryBlockWidgetComponent;
