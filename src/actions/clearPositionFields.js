import {change} from 'redux-form'

const clearPositionFields = ({form, fields}) => dispatch => {
    for (let i = 0, n = fields.length; i < n; i++) {
        dispatch(change(form, fields[i], null));
    }
};

export default clearPositionFields;