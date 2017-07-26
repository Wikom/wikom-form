/**
 * Created by Marvn on 27.03.17.
 */

import React from 'react'
import TinyMCE from 'react-tinymce'

const TinyMCEComponent = ({input: {name, value, ...input}, meta, disabled, inline, ...props}) => {

    if (disabled === true) {
        return (
            <div
                dangerouslySetInnerHTML={{__html: value}}
                className="input-lookalike"
            />
        );
    }

    return (
        <TinyMCE
            {...props}
            name={name}
            content={value}
            onBlur={(e) => input.onBlur(e.target.getContent())}
            config={{
                inline: inline,
                menubar: false,
                toolbar: 'bold italic underline | alignleft aligncenter alignright ',
                height: 150,
                statusbar: true,
            }}
        />
    );
};

TinyMCEComponent.defaultProps = {
    disabled: false,
    inline: false
};

export default TinyMCEComponent