/**
 * Created by Marvin Ruppelt on 13.03.17.
 */

import React from 'react'
import findInObject from 'find-in-object'

const FormErrors = (errors) => {
    const FieldError = function ({name}) {
        if (!errors || !Object.keys(errors).length)
            return null;

        if (errors.hasOwnProperty('fatal') && errors.fatal[name] || false) {
            return <div className="text-danger form-error form-error--fatal">{errors.fatal[name][0]}</div>;
        }
        if (errors.hasOwnProperty('errors') && errors.errors[name] || false) {
            return <div className="text-danger form-error">{errors.errors[name][0]}</div>;
        }
        if (errors.hasOwnProperty('warnings') && errors.warnings[name] || false) {
            return <div className="text-warning form-error">{errors.warnings[name][0]}</div>;
        }
        if (errors.hasOwnProperty('infos') && errors.infos[name] || false) {
            return <div className="text-muted form-error">{errors.infos[name][0]}</div>;
        }

        return null;
    };

    const hasError = (name) => {
        return errors &&
            (errors.hasOwnProperty('fatal') && errors.fatal[name] || false) ||
            (errors.hasOwnProperty('errors') && errors.errors[name] || false);
    };

    const FormGroup1 = ({errorFor, children}) => {
        let hasErrors = false;
        console.log('FormGroup', errorFor, typeof errorFor);

        if (typeof errorFor == "string") {
            hasErrors = hasError(errorFor);
        }

        if (typeof errorFor == "object") {
            errorFor.map(function (key) {
                hasErrors = hasErrors || hasError(key);
            });
        }

        return (
            <div className={'form-group' + (hasErrors ? ' has-error' : null)}>
                {children}
            </div>
        );
    };

    const FormGroup = ({errorFor, children}) => {
console.log('no matter');
        return (
            <div className={'form-group' + (1 ? ' has-error' : null)}>
                {React.cloneElement(children)}
            </div>
        );
    };


    return {
        FieldError: FieldError,
        RenderError: FieldError,
        FormGroup: FormGroup,

        //hat schwerwiegenden fehler
        hasErrors: function () {
            return (errors && errors.hasOwnProperty('fatal') && Object.keys(errors.fatal).length > 0);
        },

        // wurde geprüft -> errors gesetzt und array
        isValidated: () => errors && Object.keys(errors).length > 0,
    };
};

export default FormErrors;