/**
 * Created by rouven on 19.07.17.
 */

import asyncValidate from './asyncValidate'

let timeout = null;

const handleChange = ({name, url}) => (values, dispatch) => {
    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => asyncValidate({name, url})(values, dispatch), 1000);

    return Promise.resolve('field changed');
};

export default handleChange;