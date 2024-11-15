/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */

import { PropTypes } from 'prop-types';
import { PureComponent } from 'react';

import ExpandableContent from 'Component/ExpandableContent';

import { AccordionElementType, EleType } from '../../type/Accordion.type';

import './Accordion.style.scss';

/** @namespace ScandipwaPageBuilderCustomizations/Component/Accordion/Component */
export class AccordionComponent extends PureComponent {
  static propTypes = {
      title: PropTypes.string.isRequired,
      content: AccordionElementType.isRequired,
      button: AccordionElementType.isRequired,
      Ele: EleType.isRequired,
      BaseAccordion: AccordionElementType.isRequired,
      isMobile: PropTypes.bool.isRequired
  };

  renderAnchor(id) {
      if (!id) {
          return null;
      }

      return (
            <div id={ id } />
      );
  }

  render() {
      const {
          title,
          content,
          button,
          Ele,
          BaseAccordion: {
              propsBag: [
                  {
                      'data-accordion-anchor': elemId,
                      'data-accordion-desktop-disabled': isHiddenOnDesktop,
                      'data-accordion-active': isExpanded
                  }
              ] = []
          },
          isMobile
      } = this.props;

      if (!isMobile && Boolean(isHiddenOnDesktop)) {
          return null;
      }

      return (
          <div block="PBAccordion">
              { this.renderAnchor(elemId) }
              <ExpandableContent
                heading={ title }
                useOnDesktop
                isContentExpanded={ Boolean(isExpanded) }
              >
                  <Ele>{ content }</Ele>
                  <Ele>{ button }</Ele>
              </ExpandableContent>
          </div>
      );
  }
}

export default AccordionComponent;
