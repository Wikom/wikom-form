/**
 * Created by Marvin on 17.03.17.
 */

import {FORM_ERROR_SET} from "../actions/actionTypes";
import {actionTypes} from 'redux-form';

const formErrorsReducer = (state = {}, action) => {
     switch (action.type) {
         case FORM_ERROR_SET:
             return Object.assign({}, state, {[action.name]: action.formErrors});
         case actionTypes.DESTROY:
             if (Object.keys(state).indexOf(action.meta.form[0]) !== -1) {
                 const {[action.meta.form[0]]: _, ...nextState} = state;
                 return nextState;
             }
        default:
            return state;
    }
};

export default formErrorsReducer;