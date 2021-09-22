Template strings
const naming = "sally";
const age = 34;
const pet = "horse";

const greetingBest=`Hello ${naming} you seem to be ${age-10} What a lovely ${pet}`

Default agruments
function greet(name="bit",age=30,pet="cat") {
    return `Hello ${name} you seem to be ${age-10} What a lovely ${pet}`
}

symbol
let sym1=Symbol();
let sym2=Symbol("foo");
let sym3=Symbol("foo");

arrow function

function add(a,b){
    return a + b ;
}
const add2 = (a,b) => a +b;
