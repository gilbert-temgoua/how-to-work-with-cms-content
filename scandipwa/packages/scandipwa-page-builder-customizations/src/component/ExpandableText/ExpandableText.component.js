/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */

import ExpandableContent from 'Component/ExpandableContent/ExpandableContent.component';

import {
    SHOW_LESS,
    SHOW_MORE
} from './ExpandableText.config';

import './ExpandableText.style';

/** @namespace ScandipwaPageBuilderCustomizations/Component/ExpandableText/Component */
export class ExpandableTextComponent extends ExpandableContent {
    /**
     * Extended to change button from icon to text
     */
    renderButton() {
        const { isContentExpanded } = this.state;
        const { mix } = this.props;

        return (
            <div
              role="button"
              tabIndex={ 0 }
              block="ExpandableContent"
              elem="Button"
              mods={ { isContentExpanded } }
              mix={ { ...mix, elem: 'ExpandableContentButton' } }
              onClick={ this.toggleExpand }
              onKeyDown={ this.toggleExpand }
            >
                { this.renderButtonText() }
            </div>
        );
    }

    renderButtonText() {
        const { isContentExpanded } = this.state;

        if (isContentExpanded) {
            return SHOW_LESS;
        }

        return SHOW_MORE;
    }

    /**
     * Extended to move button below content
     */
    render() {
        const { mix, mods } = this.props;

        return (
            <article
              block="ExpandableContent"
              mix={ mix }
              mods={ mods }
              ref={ this.expandableContentRef }
            >
                { this.renderContent() }
                { this.renderButton() }
            </article>
        );
    }
}
export default ExpandableTextComponent;
