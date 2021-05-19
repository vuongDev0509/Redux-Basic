import React from 'react';
class JobItems extends React.Component {
 
  render() {
    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="text-center">
           <span className="vv-btn vv-btn-active" >
            
          </span>
          
        </td>
        <td className="text-center">
          <button type="button" 
                  className="vv-btn btn-edit"
                  
          >
            <span className="fa fa-pencil mr-5"></span> Edit
          </button>
          <button type="button" 
                  className="vv-btn btn-remove"
                  
          >
            <span className="fa fa-trash mr-5"></span> Remove
          </button>
        </td>
      </tr>
    );
  }
}
export default JobItems;