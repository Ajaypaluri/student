import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(prev => !prev); // Toggle state to trigger re-render
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <UserForm fetchUsers={handleRefresh} />
      <UserList key={refresh} />
    </div>
  );
}

export default App;
