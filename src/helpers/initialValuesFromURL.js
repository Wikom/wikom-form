/**
 * Created by Marvin on 28.03.17.
 */

import queryString from 'query-string'

const initialValuesFromURL = arrayKey => {
    try {
        const result = queryString.parse(decodeURI(location.search.substr(1)));
        const formResult = JSON.parse(result.form);

        return formResult[arrayKey];
    } catch (e) {
        return {};
    }
};

export default initialValuesFromURL;