import React from 'react';
import JobItems from './JobItems.js';
class JobLists extends React.Component {
  

  
  render() {
   
    
    // let elmJob = itemJobs.map((job, index) =>{
    //     if(job == undefined) return  false;

    //     console.log(this.props.status); 
    //     // check status  job for filter
    //     if(this.props.status != -1 && job.status != this.props.status) return;
    //     let result =  <JobItems key={index}
    //                             id={job.id}
    //                             stt={index} 
    //                             name={job.name} 
    //                             user={job.user}
    //                             pass={job.pass}
    //                             status={job.status}
    //                             jobs={itemJobs} 
    //                             onChangeStatus={this.props.onChangeStatus}
    //                             onDeleteJob = {this.props.onDeleteJob}
    //                             onEditJob ={this.props.onEditJob}
    //                   />;
    //     return result;
    // });
    return (
      <div className="vv-content-list-jobs"> 
        <div className="row"> 
          <div className="column col-xl-12 col-md-12 col-lg-12 col-lg-12"> 
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">User</th>
                  <th className="text-center">Pass</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input type="text" 
                           className="vv-input-search-table form-control" 
                           name="filterName"
                           
                    /> 
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <select className="vv-select-status form-control"
                            name="filterStatus"
                           
                    >
                      <option value={-1}>ALL</option>
                      <option value={1}>Active</option>
                      <option value={0}>Deactive</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                  {/*{elmJob}*/}
                </tbody>
            </table>
          </div>
        </div>
       </div>
    );
  }
}
export default JobLists;