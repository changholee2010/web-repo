// ajax1.js
// Asynchronous Javascript And XML:
// 비동기 vs. 동기
import { table } from './ajaxModule.js';

let friends = [];
// 동기방식.
friends.push('홍길동');
friends.push('김길동');
friends.push('최길동');

// 비동기방식.
setTimeout(function() {
	friends.push('홍길동');
}, 1000);
setTimeout(function() {
	friends.push('김길동');
}, 500);
setTimeout(function() {
	friends.push('최길동');
}, 2000);

// 보류.
let newMember = //
	{ mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999" }
// newMember 값을 활용해서 tbody="list" 추가.

// 1) ajax 실행.
let xhtp = new XMLHttpRequest();
xhtp.open('get', '../MemberListServ2');
xhtp.send();
xhtp.onload = loadJson;

function loadJson() {
	let result = JSON.parse(xhtp.responseText); // json문자열=>오브젝트.
	let titles = ["회원번호", "비번", "이름", "연락처"];
	let dataAry = [];
	result.forEach(member => {
		dataAry.push({
			mid: member.mid, pass: member.pass,//
			name: member.name, phone: member.phone
		})
	})

	// 페이지 작성.
	result = table.makeTable(titles, dataAry);
	document.getElementById('show').innerHTML = result;
}

function loadXML() {
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record')

	let titles = ["회원번호", "비번", "이름", "연락처"];
	let dataAry = [];
	for (let record of records) {
		let obj = {
			mid: record.children[0].textContent, // mid.
			pass: record.children[1].textContent, // mid.
			name: record.children[2].textContent, // mid.
			phone: record.children[3].textContent // mid.
		}
		dataAry.push(obj);
	}
	let result = table.makeTable(titles, dataAry);
	document.getElementById('show').innerHTML = result;

	// 2) newMember 추가. ajax 실행이 되고 나서 추가하는 기능이 실행.
	let tr = '<tr><td>' + newMember.mid +//
		'</td><td>' + newMember.pass + //
		'</td><td>' + newMember.name + //
		'</td><td>' + newMember.phone + '</td></tr>';
	document.getElementById('list').innerHTML += tr;
} // end of onload.
