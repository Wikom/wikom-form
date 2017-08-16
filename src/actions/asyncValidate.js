import {setFormErrors} from "./formErrorsActions";
import {actions} from 'wikom-data'

let runningCheck = null;

const checkData = ({name, url}) => (values, dispatch) => {
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
};

export default checkData;