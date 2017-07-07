/**
 * Created by Marvin on 07.07.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {asyncValidate} from '../actions'
import {initialValuesFromURL} from '../helpers'
import findInObject from 'find-in-object'
import {goBack} from 'react-router-redux'

class SimpleForm extends React.Component {
    componentDidMount() {
        typeof this.props.asyncValidate === 'function' ? this.props.asyncValidate() : null;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.form !== nextProps.form && typeof nextProps.asyncValidate === 'function') {
            nextProps.asyncValidate();
        }
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                {this.props.children}
            </form>
        );
    }
}

SimpleForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    errors: PropTypes.object,
    formErrors: PropTypes.object
};

const FormWrapper = reduxForm()(SimpleForm);

FormWrapper.propTypes = {
    name: PropTypes.string.isRequired,
    checkUrl: PropTypes.string
};

const mapState = (state, {name, checkUrl, initialValues}) => {
    return {
        form: name,
        formValues: findInObject('form.' + name + '.values', state),
        initialValues: Object.assign({}, initialValuesFromURL(name), initialValues),
        asyncValidate: checkUrl ? asyncValidate({name, url: checkUrl}) : false,
        onChange: checkUrl ? asyncValidate({name, url: checkUrl}) : false
    }
};
export default connect(mapState)(FormWrapper);
