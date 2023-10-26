// string3.js

let today = new Date(); // Date 내장객체.
today.getFullYear(); // 2023
today.getMonth(); // 9
today.getDate(); // 26

// 날짜 변경.
today.setFullYear(2022);
today.setMonth(9);
today.setDate(1);
today.setHours(9);
today.setMinutes(9);
today.setSeconds(9);


console.log(today.toString()); // 17:34 - 9 => 08:34

function dateFormat(today) {
	// yyyy-MM-dd hh24:mm:ss
	return today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) //
		+ "-" + ("0" + today.getDate()).slice(-2) + " " + today.getHours()//
		+ ":" + today.getMinutes() + ":" + today.getSeconds();
}
console.log(dateFormat(today));

