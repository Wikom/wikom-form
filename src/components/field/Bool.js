import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Bool = ({input, withNull, className, ...rest}) => {
    const isTrue = [true, 'true', 1, '1', 'j', 'J'].indexOf(input.value) !== -1;
    const isFalse = withNull === false
        ? isTrue === false
        : [false, 'false', 0, '0', 'n', 'N'].indexOf(input.value) !== -1;
    const inputClassName = {
        indeterminateCheckbox: true,
        'pull-left': true,
        [className]: true,
        checked: isTrue,
        unchecked: isFalse,
        indeterminate: withNull && !isTrue && !isFalse
    };
    const changeValue = evt => input.onChange(isTrue ? '0' : (isFalse && withNull ? '-1' : '1'));

    return (
        <div className="form-group">
            <fieldset>
                <input
                    type="hidden"
                    name={input.name}
                    value={input.value}
                />
                <div
                    onClick={changeValue}
                >
                    <div
                        className={classnames(inputClassName)}
                        style={{margin: '4px 12px 4px 0'}}
                    />
                    <div
                        style={{
                            height: '36px',
                            lineHeight: '36px'
                        }}
                    >
                        {isTrue && 'ja'}
                        {isFalse && 'nein'}
                        {withNull && !isTrue && !isFalse && 'unbestimmt'}
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

Bool.defaultProps = {
    withNull: false
};

Bool.propTypes = {
    withNull: PropTypes.bool,
    className: PropTypes.string
};

export default Bool