// async function p(){
// // we assume this code runs at top level, inside a module
// try{
// let response = await fetch('./data.json');
// let user = await raesponse.json();
// return user
// }catch(err){
//     console.log(err,'this is a err');
// }}
// p().then((re)=>{
//     console.log(re);
// })

// promise.All

async function fetAll(){
    const data1 =await fetch("./data.json")

    const data2 =await fetch("./data1.json")
    const data3 =await fetch("./data2.json")

        const promise= Promise.all([data1,data2,data3])
        const res= await promise

        const json = Promise.all(res.map(t=>t.json()))
    console.log(json)
}
fetAll()