/**
 * Created by rouven on 19.07.17.
 */

import {setFormErrors} from "./formErrorsActions";
import {actions} from 'wikom-data'

let timeout = null;
let runningCheck = null;

const handleChange = ({name, url}) => (values, dispatch) => {
    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        if (runningCheck) {
            runningCheck.cancel();
        }

        const req = actions.post({url, data: values});
        runningCheck = req
            .then(result => {
                dispatch(setFormErrors(name, result.body));
                runningCheck = null;
            });

        runningCheck.cancel = () => req.abort();

        return runningCheck;
    }, 1000);

    return Promise.resolve('field changed');
};

export default handleChange;