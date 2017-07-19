/**
 * Created by rouven on 19.07.17.
 */

import {change} from 'redux-form'

const multiChange = (form, fields) => dispatch => {
    for (let field in fields) {
        dispatch(change(form, field, fields[field]));
    }
};

export default multiChange