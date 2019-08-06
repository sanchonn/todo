import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    task: ''
  }
  onChange = (e) => {
    this.setState({
      task: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.task.length > 0) {
      this.props.onAddItem(this.state.task);
      this.setState({ task: '' });
    }
  }

  render() {
    return (
      <div className="item-add-form">
        <form className="input-group mb-3"
          onSubmit={this.onSubmit}
        >
          <input type="text" className="form-control" placeholder="New task" aria-label="Username" aria-describedby="basic-addon1" value={this.state.task}
            onChange={this.onChange}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <button className="fa fa-plus"></button>
            </span>
          </div>
        </form>
      </div>
    );
  }
};

