/*
    let & const I

*/

function f(){
    i = 10;
    if(i == 10){
        var j = 20; // var는 함수 범위에서의 변수를 선언해준다
    }

    console.log(j);
}

f();
console.log(i);