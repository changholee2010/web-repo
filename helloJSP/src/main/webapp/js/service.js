/**
 * service.js
 */
export default {
	async getStudent(sid, successCallback, errCallback) {
		let promise = await fetch("../getStudent.do?sid=" + sid)
		let json = await promise.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
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
	async addStudent(param, successCallback, errCallback) {
		let promise = await fetch('../addStudent.do', param)
		let json = await promise.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
	},
	async editStudent(param, successCallback, errCallback) {
		let promise = await fetch('../editStudent.do', param)
		let json = await promise.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
	},
	async delStudent(sid, successCallback, errCallback) {
		let promise = await fetch('../delStudent.do', param)
		let json = await promise.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
	}
}