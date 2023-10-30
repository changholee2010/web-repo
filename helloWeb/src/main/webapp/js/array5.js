// array5.js
console.log('펭수' < '라이언');
const arr1 = ['펭수', '라이언', '어피치', '콘', '무지']
arr1.sort(function(a, b) {
	if (a < b) {
		return -1;
	} else {
		return 1;
	}
});
console.log(arr1); // 배열자체를 변경.

const arr2 = [4, 8, 1, 12, 23, 9]
arr2.sort(function(a, b) {
	if (a < b) {
		return 1;
	} else {
		return -1;
	}
});
console.log(arr2); // 배열자체를 변경.

const json = `
[{"id":1,"first_name":"Sheffy","email":"sshort0@taobao.com"},
{"id":2,"first_name":"Susanetta","email":"shamlet1@newsvine.com"},
{"id":8,"first_name":"Shaw","email":"sedgar7@cnbc.com"},
{"id":9,"first_name":"Margo","email":"mcaine8@usa.gov"},
{"id":10,"first_name":"Beatrisa","email":"bheckner9@etsy.com"}]
`; // json -> object. JSON.parse() 사용.
let members = JSON.parse(json);
members.sort(function(a, b) {
	if (a.first_name < b.first_name)
		return -1
	else
		return 1
}).reverse();

console.log(members);
