/**
 * Created by rouven on 03.03.17.
 */

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

import React from 'react'
import PropTypes from 'prop-types'
import VirtualizedSelect from 'react-virtualized-select'
import stringifyValue from '../../helpers/stringifyValue'

const VirtualizedSelectInput = (props) => {
    const value = stringifyValue(props.input.value);

    return <VirtualizedSelect
        {...props}
        value={value}
        onChange={(selected) => props.input.onChange(
            selected != null && selected.hasOwnProperty('value') ? selected.value : null)
        }
        onBlur={() => props.input.onBlur(value)}
        disabled={props.readOnly || props.disabled}
    />;
};


VirtualizedSelectInput.propTypes = {
    input: PropTypes.object,
    options: PropTypes.array,
    placeholder: PropTypes.node
};

export default VirtualizedSelectInput;