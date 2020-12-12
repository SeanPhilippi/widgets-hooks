import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', e => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
        return;
      }
      setOpenDropdown(false);
    })
  }, [])
  const renderedOptions = options.map(option => {
    if (option === selected) {
      return null;
    }

    return (
      <div
        key={option.value}
        className='item'
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  });

  return (
    <div ref={dropdownRef} className='ui form'>
      <div className='field'>
        <label className='label'>Select a Color</label>
        <div onClick={() => setOpenDropdown(!openDropdown)} className={`ui selection dropdown ${openDropdown && 'visible active'}`}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${openDropdown && 'visible transition'}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dropdown;