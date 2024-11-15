/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2023 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { AccordionType } from '../../type/Accordion.type';
import Accordion from './Accordion.component';

/** @namespace ScandipwaPageBuilderCustomizations/Component/Accordion/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isMobile: state.ConfigReducer.device.isMobile
});

/** @namespace ScandipwaPageBuilderCustomizations/Component/Accordion/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace ScandipwaPageBuilderCustomizations/Component/Accordion/Container */
export class AccordionContainer extends PureComponent {
  static propTypes = {
      elements: AccordionType.isRequired,
      isMobile: PropTypes.bool.isRequired
  };

  containerProps() {
      const {
          elements: {
              ExpandableContent: {
                  childEleBag: [
                      title = '',
                      content = {},
                      button = {}
                  ] = [],
                  Ele = {}
              },
              BaseAccordion = {}
          },
          isMobile
      } = this.props;

      return {
          title,
          content,
          button,
          Ele,
          BaseAccordion,
          isMobile
      };
  }

  render() {
      return <Accordion { ...this.containerProps() } />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionContainer);
