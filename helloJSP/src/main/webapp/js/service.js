/**
 * service.js
 */
export default {
	getStudent(sid, successCallback, errCallback) {
		fetch("../getStudent.do?sid=" + sid)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errCallback)
	},
	async listStudent(successCallback, errCallback) {
		let promise = await fetch('../studentList.do')
		let json = await promise.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
	},
	addStudent(param, successCallback, errCallback) {
		fetch('../addStudent.do', param)//
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errCallback);
	},
	editStudent(param, successCallback, errCallback) {
		fetch('../editStudent.do', param)//
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errCallback);
	},
	delStudent(sid, successCallback, errCallback) {
		fetch('../delStudent.do?sid=' + sid)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errCallback);
	}
}