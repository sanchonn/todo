import React, { Component } from 'react';
import {withTodoService} from '../hoc-helpers';

import './search-panel.css';

class SearchPanel extends Component {
  state = {
    filter: ''
  }
  onChange = (e) => {
    this.setState({
      filter: e.target.value
    });
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div className="search-panel">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <div className="input-group flex-nowrap">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="addon-wrapping"><i className="fa fa-search"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Search item" aria-label="Username" aria-describedby="addon-wrapping" value = {this.state.filter} 
                  onChange = {this.onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default withTodoService(SearchPanel);