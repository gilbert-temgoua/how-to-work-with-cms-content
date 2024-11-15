/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */

import attributesToProps from 'html-react-parser/lib/attributes-to-props';
import domToReact from 'html-react-parser/lib/dom-to-react';
import { createElement, lazy } from 'react';

import { ACCORDION_CONTENT_TYPE, ACCORDION_SKELETON } from '../../component/Accordion/Accordion.config';

import '../../component/Html/custom-styles/_main.scss';

export const Accordion = lazy(() => import(
    /* webpackMode: "lazy", webpackPrefetch: true */
    '../../component/Accordion'
));

export const ImageLightboxPopup = lazy(() => import(
    /* webpackMode: "lazy", webpackPrefetch: true */
    '../../component/ImageLightboxPopup/ImageLightboxPopup.container'
));

export const ExpandableText = lazy(() => import(
    /* webpackMode: "lazy", webpackPrefetch: true */
    '../../component/ExpandableText/ExpandableText.component'
));

export const TestimonialsSlider = lazy(() => import(
    /* webpackMode: "lazy", webpackPrefetch: true */
    '../../component/TestimonialsSlider/TestimonialsSlider.container'
));

export class HtmlComponentPlugin {
    overrideRules = (originalMember, instance) => {
        const newRules = [
            {
                query: { attribs: [{ class: 'PBExpandableContent' }] },
                replace: this.replaceCollapsibleText
            },
            {
                query: { attribs: [{ class: 'TestimonialsSlider' }] },
                replace: this.replaceTestimonialsSlider
            },
            {
                query: { dataContentType: ACCORDION_CONTENT_TYPE },
                replace: (domNode) => (
                    createElement(Accordion, {
                        elements: instance.toReactElements(
                            [domNode],
                            ACCORDION_SKELETON
                        )
                    })
                )
            },
            {
                query: { attribs: [{ class: 'pagebuilder-mobile-hidden' }] },
                replace: this.replaceImageAsPopUp
            },
            {
                query: { attribs: [{ class: 'pagebuilder-mobile-only' }] },
                replace: this.replaceImageAsPopUp
            }
        ];

        return [...originalMember, ...newRules];
    };

    // eslint-disable-next-line consistent-return
    replaceImageAsPopUp(domNode) {
        const { attribs, parent: { attribs: parentAttribs } } = domNode;
        const classNameCheck = parentAttribs.class
            && (parentAttribs.class === 'ShowAsPopUp' || parentAttribs.class.includes('ShowAsPopUp'));

        // vvv if URL link is provided in admin for Image content type, we skip the conversion
        if (attribs.src && classNameCheck && !parentAttribs.href) {
            return (
                <ImageLightboxPopup
                  payload={ attributesToProps(attribs) }
                />
            );
        }
    }

    replaceCollapsibleText({ children }) {
        return (
            <div block="PBCollapsibleText">
                <ExpandableText
                  useOnDesktop
                >
                    { domToReact(children, this.parserOptions) }
                </ExpandableText>
            </div>
        );
    }

    replaceTestimonialsSlider(domNode) {
        const {
            children: [{
                children: [,
                    {
                        attribs,
                        children
                    } = {}
                ] = []
            } = {}
            ] = [],
            children: domChildren
        } = domNode || {};

        if (!children || !domChildren[0]) {
            return null;
        }

        // converts PB row with "tabs" into swiper slider
        if (attribs?.class === 'tabs-content') {
            return (
                <TestimonialsSlider
                  testimonials={ children }
                  parserOptions={ this.parserOptions }
                />
            );
        }

        // converts PB row with columns in to swiper slider
        // children nesting differs for PB column group
        if (domChildren[0].attribs.class === 'pagebuilder-column-group') {
            const { children } = domChildren[0];

            return (
                <TestimonialsSlider
                  testimonials={ children }
                  parserOptions={ this.parserOptions }
                />
            );
        }

        return null;
    }
}

export const { overrideRules } = new HtmlComponentPlugin();

export default {
    'Component/Html/Component': {
        'member-property': {
            rules: overrideRules
        }
    }
};
