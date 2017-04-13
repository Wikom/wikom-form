/**
 * Created by Marvin on 17.03.17.
 */

import {FORM_ERROR_SET} from "./actionTypes";

export const setFormErrors = (name, formErrors) => ({
    type: FORM_ERROR_SET,
    name,
    formErrors
});

export const setFormErrorsFromSubmit = (name, errors) => {
    let fatal = {};

    errors.map(error => {
        if (!fatal.hasOwnProperty(error.field)) {
            fatal[error.field] = [];
        }
        fatal[error.field].push(error.message);
    });

    return {
        type: FORM_ERROR_SET,
        name,
        formErrors: {fatal: fatal}
    };
};
