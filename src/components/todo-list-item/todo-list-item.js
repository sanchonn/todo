import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    id: null,
    task: '',
    important: false,
    done: false
  };

  componentDidMount() {
    this.setState(this.props.item);
  };

  onChange = (e) => {
    this.setState({
      task: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  onToggleImportant = () => {
    this.setState(() => {
      return {
        important: !this.state.important
      };
    });
  };

  onToggleDone = () => {
    this.setState(() => {
      return {
        done: !this.state.done
      };
    });
  };

  onDeleteItem = () => {
    this.props.onDelItem(this.state.id);
  };

  render() {
    const { task, important, done } = this.state;
    const inputClass = done ? 'form-control done' : 'form-control';
    return (
      <form className="todo-list-item"
        onSubmit={this.onSubmit}
      >
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className={important ? 'fa fa-star' : 'fa fa-star-o'}
                onClick={this.onToggleImportant}
              ></i>
            </span>
          </div>
          <input type="text" className={inputClass} aria-label="Amount (to the nearest dollar)" value={task}
            onChange={this.onChange}
            onDoubleClick={this.onToggleDone}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-trash-o"
                onClick = {this.onDeleteItem}
              ></i>
            </span>
          </div>
        </div>
      </form>
    );
  }
};
