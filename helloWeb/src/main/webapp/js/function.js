// function.js

// 함수선언.
// function myFunc(std, score = 60) {
//   // if (score == undefined) {
//   //   score = 0;
//   // }
//   console.log(`${std} 점수는 ${score}`);
//   return score; // undefined
// }
// 함수표현식.
var myFunc = function myFunc(std, score = 60) {
	// if (score == undefined) {
	//   score = 0;
	// }
	console.log(`${std} 점수는 ${score}`);
	return score; // undefined
}
// let myFunc = myFunc('홍길동');
console.log(myFunc('홍길동'));