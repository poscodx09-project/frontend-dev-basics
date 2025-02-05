/* Lexical Scope */
var f1 = function (){
    var s = "Hello World!";
    var inner = function (){
        console.log(s);
    }

    inner();
}
var closure = f1();
closure();

/* Closure is a function that has access to the outer function's scope in which it was created even after the outer function has finished executing. */

