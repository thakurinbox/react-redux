import React from 'react';
import classnames from 'classnames';

/* eslint-disable react/prop-types */
const InputField = ({
  input,
  type,
  pattern,
  placeholder,
  label,
  autoComplete,
  wrapperClassName,
  meta: { touched, error }
}) => {
  const onChange = (e) => {
    const val = e.target.value;

    if (val && pattern && !pattern.test(val)) {
      return;
    }

    input.onChange(e);
  };

  const showError = touched && error;

  return (
    <div
      className={classnames({
        [wrapperClassName]: wrapperClassName,
        'form-group': !wrapperClassName,
        'has-error': showError
      })}
    >
      {label !== null &&
        input.value && (
          <div className="label" htmlFor={input.name}>
            {label || placeholder}
          </div>
        )}
      <input
        {...input}
        onChange={onChange}
        type={type}
        className="form-control"
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={input.value}
      />
      {showError && <div className="error text-danger">{error}</div>}
    </div>
  );
};
/* eslint-enable */

export default InputField;
