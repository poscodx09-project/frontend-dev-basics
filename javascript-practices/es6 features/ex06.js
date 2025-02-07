/*
    class Rect

*/

console.log('---[class 정의 지원]');
class Rect{
    constructor(w,h) {
        this.w = w;
        this.h = h;
    }
    draw(){
        console.log(`Rect(w=${this.w},h =${this.h})를 그렸습니다.`);
    }
}
const r1 = new Rect(1,2);
const r2 = new Rect(2,3,);
r1.draw();
r2.draw();

console.log('---[cf: 생성자 함수(protype 기반)]');
const Circle =  function (x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
Circle.prototype.draw = function (){
    console.log(`Circle(x=${this.x},y =${this.y},r=${this.r})를 그렸습니다.`)
}

const c1 = new Circle(1,2,3);
c1.draw();


console.log('---[클래스 상속(extends) 지원]');
class Rectangle extends Shape {

}
