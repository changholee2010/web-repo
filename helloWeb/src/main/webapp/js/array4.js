// array4.js
const json = `
[{"id":1,"first_name":"Sheffy","email":"sshort0@taobao.com"},
{"id":2,"first_name":"Susanetta","email":"shamlet1@newsvine.com"},
{"id":8,"first_name":"Shaw","email":"sedgar7@cnbc.com"},
{"id":9,"first_name":"Margo","email":"mcaine8@usa.gov"},
{"id":10,"first_name":"Beatrisa","email":"bheckner9@etsy.com"}]
`; // json -> object. JSON.parse() 사용.
let members = JSON.parse(json);

// 1) find.
let result = members.find(function(item, idx, ary) {
	if (item.id > 5) {
		return true;
	}
	return false;
	//return item.id > 5;
})

// 2) filter.
result = members.filter(function(item, idx, ary) {
	return item.id > 5;
})

result = members.filter((item, idx) => {
	return idx >= 1 && idx < 3; // true 값을 반환.
})

// 3) reduce.
result = members.reduce((acc, item, idx) => {
	if (idx >= 1 && idx < 3) {
		acc.push(item);
	}
	return acc;
}, [])

// 4) some, every => true / false.
result = members.every((member) => {
	console.log(member);
	return member.first_name.length > 5;
})

// *) map : A -> B
result = members.map(member => {
	let obj = { id: member.id, name: member.first_name, email: member.email, grade: 'C' }
	return obj;
})

console.log(result);
