import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = () => {
  return (
    <div className="item-status-filter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-light active">All</button>
              <button type="button" className="btn btn-light">Active</button>
              <button type="button" className="btn btn-light">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ItemStatusFilter;