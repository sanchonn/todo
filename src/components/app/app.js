import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

function App() {
  return (
    <div className="app">
      <AppHeader className="app-header" />
    </div>
  );
}

export default App;
