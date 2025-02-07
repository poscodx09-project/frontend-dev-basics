/*
    Arrow Function

*/
const power = function (x){
    return x*x;
}

// ex1
console.log("\n===============")
const nums = [1,2,3,4,5];
nums.forEach(function (e){
    process.stdout.write(`${e}: ${power(e)} \t`);
})
// ex2
console.log("\n===============")
nums.forEach(function (e){
    const f = function (x){
        return x*x ;
    }
    process.stdout.write(`${e}: ${f(e)} \t`);
    process.stdout.write(`${e}: ${((x) => x*x) (e)} \t`);
})


// ex3
console.log("\n===============")
nums.forEach(e=> process.stdout.write(`${e}: ${((x) => x*x) (e)} \t`));


// ex4: this를 어휘상에서 바인딩 할 수 있다.
console.log("\n===============")

const dooly = {
    name: 'dooly',
    friends : ['one', 'two', 'three'],
    // printFriends : function (){
    //     this.friends.forEach(function (friend){
    //         console.log(`${friend} friend =>  ${this.name}`);
    //     })
    // }
    
     printFriends : function (){
        this.friends.forEach( (friend) => {
            console.log(`${friend} friend =>  ${this.name}`);
        })
    }
}
console.log("name : " + this.name);

