/* eslint-disable react/no-unused-state */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
/**
 * @vendor      Buff
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Field from 'Component/Field';
import Form from 'Component/Form';
import Link from 'Component/Link';

import './NewsletterBlockWidget.style';

/** @namespace ScandipwaPageBuilderCustomizations/Component/NewsletterBlockWidget/Component */
export class NewsletterBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        blockSubtitle: PropTypes.string.isRequired,
        inputText: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        rulesGeneralText: PropTypes.string.isRequired,
        rulesFirstUrl: PropTypes.string.isRequired,
        rulesSecondUrl: PropTypes.string.isRequired,
        rulesFirstText: PropTypes.string.isRequired,
        rulesSeparatorText: PropTypes.string.isRequired,
        rulesSecondText: PropTypes.string.isRequired,
        onEmailChange: PropTypes.func.isRequired,
        onSubmitError: PropTypes.func.isRequired,
        isTacChecked: PropTypes.bool.isRequired,
        onCheckboxChange: PropTypes.func.isRequired,
        formSubmit: PropTypes.func.isRequired
    };

    handleEmailChange = (event, field) => {
        const { onEmailChange } = this.props;
        const { value = '' } = field;

        onEmailChange(value);
    };

    renderTitle() {
        const {
            blockTitle = ''
        } = this.props;

        return (
            <div block="Newsletter" elem="TitleWrapper">
                <span block="Newsletter" elem="Title">
                    { blockTitle }
                </span>
            </div>
        );
    }

    renderSubtitle() {
        const {
            blockSubtitle = ''
        } = this.props;

        return (
            <div block="Newsletter" elem="SubtitleWrapper">
                <div block="Newsletter" elem="SubtitlePlaceholder">
                    <p block="Newsletter" elem="SubtitleText">
                        { blockSubtitle }
                    </p>
                </div>
            </div>
        );
    }

    renderTACWrapper() {
        const {
            rulesGeneralText,
            rulesFirstText,
            rulesSeparatorText,
            rulesSecondText,
            rulesFirstUrl,
            rulesSecondUrl,
            onCheckboxChange,
            isTacChecked = false
        } = this.props;

        return (
            <div block="Newsletter" elem="TACWrapper">
                <div block="Newsletter" elem="CheckboxField">
                    <Field
                      type="checkbox"
                      attr={ {
                          id: 'termsAndConditions',
                          name: 'termsAndConditions',
                          defaultChecked: isTacChecked
                      } }
                      events={ {
                          onChange: onCheckboxChange
                      } }
                      mix={ { block: 'Newsletter', elem: 'Checkbox' } }
                    />
                </div>
                <label
                  htmlFor="email"
                  block="Newsletter"
                  elem="TACLabel"
                >
                    <span block="Newsletter" elem="TACText">
                        { rulesGeneralText }
                        <Link
                          to={ rulesFirstUrl }
                          block="Newsletter"
                          elem="TACLink"
                        >
                            { rulesFirstText }
                        </Link>
                        { rulesSeparatorText }
                        <Link
                          to={ rulesSecondUrl }
                          block="Newsletter"
                          elem="TACLink"
                        >
                           { rulesSecondText }
                        </Link>
                    </span>
                </label>
            </div>
        );
    }

    renderForm() {
        const {
            inputText,
            buttonText,
            onCheckboxChange,
            isTacChecked,
            formSubmit,
            onSubmitError
        } = this.props;

        return (
            <Form
              block="Newsletter"
              elem="Form"
              onError={ onSubmitError }
              onSubmit={ formSubmit }
            >
                <div block="Newsletter" elem="FormFieldEmail">
                    <Field
                      type="text"
                      attr={ {
                          id: 'email',
                          name: 'email',
                          defaultValue: '',
                          placeholder: inputText
                      } }
                      events={ {
                          onChange: this.handleEmailChange
                      } }
                      validateOn={ ['onChange'] }
                      validationRule={ {
                          isRequired: true,
                          inputType: 'email'
                      } }
                      addRequiredTag
                      mix={ { block: 'Newsletter', elem: 'FormFieldInput' } }
                    />
                </div>
                <div block="Newsletter" elem="FormSubmit">
                    <button
                      block="Newsletter"
                      elem="FormSubmitButton"
                      type="submit"
                      id="submitButton"
                      disabled={ !isTacChecked }
                      onChange={ onCheckboxChange }
                    >
                        { buttonText }
                    </button>
                </div>
            </Form>
        );
    }

    renderNewsletterActions() {
        return (
            <div block="Newsletter" elem="ActionsWrapper">
                <div block="Newsletter" elem="Actions">
                    { this.renderForm() }
                    <div block="Newsletter" elem="Line" />
                    { this.renderTACWrapper() }
                </div>
            </div>
        );
    }

    render() {
        return (
            <div block="Newsletter">
                <div block="Newsletter" elem="Wrapper">
                    { this.renderTitle() }
                    { this.renderSubtitle() }
                    { this.renderNewsletterActions() }
                </div>
            </div>
        );
    }
}

export default NewsletterBlockWidgetComponent;
