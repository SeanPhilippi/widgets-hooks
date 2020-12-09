import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    if (debouncedTerm.length) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((item, i) => {
    return (
      <div key={`${item.pageid}-${i}`}>
        <div className='item' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='content'>
            <div className='header'>{item.title}</div>
            <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
          </div>
          <div className='right floated content'>
            <a href={`https://en.wikipedia.org?curid=${item.pageid}`} className='ui button'>
              Go
            </a>
          </div>
        </div>
        <div className='ui inverted divider'></div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Search Term</label>
          <input value={term} onChange={e => setTerm(e.target.value)} className='input' />
        </div>
        <div>{renderedResults}</div>
      </div>
    </div>
  );
};

export default Search;
