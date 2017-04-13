/**
 * Created by Marvin on 17.03.17.
 */

import {FORM_ERROR_SET} from "../actions/actionTypes";

const formErrorsReducer = (state = {}, action) => {
     switch (action.type) {
         case FORM_ERROR_SET:
             return Object.assign({}, state, {[action.name]: action.formErrors});
        default:
            return state;
    }
};

export default formErrorsReducer;