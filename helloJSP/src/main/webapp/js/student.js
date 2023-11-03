/**
 * js/student.js 
 */
import svc from './service.js';

// 페이지 로딩되면서 바로 실행.
// 비동기방식코드 -> 순차적 가독성 높이기. async, await.
// async 함수(
//	await 처리. (promise객체.)
//	await 처리. (promise객체.)
//	await 처리. (promise객체.)
//)

// 학생목록출력.
svc.studentList(
	// 성공후 실행함수.
	result => {
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
	}
	// 실패후 실행함수
	, err => console.log('error=>', err) //
);

// 등록버튼 이벤트.
document.querySelector('#addBtn').addEventListener('click', addCallback);

// 수정버튼 이벤트. 서블릿(db변경) -> 화면변경.
document.querySelector('#modBtn').addEventListener('click', modifyCallback);

// callback함수.
function addCallback(e) {
	// 학생아이디 입력값.
	let sid = document.querySelector('input[name=sid]').value;
	let sname = document.querySelector('#sname').value;
	let pass = document.querySelector('input[name=pass]').value;
	let dept = document.querySelector('select[name=sdept]').value;
	let birth = document.querySelector('input[name=birth]').value;

	let param = `id=${sid}&name=${sname}&password=${pass}&dept=${dept}&birthday=${birth}`;
	console.log(param);

	// ajax 호출.
	// get: url패턴. 값의제한.
	// post: 파라미터 표현X, 값의제한X, content-type지정.
	//fetch('../addStudent.do?' + param) => get방식.
	svc.addStudent(
		// 1) optObj=>
		{
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: param
		},
		// 2) successCallback=>
		result => {
			if (result.retCode == 'OK') {
				alert('성공');
				let tr = makeTr({
					studentId: sid,
					studentName: sname,
					studentBirthday: birth
				})
				document.querySelector('#list').append(tr);
			} else {
				alert('실패');
			}
		},
		// 3) errorCallback=>
		err => console.log('error=> ', err)
	);

} // end of addCallback.

function modifyCallback(e) {
	let id = document.querySelector('.modal-body input[name=sid]').value;
	let pass = document.querySelector('.modal-body input[name=pass]').value;
	let name = document.querySelector('.modal-body input[name=name]').value;
	let birth = document.querySelector('.modal-body input[name=birth]').value;

	let param = `id=${id}&name=${name}&password=${pass}&birthday=${birth}`;

	svc.editStudent(
		// 1) optObj
		{
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: param
		},
		// 2) successCall
		result => {
			console.log(result);
			if (result.retCode == 'OK') {
				alert('성공');
				let targetTr = //
					document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
				let newTr = makeTr(result.vo);
				let parentElem = document.querySelector('#list');
				parentElem.replaceChild(newTr, targetTr);
				document.getElementById("myModal").style.display = 'none';
			} else {
				alert('실패');
			}
		},
		// 3) errorCall
		err => console.log('error=> ', err)
	);
} // end of modifyCallback.

// tr생성함수.
function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday']
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid', obj.studentId);
	tr.addEventListener('dblclick', showModal);

	for (let prop of showFields) {
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	}
	// 삭제버튼.
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-sid', obj.studentId);
	btn.innerHTML = '삭제';
	btn.addEventListener('click', function(e) {
		// ajax호출. -> 서블릿실행.
		svc.removeStudent(//
			obj.studentId,
			result => {
				if (result.retCode == 'OK') {
					alert('삭제성공');
					tr.remove();
				} else {
					alert('삭제실패');
				}
			},
			err => console.log('error: ', err)
		)
	})
	td.append(btn);
	tr.append(td);

	return tr;
} // end of makeTr.

// 모달 보여주기.
function showModal(e) {
	console.log(e.target.parentElement, this);
	let id = this.children[0].innerHTML;
	id = this.dataset.sid; // 'data-sid': std1

	var modal = document.getElementById("myModal");
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

	svc.getStudent(// id, successCallback, errorCallback
		id,
		result => {
			// Get the modal
			modal.style.display = "block";

			modal.querySelector('h2').innerHTML = result.studentName;
			modal.querySelector('input[name=pass]').value = result.studentPassword;
			modal.querySelector('input[name=name]').value = result.studentName;
			modal.querySelector('input[name=birth]').value = result.studentBirthday;
			modal.querySelector('input[name=sid]').value = result.studentId;
		},
		err => console.log('error=> ', err)
	)

}