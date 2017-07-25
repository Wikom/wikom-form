/**
 * Created by Marvn on 27.03.17.
 */

import React from 'react'
import TinyMCE from 'react-tinymce'
import './TinyMCEComponent.css'

const TinyMCEComponent = ({input: {name, value, ...input}, disabled, ...props}) => {

    if (disabled === true) {
        return (
            <div
                dangerouslySetInnerHTML={{__html: value}}
                className="input-lookalike"
            />
        );
    }

    return (<div className="wikom-form__tinymcewrapper">
            <TinyMCE
                {...props}
                name={name}
                content={value}
                onBlur={(e) => input.onBlur(e.target.getContent())}
                config={{
                    inline: true,
                    menubar: false,
                    toolbar: 'bold italic underline | alignleft aligncenter alignright ',
                    height: 150,
                    statusbar: true,
                }}
            />
        </div>
    );
};

TinyMCEComponent.defaultProps = {
    disabled: false
};

export default TinyMCEComponent;