import {setFormErrors} from "./formErrorsActions";
import {actions} from 'wikom-data'

const checkData = ({name, url}) => (values, dispatch) => {
    const req = actions.post({url, data: values});
    const promise = req
        .then(result => {
            dispatch(setFormErrors(name, result.body));
        });

    promise.cancel = () => req.abort();

    return promise;
};

export default checkData;