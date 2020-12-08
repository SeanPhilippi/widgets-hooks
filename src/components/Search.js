import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      console.log('data', data);
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      if (term) {
        const timer = setTimeout(() => search(), 500);
        return () => clearTimeout(timer);
      }
    }
  }, [term]);

  const renderedResults = results.map((item, i) => {
    return (
      <>
        <div className='item' style={{ display: 'flex', justifyContent: 'space-between' }} key={item.pageid}>
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
      </>
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
