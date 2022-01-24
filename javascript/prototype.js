let a = {
    prop1:10
}
let b = {
    prop2:20
}
let c = {
    prop3:30
}
let d = {
    prop4:40
}
d.__proto__=c
c.__proto__=b
b.__proto__=a


let animal = {
    talk:"yes",
    leg:"four",
    walk(){
        alert("animal walk");
    }
}
let rabit ={
    eat:"carrot",
    __proto__=animal
}
console.log(rabit.walk());

