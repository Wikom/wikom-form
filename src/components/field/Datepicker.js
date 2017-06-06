/**
 * Created by rouven on 30.03.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import moment from 'moment'
import locale from 'moment/locale/de'
import {Field} from 'redux-form'
import styles from 'react-datetime/css/react-datetime.css'

const Datepicker = ({input: {name, value, ...input}, disabled, ...rest}) => {
    const format = "DD.MM.YYYY";

    const onChange = function (a) {
        if (moment(a, format, true).isValid() || a === null || a === "") {
            return input.onChange(a);
        }
    };

    value = value ? moment.utc(value) : null;

    if (disabled) {
        return <div className="input-lookalike">
            {moment(value).format(format)}
        </div>;
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