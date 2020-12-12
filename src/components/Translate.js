import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikaans',
    value: 'ar',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className='ui form'>
        <label>Enter Text</label>
        <input className='field' value={text} onChange={e => setText(e.target.value)} />
      </div>
      <Dropdown
        label='Select a Langauge'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
