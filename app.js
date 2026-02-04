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
const sayHello = function() {
  console.log("Hello")
}
sayHello();

function sayWorld(callback){
  callback();
}
sayWorld(function() {
  console.log("World");
})
