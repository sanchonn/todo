import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import ItemAddForm from '../item-add-form';
import { withTodoService } from '../hoc-helpers';

import './todo-list.css';

class TodoList extends Component {
  state = {
    todoList: []
  }

  componentDidMount() {
    this.setState(this.props.todoService.getAllTodoList());
  }

  componentDidUpdate()
  {
    console.log('update');
  }

  update = () => {
    this.setState(this.props.todoService.getAllTodoList());
  }

  onAddItem = (task) => {
    this.props.todoService.addTask(task);
    this.update();
  }

  onDelItem = (id) => {
    this.props.todoService.delTask(id);
    this.update();
  }

  render() {
    const todoList = this.props.todoService.getAllTodoList();
    if (todoList.length === 0) {
      return (
        <div>
          <h2>Nothing to do</h2>
          <ItemAddForm
            onAddItem={this.onAddItem}
          />
        </div>
      )
    } else
      return (
        <div>
          {
            this.props.todoService.getAllTodoList().map((item) => {
              return (
                <TodoListItem
                  item={item}
                  key={item.id}
                  onDelItem={this.onDelItem}
                />
              );
            })
          }
          <ItemAddForm
            onAddItem={this.onAddItem}
          />
        </div>
      );
  }
}

export default withTodoService(TodoList);
