import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import TodoService from '../../services/todo-service';
import { TodoServiceProvider } from '../todo-service-context';

import './app.css';


export default class App extends React.Component {
  state = {
    filter:''
  }

  todoService = new TodoService();

  onSearch = (filter) => {
    this.todoService.setFilter(filter);
    this.setState({
      filter
    });
  }

  render() {
    return (
      <TodoServiceProvider value={this.todoService} >
        <div className="app">
          <AppHeader />
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter />
          <TodoList />
        </div>
      </TodoServiceProvider>
    );
  }
}
