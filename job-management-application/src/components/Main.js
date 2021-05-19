import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import TaskForm from './taskForm.js';
import ControlForm from './ControlForm.js';
import JobLists from './JobLists.js';
class Main extends React.Component {

  render() {
    return (
      <div className="vv-container-main-job-managements"> 
          <div className="container"> 
            <div className="vv-content-main-job-managements">                
                <div className="row"> 
                   <TaskForm /> 
                   <ControlForm />
                </div>
            </div>
            <div className="vv-container-list-job-managements"> 
              <div className="vv-grid-list-jobs-management"> 
                <JobLists /> 
              </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Main;