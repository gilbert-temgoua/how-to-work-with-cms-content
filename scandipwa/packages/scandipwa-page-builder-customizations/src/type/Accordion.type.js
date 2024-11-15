/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */
import { PropTypes } from 'prop-types';

export const EleType = PropTypes.shape({
    $$typeof: PropTypes.string,
    render: PropTypes.func
});

export const AccordionElementType = PropTypes.shape({
    Ele: EleType,
    propsBag: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    childData: PropTypes.arrayOf(PropTypes.string),
    childEleBag: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
});

export const AccordionType = PropTypes.shape({
    BaseAccordion: AccordionElementType,
    ExpandableContent: AccordionElementType
});
