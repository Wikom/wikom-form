/**
 * Created by rouven on 30.03.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Picker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment'
import locale from 'moment/locale/de'

const Datepicker = ({input: {name, value, ...input}, disabled, dateFormat, openToDate, className, ...rest}) => {
    const onChange = function (v) {
        if (moment.isMoment(v) && v.isValid()) {
            return input.onBlur(v);
        }

        if (moment.utc(v, dateFormat, true).isValid() || v === null || v === "") {
            return input.onChange(v);
        }

        return input.onChange('');
    };

    const onBlur = (event) => {
        // const eTarget = event.target;
        const eValue = event.target.value;
        const v = moment.utc(eValue, dateFormat, true);

        if (moment.isMoment(v) && v.isValid()) {
            return input.onBlur(v);
        }

        return input.onBlur(eValue);
    };

    value = value
        ? moment.utc(value, [dateFormat, 'YYYY-MM-DD'], true)
        : null;
    value = (moment.isMoment(value) && value.isValid())
        ? value
        : null;

    if (disabled) {
        return <div className="input-lookalike">
            {moment.utc(value, [dateFormat, 'YYYY-MM-DD'], true).format(dateFormat)}
        </div>;
    }

    const props = {
        name,
        value,
        className,
        dateFormat,
        selected: value,
        onChange,
        onBlur,
        ...rest
    };

    if (openToDate !== null) {
        props.openToDate = (moment.isMoment(value) && value.isValid())
            ? value
            : moment.utc(openToDate, [dateFormat, 'YYYY-MM-DD'], true);
    }

    return <Picker {...props}/>;
};

Datepicker.defaultProps = {
    className: 'form-control',
    dateFormat: 'DD.MM.YYYY',
    openToDate: null
};

Datepicker.propTypes = {
    className: PropTypes.string,
    dateFormat: PropTypes.string,
    openToDate: PropTypes.string
};

export default Datepicker;