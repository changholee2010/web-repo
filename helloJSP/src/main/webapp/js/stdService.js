/**
 * service.js
 */
export default {
	async getStudent(sid, successCallback, errCallback) {
		let req = await fetch("../getStudent.do?sid=" + sid)
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
	},
	async listStudent(successCallback, errCallback) {
		let req = await fetch('../studentList.do')
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
	},
	async addStudent(param, successCallback, errCallback) {
		let req = await fetch('../addStudent.do', param)
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
	},
	async editStudent(param, successCallback, errCallback) {
		let req = await fetch('../editStudent.do', param)
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
	},
	async delStudent(sid, successCallback, errCallback) {
		let req = await fetch('../delStudent.do?sid', sid)
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errCallback(err);
		}
	}
}