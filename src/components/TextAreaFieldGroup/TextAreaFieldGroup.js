import React from 'react'
import PropTypes from 'prop-types';

function TextAreaFieldGroup({
  error,
  placeholder,
  name,
  value,
  info,
  onChange
}) {
  return (
    <div className="form-group">
      <textarea
        className='form-control form-control-lg'
        placeholder={placeholder}
        name={name}
        value={value}
        info={info}
        onChange={onChange}
      />
      {info && (<small className="form-text text-muted">{info}</small>)}
      {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  )
}

TextAreaFieldGroup.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default TextAreaFieldGroup