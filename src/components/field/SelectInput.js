/**
 * Created by rouven on 03.03.17.
 */

import 'react-select/dist/react-select.css'

import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import stringifyValue from '../../helpers/stringifyValue'

const SelectInput = props => {
    const value = stringifyValue(props.input.value);

    return <Select
        {...props}
        value={value}
        onChange={(selected) => props.input.onChange(
            selected != null && selected.hasOwnProperty('value') ? selected.value : null)
        }
        onBlur={() => props.input.onBlur(value)}
        disabled={props.readOnly || props.disabled}
    />;
};

SelectInput.propTypes = {
    input: PropTypes.object,
    options: PropTypes.array,
    placeholder: PropTypes.node
};

export default SelectInput;