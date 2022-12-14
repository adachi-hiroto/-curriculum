// 配列(Array)
// var fruits = ["リンゴ", "バナナ", "イチゴ"];
// console.log(fruits);
// console.log(fruits[0]);

// オブジェクト(Object)
// var teacher = {
//     name: "太郎",
//     age: 25,
//     subject: "国語",
// }
// console.log(teacher);
// console.log(teacher.name);

// var teachers = [
//     {
//     name: "太郎",
//     age: 25,
//     subject: "国語",
//     },
//     {
//     name: "浩司",
//     age: 30,
//     subject: "数学",
//     },
//     {
//     name: "花子",
//     age: 26,
//     subject: "社会",
//     }
// ]

// []が配列
// {}がオブジェクト

// 1.
var fruits = ["いぬ","さる", "きじ"];
console.log(fruits[0],fruits[2]);

// 2.
// key   : プロパティ名
// value : 値

// 3.
var member = {
    name: "いぬ",
    age: 20,
    relationship: "first member",
}
console.log(member)

// 4.
var member = [
    {
    name: "いぬ",
    age: 20,
    relationship: "first member",
    },
    {
    name: "さる",
    age: 25,
    relationship: "second member",
    },
    {
    name: "きじ",
    age: 30,
    relationship: "third member",
    }
]
console.log(member[0].name,member[2].relationship);