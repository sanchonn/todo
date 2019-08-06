import React from 'react';

import './app-header.css';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 offset-md-2 col-sm-12 logo">
            <i className="fa fa-star"></i><h1 className="title">Todo App</h1>
          </div>
        </div>
      </div>
    </header>
  );
};


export default AppHeader;