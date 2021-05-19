import React from 'react';
import Search from './Search.js';
import Sort from './Sort.js';

class ControlForm extends React.Component {
  
  render() {
    // let elmDisplayForm = this.props.isDisplayForm;
    return (
      <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12"> 
        <div className="vv-container-control"> 
          <button type="button" 
                  className="vv-btn vv-btn-control"
                 
          > 
            <i className="fa fa-plus" aria-hidden="true"></i> Add Jobs 
          </button>
          <div className="vv-content-control"> 
            <div className="row"> 
              <div className="column col-xl-7 col-md-7 col-lg-12 col-lg-12">  <Search  /> </div>
              <div className="column col-xl-5 col-md-5 col-lg-12 col-lg-12"> 
                  <Sort /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ControlForm;