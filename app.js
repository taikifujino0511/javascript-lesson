// Q1
let nickname = "ごっしー";
let age = 28;
console.log("私の名前は" + nickname + "です。年齢は" + age + "歳です。");

// Q2
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
console.log("私の好きな言語は" + languages[0] + "です。次は" + languages[3] + "を勉強してみたいです。");

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
let totalAge = 0;
for (let i = 0; i < playerList.length; i++) {
  totalAge += playerList[i].age;
}
let averageAge = totalAge / playerList.length;
console.log(averageAge);

// Q6
function sayHello() {
  console.log("Hello")
}
sayHello();

const sayWorld = function() {
  console.log("World");
}
sayWorld();

// Q7
user.birthday = '2000-09-27';
//console.log(user.birthday);
user.sayHello = function() {
  console.log("Hello!");
}
user.sayHello();

// Q8
let calc = {};
calc.add = function(x, y) {
  return x + y;
}
calc.subtract = function(x, y) {
  return x - y;
}
calc.multiply = function(x, y) {
  return x * y;
}
calc.divide = function(x, y) {
  return x / y;
}
console.log(calc.add(4, 3));
console.log(calc.subtract(15, 5));
console.log(calc.multiply(7, 7));
console.log(calc.divide(45, 9))

// Q9
function reminder(x, y) {
  return x % y;
}
let x = 5;
let y = 3;
console.log(x + " を " + y + " で割った余りは " + reminder(x, y) + " です。");

// Q10
/*
function foo() {
  let x = 1;
}
console.log(x);
*/
// A: 関数fooの中でletで定義された変数xは関数のスコープの中でのみ使用可能なので、スコープ外である関数の外で使用すると参照できずエラーとなります。
