/**
 * Created by rouven on 19.07.17.
 */

import {setFormErrors} from "./formErrorsActions";
import {actions} from 'wikom-data'

let timeout = null;
let runningCheck = {};

const handleChange = ({name, url}) => (values, dispatch) => {
    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        if (runningCheck[name]) {
            runningCheck[name].cancel();
        }

        const req = actions.post({url, data: values});
        runningCheck[name] = req
            .then(result => {
                dispatch(setFormErrors(name, result.body));
                delete runningCheck[name];
            });

        runningCheck[name].cancel = () => req.abort();

        return runningCheck[name];
    }, 1000);

    return Promise.resolve('field changed');
};

export default handleChange;