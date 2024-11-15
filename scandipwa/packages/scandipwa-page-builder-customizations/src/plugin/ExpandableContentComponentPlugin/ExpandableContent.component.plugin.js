/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */

import ChevronIcon from 'Component/ChevronIcon';

export const renderContent = (args, callback, instance) => {
    const {
        children,
        mix,
        useOnDesktop
    } = instance.props;
    const { isContentExpanded } = instance.state;

    const mods = {
        isContentExpanded,
        useOnDesktop,
        isContentExpandedDesktop: isContentExpanded && useOnDesktop
    };

    return (
        <div
          block="ExpandableContent"
          elem="Content"
          mods={ mods }
          mix={ { ...mix, elem: 'ExpandableContentContent', mods } }
        >
            { children }
        </div>
    );
};

export const renderButtonIcon = (args, callback, instance) => {
    const { isContentExpanded } = instance.state;
    const { useOnDesktop, isArrow } = instance.props;

    if (useOnDesktop && !isArrow) {
        return <ChevronIcon direction={ isContentExpanded ? 'top' : 'bottom' } />;
    }

    if (useOnDesktop && isArrow) {
        return instance.renderTogglePlusMinus();
    }

    return callback.apply(args, instance);
};

export const render = (args, callback, instance) => {
    const { mix, mods, useOnDesktop = true } = instance.props;

    callback.apply(args, instance);

    return (
        <article
          block="ExpandableContent"
          mix={ { ...mix, elem: 'ExpandableContent', mods: { ...mods, useOnDesktop } } }
          mods={ { ...mods, useOnDesktop } }
          ref={ instance.expandableContentRef }
        >
            { instance.renderButton() }
            { instance.renderContent() }
        </article>
    );
};

export default {
    'Component/ExpandableContent/Component': {
        'member-function': {
            renderContent,
            renderButtonIcon,
            render
        }
    }
};
