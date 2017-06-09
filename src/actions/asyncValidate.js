import {setFormErrors} from "./formErrorsActions";
import {actions} from 'wikom-data'
import {stopAsyncValidation} from 'redux-form'

let runningCheck = null;

const checkData = ({name, url}) => (values, dispatch) => {
    if (runningCheck) {
        runningCheck.cancel();
    }

    const req = actions.post({url, data: values});
    runningCheck = req
        .then(result => {
            dispatch(stopAsyncValidation(name, result.body));
            dispatch(setFormErrors(name, result.body));
            runningCheck = null;
        });

    runningCheck.cancel = () => req.abort();

    return runningCheck;
};

export default checkData;