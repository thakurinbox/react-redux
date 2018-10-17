import React from 'react';

const SelectField = ({ input, label, type, meta: { touched, error }, children, placeholder }) => (
  <div className="form-group">
    {input.value && (
      <div className="label" htmlFor={input.name}>
        {label || placeholder}
      </div>
    )}

    <select className="form-control" {...input}>
      {children}
    </select>
    {touched && (error && <div className="error text-danger">{error}</div>)}
  </div>
);

export default SelectField;
