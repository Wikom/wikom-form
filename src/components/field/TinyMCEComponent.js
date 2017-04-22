/**
 * Created by Marvn on 27.03.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import TinyMCE from 'react-tinymce'

export default (props) => {
    if(props.disabled){
        return  <div
                dangerouslySetInnerHTML={{__html: props.input.value}}
                className="input-lookalike"
            />;
    }

    return (
        <TinyMCE
            {...props}
            content={props.input.value}
            onBlur={(e) => props.input.onBlur(e.target.getContent())}
            config={{
                menubar: false,
                toolbar: 'bold italic underline | alignleft aligncenter alignright ',
                height: 150,
                statusbar: true,
            }}/>)
};