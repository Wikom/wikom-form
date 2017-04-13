/**
 * Created by rouven on 02.03.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'

const SelectClassic = ({name, className, options}) => {
    const optionTags = Object
        .keys(options)
        .map(option => <option value={option} key={option}>{options[option]}</option>);

    return (
        <Field name={name} component="select" className={className}>
            <option>Bitte auswählen</option>
            {optionTags}
        </Field>
    );
};

SelectClassic.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    options: PropTypes.object.isRequired
};

export default SelectClassic;
