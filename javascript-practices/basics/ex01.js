console.log("============[01] 기본타입, primitive type");
u = undefined;
n = 12;
s = "hello";
b = true;
console.log("u: " + typeof(u));
console.log("n: " + typeof(n));
console.log("s: " + typeof(s));
console.log("b: " + typeof(b));
////////////////////////////////////////////////////////////////////////////////////////
console.log("============[02.01] 객체타입: object");
var i = new Number(10);
var s = new String("c");
var b = new Boolean(true);
var o = {};
var a = [];
var n = null;

console.log("i: " + typeof(i));
console.log("s: " + typeof(s));
console.log("b: " + typeof(b));
console.log("o: " + typeof(o));
console.log("a: " + typeof(a));
console.log("n: " + typeof(n));

////////////////////////////////////////////////////////////////////////////////////////
console.log("============[02.02] 객체타입: function");

function f1(){}
var f2 = function (){
};
var f3 = new Function();

console.log("f1: " + typeof(f1));
console.log("f2: " + typeof(f2));
console.log("f3: " + typeof(f3));
////////////////////////////////////////////////////////////////////////////////////////
console.log("============[06] 기본타입과 유사객체");

