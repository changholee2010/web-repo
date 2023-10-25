// function5.js
let sum1 = 0;
[10, 20, 30].forEach(function(num) {
	sum1 += num; // consumer : 매개값을 소진, 반환값은 없음.
})
sum1 = 0;
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary) {
	return acc + item; // function : 매개값을 소진, 반환값을 생성.
}, 0);

function sum(a = 0, b = 0, ...args) { // parameters.
	console.log(args);
	let result = 0;
	result = a + b;
	args.forEach(function(num) { result += num });
	return result;
	// return a + b + args.reduce((acc, item) => acc + item); 
}

console.log(sum(10, 20, 30, 40, 50, 60)); // arguments.

// reduce 연습.
const numAry = [4, 2, 6, 9, 1, 7];
let max = 0;

max = numAry.reduce((acc, item) => acc > item ? acc : item);
console.log('최대값: ', max);





