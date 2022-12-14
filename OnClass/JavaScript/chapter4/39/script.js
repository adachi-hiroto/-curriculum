// メソッド
// const teacher = { 
//     name: "太郎", // プロパティー
//     subject: "国語",  // プロパティー
//     profile: function(){//  メソッド 
//     console.log("担当教科は国語です"); }  
// }
// teacher.profile()

// 引数
// function sumNum(x) {
//     const result = x + 1
//     console.log(result);
//     };
// sumNum(1)

// function sumNum(x, y) {
//     const result = x + y
//     console.log(result);
//     };
// sumNum(5, 10)

// function showText(x) {
//     console.log(x);
//     };
// showText(`引数`)

// コールバック関数
// function tomato(price, func) {
//     const name = "トマト";
//     func(name, price);
//     }
//     const price = function price(name, price) {
//     console.log(name + " の値段は" + price + "円です。");
//     }
// tomato(100, price);

// 1.
// プロパティ：オブジェクトが持つ属性（オブジェクトが持つ情報）
// メソッド　：オブジェクトに関連付けされた関数

// 1-①
const num = {
    showNum: function() {
        
        console.log( '1' );
        
    }
}
 
num.showNum();

// 1-②
const text = {
    showText: function(name) {
        
        console.log("こんにちは" + name +"です。");
        
    }
}
 
text.showText("太郎");

// 1-③
const additon = {
    showAdd: function(x){

        const result = x * 2;

        return result;
    }
}
console.log(additon.showAdd(2))

// 2.
function fruit(name, price) {
    const result = name + "の値段は" + price + "円です。"
    return result
};
console.log(fruit("りんご","120"))

// 3.
function addTax(price, func) {
    // priceは値段
    // funcは実行する関数名
    // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
    const taxPrice = Math.round(price * 1.10);
    func(vegetable,taxPrice);
}
const price = function price(vegetable,price){
    console.log(vegetable + "の値段は" + price + "円です。");
}
    // トマトの税込み価格をコンソールに表示させる処理
let vegetable = "トマト";
addTax(100,price);
    // 玉ねぎの税込み価格をコンソールに表示させる処理
vegetable = "玉ねぎ";
    addTax(200,price);