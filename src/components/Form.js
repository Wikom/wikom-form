/**
 * Created by Marvin on 20.03.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {asyncValidate, handleChange} from '../actions'
import {initialValuesFromURL} from '../helpers'
import findInObject from '@wikom/find-in-object'
import {reset} from 'redux-form'
import {goBack} from 'react-router-redux'
import FormErrors from './FormErrors'
import {formErrorsActions} from '../actions'

class Form extends React.Component {
    componentDidMount() {
        typeof this.props.asyncValidate === 'function' ? setTimeout(this.props.asyncValidate, 0) : null;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.form !== nextProps.form && typeof nextProps.asyncValidate === 'function') {
            setTimeout(nextProps.asyncValidate, 0);
        }
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                {
                    React.cloneElement(this.props.children, {...this.props})
                }
            </form>
        );
    }

}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    errors: PropTypes.object,
    formErrors: PropTypes.object
};

const FormWrapper = reduxForm({
    shouldAsyncValidate: ({trigger}) => trigger === 'submit'
})(Form);

const mapState = (state, {name, checkUrl, initialValues}) => {
    const {FieldError, hasErrors, isValidated} = FormErrors(findInObject('formErrors.' + name + '.data', state));
    const submitting = (isValidated() && ((findInObject('form.' + name + '.asyncValidating', state) === true))) ||
        findInObject('form.' + name + '.submitting', state);

    return {
        form: name,
        FieldError,
        hasErrors,
        isValidated,
        submitting,
        formValues: findInObject('form.' + name + '.values', state),
        initialValues: Object.assign({}, initialValuesFromURL(name), initialValues),
        asyncValidate: checkUrl ? asyncValidate({name, url: checkUrl}) : false,
        onChange: checkUrl ? handleChange({name, url: checkUrl}) : false
    }
};

const mapDispatch = (dispatch, {name, submitHandler, successHandler}) => ({
    reset: () => dispatch(reset(name)),
    onSubmit: data => dispatch(submitHandler(data))
        .then(result => dispatch(successHandler(result)))
        .catch(err => dispatch(formErrorsActions.setFormErrorsFromSubmit(name, err.response.body)))
});

const ConnectedFormWrapper = connect(mapState, mapDispatch)(FormWrapper);

ConnectedFormWrapper.defaultProps = {
    successHandler: goBack
};

ConnectedFormWrapper.propTypes = {
    name: PropTypes.string.isRequired,
    checkUrl: PropTypes.string,
    submitHandler: PropTypes.func.isRequired,
    successHandler: PropTypes.func
};

export default ConnectedFormWrapper
