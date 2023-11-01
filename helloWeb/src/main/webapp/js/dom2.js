// dom2.js

// #show>table>tbody>(tr>td:사과+td:1000)+(tr>td:복숭아+td:1500)
//                   +(tr>td:포도+td:2000)+(tr>td:수박+td:3000)
const fruits = [
	{ name: "사과", price: 1000, farmer: '홍길동' },
	{ name: "복숭아", price: 1500, farmer: '김민서' },
	{ name: "포도", price: 2000, farmer: '최말숙' },
	{ name: "수박", price: 3000, farmer: '김선중' }
]
const tbl = document.createElement('table');
const tbd = document.createElement('tbody');
tbl.setAttribute('border', '1'); // <table border='1'>

fruits.forEach(fruit => { // console.log(fruit)
	const tr = document.createElement('tr');
	for (let prop in fruit) {
		const td1 = document.createElement('td');
		td1.innerHTML = fruit[prop];
		tr.appendChild(td1);
	}
	tbd.appendChild(tr); // tbody에 tr을 하위요소로 등록.
})
tbl.appendChild(tbd); // table에 tbody를 하위요소로 등록.
document.querySelector('#show').appendChild(tbl);







