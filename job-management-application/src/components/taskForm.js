import React from 'react';
import {connect} from "react-redux";
import * as actions from './../actions/index';

class TaskForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      user: '',
      pass: '',
      status: false
    };
  }

  // funtion get data by form
  onHandleChange = (event) =>{
 
    const target = event.target;
    const name = target.name;
    const value = target.value;
 
    this.setState({
      // hanhle setState multiple
      [name] : value
    });

  }

  onSubmit = (event) =>{
    event.preventDefault();
    this.props.onAddJob(this.state);
    console.log(this.state);
  }
  
  render() {
   
    return (
      <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12"> 
        <div className="vv-container-taskForm"> 
            <h3 className="vv-title main-color">
              
              <i className="fa fa-times" aria-hidden="true"></i>
            </h3>
            <div className="vv-content-task-form"> 
                <form onSubmit={this.onSubmit}>
                  <div className="row"> 
                      <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12"> 
                        <div className="vv-group"> 
                            <label> Name: </label>
                            <input type="text" 
                                   className="form-control main-color" 
                                   placeholder="Please Enter Name" 
                                   name="name"
                                   value={this.state.name}
                                   onChange = {this.onHandleChange}
                            />
                        </div>
                      </div>
                      <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12">
                         <div className="vv-group"> 
                            <label> User: </label>
                            <input type="text" 
                                   className="form-control main-color" 
                                   placeholder="Please Enter User" 
                                   name="user"
                                   value={this.state.user}
                                   onChange = {this.onHandleChange}
                            />
                        </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12"> 
                      <div className="vv-group"> 
                          <label> Password: </label>
                          <input type="text" 
                                 className="form-control main-color" 
                                 placeholder="Please Enter Password"
                                 name="pass"
                                 value={this.state.pass}
                                 onChange = {this.onHandleChange}
                          />
                      </div>
                    </div>
                    <div className="column col-xl-6 col-md-6 col-lg-12 col-lg-12">
                      <div className="vv-group"> 
                        <label> Status: </label>
                        <select className="form-control" 
                                required="required"
                                name="status"
                                value={this.state.status}
                                onChange = {this.onHandleChange}
                        >
                          <option value="true">Active</option>
                          <option value="false" >Deactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                 
                  <div className="vv-group vv-group-submit"> 
                        <button type="submit" className="vv-btn btn-add">Add</button>
                        <button type="button" className="vv-btn btn-remove" >Remove</button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{

  }
};
const mapDispatchToProps = (dispatch, props) =>{
  return{
    onAddJob : (job) =>{
      dispatch(actions.addJob(job));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (TaskForm);