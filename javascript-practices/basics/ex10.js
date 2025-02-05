/*
    Date 객체 함수: Date.prototype.*
*/

// 현재 시간
// 2025년 1월 20일
// 2025년 1월 20일 13:06:40

// 객체 메서드
console.log(
    "년도: 2025\n" +
    "월: 1\n" +
    "일: 20\n" +
    "시: 13\n" +
    "분: 06\n" +
    "초: 40\n" +
    "밀리초: 1234"
);
var now = new Date();
console.log(now.getDate());
console.log(Date.now());