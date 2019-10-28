import {setFormErrors} from "./formErrorsActions";
import {actions} from '@wikom/wikom-data'

let runningCheck = {};

const checkData = ({name, url}) => (values, dispatch) => {
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
};

export default checkData;