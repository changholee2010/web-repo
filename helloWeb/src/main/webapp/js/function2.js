// function2.js
console.log('function2.js')
// Member member = new Member()
const member = {
  name: "홍길동",
  age: 18,
  height: 178.9,
  showInfo: function () {
    return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`)
  }
}
const member1 = {
  name: "김길동",
  age: 19,
  height: 179.9,
  showInfo: function () {
    return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`)
  }
}
const member2 = {
  name: "박길동",
  age: 20,
  height: 180.9,
  showInfo: function () {
    return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`)
  }
}
const members = [member, member1, member2]

// DOM: Document Object Model
let show = document.getElementById('show'); // table>(thead>tr>th*2)+(tbody>tr>td*2)
let str = "";
// 코드 작성....
str += '<table border="1">';
str += '<tbody>';
members.forEach(function (item) {
  str += makeTr(item);
})
str += '</tbody>';
str += '</table>';
console.log(str);
show.innerHTML = str; // table>tbody>(tr>td*4)*3

function makeTr(member = {name, age, height, showInfo}) {
  let html = '';
  html += '<tr>';
  html += '<td>' + member.name + '</td>';
  html += '<td>' + member.age + '</td>';
  html += '<td>' + member.height + '</td>';
  html += '<td>' + member.showInfo() + '</td>';
  html += '</tr>';
  return html;
}

// console.log(makeTr(member));