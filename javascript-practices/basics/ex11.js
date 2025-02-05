/*
    자바스크립트 함수
*/


console.log("============[01.01] 함수를 생성(정의) 방법: literal1");
console.log("============[01.02] 함수를 생성(정의) 방법: literal2");
console.log("============[01.03] 함수를 생성(정의) 방법: Function() 생성자 함수");
console.log("============[01.04] 함수를 생성(정의) 방법: 익명(Anonymous) 함수");
console.log("============[01.05] 함수를 생성(정의) 방법: 즉시 실행 함수");

console.log("============[02] 기변 파라미터");
var sum = function (){
    console.log("arguments : "  + arguments);
    var result = 0 ;
    // for(const arg of arguments){
    //     result += arg;
    // }


    return result;
}

console.log(sum(1));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6));

console.log("============[03] caller(this) 바꾸기");

