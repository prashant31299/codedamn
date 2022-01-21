async function p(){
// we assume this code runs at top level, inside a module
try{
let response = await fetch('./data.json');
let user = await raesponse.json();
return user
}catch(err){
    console.log(err,'this is a err');
}}
p().then((re)=>{
    console.log(re);
})