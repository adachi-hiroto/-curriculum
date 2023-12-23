// 関数

// function functionTest() {
//     // ここに処理を書いていきます。
// }

// function showAlert() {
//     alert("functionTestが実行されました。")
// }
// showAlert()

// var getText = function () {
//     return "getTextが実行されたのでこのテキストを返します。"
// };
// console.log(getText());

// // スコープ
// var getText = function () {
//     var text = "getTextが実行されたのでこのテキストを返します。";
//     console.log(text);  
// }; 

// 1.
function showAlert(){
    alert("実行されました。")
}
showAlert()

// 2.
var getAddition = function(x,y){
    return x + y;
}
console.log(getAddition(1,2));

// 3.スコープとは
// スコープとは簡単に言うと変数がどの場所から参照できるかの範囲「変数の有効範囲」。
// スコープの中で定義された変数はスコープの内側でのみ参照でき、スコープの外側からは参照できない。