// string1.js

let str1 = "Hello"; // 기본데이터타입.
let str2 = new String("Hello"); // 객체.

console.log(typeof str1, typeof str2);
console.log(str1 == str2); // 값만 비교.
console.log(str1 === str2); // 값&타입 비교.

console.log(str1.toUpperCase());

let result = " 공백 제거 합니다.   ".trim();
console.log(result, ' 문자갯수:', result.length);

// trim(), trimStart(), trimEnd()
// replace(), split(), slice(), substring(), substr()
// toString(), indexOf(), lastIndexOf(), charAt(), includes()
// concat(),
result = "Hello, World, Nice, World".replace(',', '.');
console.log(result);

result = "Hello, World, Nice, World".replace(/\s/g, '');
console.log(result);
// [], {}, /값/

