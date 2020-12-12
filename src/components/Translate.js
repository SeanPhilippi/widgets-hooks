import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import languageOptions from '../data/languages';

const Translate = () => {
  const [language, setLanguage] = useState(languageOptions[0]);
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
        options={languageOptions}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
