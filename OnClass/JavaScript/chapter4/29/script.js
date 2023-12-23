// var boolean = false;
// if(boolean){
// console.log("trueの処理");
// console.log(boolean);
// } else {
// console.log("falseの処理");
// console.log(boolean);
// };

// var boolean = false;
// if (boolean) {
// console.log("trueの処理");
// console.log(boolean);
// }
// `console.log("テスト");`
// else {
// console.log("falseの処理");
// console.log(boolean);
// } ;

// 1.elseを使用する時の注意点
// elseの使用はifがある時だけ使用できるので独立して使用はできない。
// if文とelseの間に処理書いてもエラーとなってしまうので注意。

// 2.JavaScriptで実装した時の確認ポイント
// エラーが発生するとコンソールにエラーが表示される。
// 実装した時は動くかどうかの確認も勿論とコンソールにエラーを表示してないかも確認。

// 3.数値型を比較してelseの処理に入る処理
var num = 100;
if (num == 100){
    console.log("true");
    console.log(num);
} else{
    console.log("false");
    console.log(num);
}

// 4.文字列型を比較してelseの処理に入る処理
var text = "JavaScript";
if (text == "Javascript"){
    console.log("true");
    console.log(text)
} else{
    console.log("false");
    console.log(text)
}
