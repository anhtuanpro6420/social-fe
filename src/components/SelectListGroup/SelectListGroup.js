import React from 'react'
import PropTypes from 'prop-types';

function SelectListGroup({
  error,
  name,
  value,
  onChange,
  info,
  options
}) {
  const selectOptions = options.map(item => (
    <option key={item.label} value={item.value}>
      {item.label}
    </option>
  ))
  return (
    <div className="form-group">
      <select
        className='form-control form-control-lg' 
        name={name}
        value={value}
        onChange={onChange}
        info={info}
        options={options}
      >
        {selectOptions}
      </select>
      {info && (<small className="form-text text-muted">{info}</small>)}
      {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  )
}

SelectListGroup.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  info: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

export default SelectListGroup