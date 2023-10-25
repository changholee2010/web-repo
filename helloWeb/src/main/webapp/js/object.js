// object.js
console.log('object start....')

let obj1 = {
	name: 'Hong',
	age: 20
}

// 주소 참조.
let obj2 = obj1;
console.log(obj1);
obj2.age = 22;
console.log(obj1);

// 복사.
let obj3 = { ...obj1 }
obj3.age = 24;
console.log(obj3);

// 클래스.
class Member {
	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight) {
		this.weight = weight;
	}
	getWeight() {
		return this.weight;
	}
	showInfo() {
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	}
	// 학생의 정보:학생번호, 이름, 영어, 수학.
	makeTr(student = { sno, sname, engScore, mathScore }) {
		// tr>td*4
		let tr = '';
		tr += '<tr>';
		tr += '<td>' + student.sno + '</td>';
		tr += '<td>' + student.sname + '</td>';
		tr += '<td>' + student['engScore'] + '</td>';
		tr += '<td>' + student.mathScore + '</td>';
		tr += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		tr += '</tr>';
		return tr;
	}
	makeHtml(studAry = []) {
		// html생성. => this.makeTr(std);
		let table = '<table border="1"><tbody>';
		// let obj = this;
		table += studAry.reduce((acc, stud) => {
			return acc + this.makeTr(stud)
		}, '');
		table += '</tbody></table>';
		this.html = table;
	}
	showPage(dom) {
		// innerHTML 속성에 html 저장.
		dom.innerHTML = this.html;
	}
}

const mem1 = new Member('홍길동', 20, 156.7);
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log('홍길동의 몸무게는 ', mem1.getWeight(), 'kg입니다.');
