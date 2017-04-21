/**
 * Created by rouven on 30.03.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import moment from 'moment'
import {Field} from 'redux-form'
import styles from 'react-datetime/css/react-datetime.css'

const Datepicker = ({input: {name, value, disabled, ...input}, ...rest}) => {
    const format = "DD.MM.YYYY";

    const onChange = function (a) {
        if (moment(a, format, true).isValid()) {
            return input.onChange(a);
        }
    };

    value = value ? moment.utc(value) : null;

    if(disabled){
        console.log('disabled datepicker', disabled, input, name, value, disabled);

        return  <Field
            name={name}
            value={value}
            component="input"
            className="form-control"
            disabled={true}
            onChange={onChange}
            onBlur={input.onChange}
        />;
    }
    return <Datetime
        name={name}
        value={value}
        dateFormat={format}
        timeFormat={false}
        utc={true}
        closeOnSelect={true}
        selected={value}
        onChange={onChange}
        onBlur={input.onChange}
        {...rest}
    />;
};

export default Datepicker;