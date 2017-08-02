/**
 * Created by Marvin Ruppelt on 13.03.17.
 */

import React from 'react'

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

    return {
        FieldError: FieldError,
        RenderError: FieldError,

        //hat schwerwiegenden fehler
        hasErrors: function () {
            return (errors && errors.hasOwnProperty('fatal') && Object.keys(errors.fatal).length > 0);
        },

        // wurde geprüft -> errors gesetzt und array
        isValidated: () => errors && Object.keys(errors).length > 0,
    };
};

export default FormErrors;