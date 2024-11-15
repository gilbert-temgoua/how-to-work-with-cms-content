/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/**
 * @vendor      Buff
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import RenderWhenVisible from 'Component/RenderWhenVisible';

import { BANNER_BLOCK_WIDGET } from '../../component/BannerBlockWidget/BannerBlockWidget.config';
import BannerBlockWidget from '../../component/BannerBlockWidget/BannerBlockWidget.container';
import { BRANDS_WIDGET } from '../../component/BrandsBlockWidget/BrandsBlockWidget.config';
import BrandsBlockWidget from '../../component/BrandsBlockWidget/BrandsBlockWidget.container';
import { CATEGORY_BLOCK_WIDGET } from '../../component/CategoryBlockWidget/CategoryBlockWidget.config';
import CategoryBlockWidget from '../../component/CategoryBlockWidget/CategoryBlockWidget.container';
import { EXAMPLE_BANNER_WIDGET } from '../../component/ExampleBannerWidget/ExampleBannerWidget.config';
import ExampleBannerWidget from '../../component/ExampleBannerWidget/ExampleBannerWidget.container';
import { NEWSLETTER_BLOCK_WIDGET } from '../../component/NewsletterBlockWidget/NewsletterBlockWidget.config';
import NewsletterBlockWidget from '../../component/NewsletterBlockWidget/NewsletterBlockWidget.container';
import { SOCIAL_BLOCK_WIDGET } from '../../component/SocialBlockWidget/SocialBlockWidget.config';
import SocialBlockWidget from '../../component/SocialBlockWidget/SocialBlockWidget.container';

const renderMap = (member) => ({
    ...member,
    [BRANDS_WIDGET]: {
        component: BrandsBlockWidget
    },
    [EXAMPLE_BANNER_WIDGET]: {
        component: ExampleBannerWidget
    },
    [CATEGORY_BLOCK_WIDGET]: {
        component: CategoryBlockWidget
    },
    [NEWSLETTER_BLOCK_WIDGET]: {
        component: NewsletterBlockWidget
    },
    [SOCIAL_BLOCK_WIDGET]: {
        component: SocialBlockWidget
    },
    [BANNER_BLOCK_WIDGET]: {
        component: BannerBlockWidget
    }
});

const renderContent = (args, callback, instance) => {
    const { type } = instance.props;

    const {
        component: Widget,
        fallback
    } = instance.renderMap[type] || {};

    if (Widget !== undefined) {
        return (
            <RenderWhenVisible fallback={ fallback }>
                <Widget { ...instance.props } />
            </RenderWhenVisible>
        );
    }

    return null;
};

export default {
    'Component/WidgetFactory/Component': {
        'member-function': {
            renderContent
        },
        'member-property': {
            renderMap
        }
    }
};
