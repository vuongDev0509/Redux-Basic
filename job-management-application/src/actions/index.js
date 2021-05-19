import * as types from './../contants/ActionType';

export const addJob = (job) =>{
	return {
		type : types.ADD_JOB,
		job // job : job
	}
}