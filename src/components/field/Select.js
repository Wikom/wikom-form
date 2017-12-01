/**
 * Created by rouven on 13.04.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import SelectInput from './SelectInput'
import VirtualizedSelectInput from './VirtualizedSelectInput'
import {buildOptions, stringifyValue} from '../../helpers'

const Select = ({options, ...props}) => {
    const selectOptions = options instanceof Array
        ? options.map(option => ({
            value: stringifyValue(option.value),
            label: option.label
        }))
        : buildOptions(options);
    const Component = selectOptions.length > 100
        ? VirtualizedSelectInput
        : SelectInput;

    return <Component options={selectOptions} {...props}/>;
};

Select.defaultProps = {
    placeholder: 'Bitte auswählen...',
    noResultsText: 'Kein Ergebnis gefunden'
};

Select.propTypes = {
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    placeholder: PropTypes.node,
    noResultsText: PropTypes.node
};

export default Select;