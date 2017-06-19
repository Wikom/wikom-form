/**
 * Created by Marvin on 20.03.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {asyncValidate} from '../actions'
import {initialValuesFromURL} from '../helpers'

class Form extends React.Component {

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

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    errors: PropTypes.object,
    formErrors: PropTypes.object
};

const FormWrapper = reduxForm()(Form);

FormWrapper.propTypes = {
    name: PropTypes.string.isRequired,
    checkUrl: PropTypes.string
};

const mapStateToProps = (state, {name, checkUrl, initialValues}) => ({
    form: name,
    asyncValidate: checkUrl ? asyncValidate({name, url: checkUrl}) : false,
    initialValues: Object.assign({}, initialValuesFromURL(name), initialValues),
    onChange: checkUrl ? asyncValidate({name, url: checkUrl}) : false
});


export default connect(mapStateToProps)(FormWrapper);
