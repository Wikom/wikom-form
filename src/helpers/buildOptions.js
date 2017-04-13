/**
 * Created by rouven on 08.03.17.
 */

import stringifyValue from './stringifyValue'

export default rawOptions => rawOptions
    ? Object.keys(rawOptions).map(value => ({value: stringifyValue(value), label: rawOptions[value]}))
    : [];