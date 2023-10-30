// array2.js : MOCK_DATA.json 파일의 데이터 활용.
const json = `
[{"id":1,"first_name":"Sheffy","email":"sshort0@taobao.com"},
{"id":2,"first_name":"Susanetta","email":"shamlet1@newsvine.com"},
{"id":3,"first_name":"Ignatius","email":"ibuxcey2@ehow.com"},
{"id":4,"first_name":"Martelle","email":"mjeacop3@samsung.com"},
{"id":5,"first_name":"Lizette","email":"lgeorgius4@opensource.org"},
{"id":6,"first_name":"Hayley","email":"hkeenor5@furl.net"},
{"id":7,"first_name":"Gabbey","email":"gbyart6@army.mil"},
{"id":8,"first_name":"Shaw","email":"sedgar7@cnbc.com"},
{"id":9,"first_name":"Margo","email":"mcaine8@usa.gov"},
{"id":10,"first_name":"Beatrisa","email":"bheckner9@etsy.com"}]
`; // json -> object. JSON.parse() 사용.
let members = JSON.parse(json);
console.log(members);

let delMember = "Sheffy";
let yourinfo = { name: "Hong", email: "hong@email.com" }
// splice 활용.
// 삭제(splice)
members.forEach((member, idx) => {
	if (member.first_name == delMember) {
		members.splice(idx, 1, { id: member.id, first_name: yourinfo.name, email: yourinfo.email });
	}
})
let inpVal = prompt("이름과 이메일 입력하세요 예) 홍길동, hong@email.com");
console.log(inpVal); // 홍길동, hong@email.com

const infoAry = inpVal.split(',');
let nid = members[members.length - 1].id + 1;
let newMember = //
	{ id: nid, first_name: infoAry[0], email: infoAry[1].trim() }

// 배열에 추가.
members.push(newMember);
// members.splice(members.length, 0, newMember);
console.log(members);

const dupAry = [["라이언", 5], ["어피치", 3], ["콘", 2], ["무지", 4]]
console.log(dupAry)
console.table(dupAry)

