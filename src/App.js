import React, { useState, useEffect } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end JavaScript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.',
  },
];

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

  }, []);

  const renderedUsers = users.map(user => {
    return <li key={user.id}>{user.name}</li>
  });

  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
