// function4.js

// 생성자 함수..Member => member.js에 정의해둠.
// makeTr 함수. => member.js에 정의해둠.

document.getElementById('saveBtn').onclick = function(e) {

	let name = document.getElementById('name').value;
	let age = document.getElementById('age').value;
	let height = document.getElementById('height').value;

	const mem = new Member(name, age, height);
	let str = makeTr(mem); // <tr>.....</tr>

	document.getElementById('list').innerHTML += str;
	
	// 입력초기화.
	document.getElementById('name').value = "";
	document.getElementById('age').value = "";
	document.getElementById('height').value = "";
	document.getElementById('name').focus();
}