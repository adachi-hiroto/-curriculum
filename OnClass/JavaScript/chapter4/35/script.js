// for
// for (var i = 1; i < 10; i++) {
//     console.log("ループ" + i + "回目");
//     };

// for in
// var items = ["リンゴ", "バナナ", "イチゴ"];
// for (index in items) {
// console.log(items[index]);
// };

// for of
// var teachers = [ 
//     { 
//         name: "太郎", 
//         age: 25, 
//         subject: "国語", 
//     }, 
//     { 
//         name: "浩司", 
//         age: 30,
//         subject: "数学", 
//     }, 
//     { 
//         name: "花子", 
//         age: 26, 
//         subject: "社会", 
//     } 
// ] 
// for (teacher of teachers) 
// { 
//     console.log(teacher); 
// };

// 1.for
for (i = 10; i--;) {
    console.log(i);
};

// 2.for in
var member = ["いぬ","さる","きじ"];
for (index in member) {
    console.log(member[index]);
};

// 3.for of
var membership = [
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
for (member of membership){
    console.log(member);
};

var teachers = [ 
    { name: "太郎", age: 25, subject: "国語", }, 
    { name: "浩司", age: 30, subject: "数学", }, 
    { name: "花子", age: 26, subject: "社会", } 
] 
for (teacher of teachers) { 
    console.log(teacher); 
};