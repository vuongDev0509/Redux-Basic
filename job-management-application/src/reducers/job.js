import * as types from './../contants/ActionType';

var myReducers = (state = initialState, action) =>{
	switch(action.types){
		case types.ADD_JOB:
		  console.log(action);
		 return state;
		default :  return state;
	}
}