import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import options from './data/options';
import items from './data/items';

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown options={options} label='Select a color' selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;