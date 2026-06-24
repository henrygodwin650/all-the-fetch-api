// using async await instead of chaining then()
// still needs error handling with try... catch
const url ='https://jsonplaceholder.typicode.com/users';

export async function getData(){
  // 
 // fetch().then().then().catch()
 
 try {
   let response = await fetch (url);
    console.log(response);
    if(!response.ok) throw new Error ('cannot fetch the data');
    let dataobj = await response.json();
    console.log(dataobj);
 } catch (err){
  console.warn(err.message);
 }
}