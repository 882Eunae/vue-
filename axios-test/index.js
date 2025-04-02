//index.js 
const axios=require('axios');

fetch('http://localhost:3000/customers')
.then(res=>res.json())
.then(result=>{
  console.log('fetch,GET'); 
  console.log(`\t`,result); 
})
.catch(err=>console.log(err));

//axios 
axios('http://localhost:3000/customers')
.then(result=>{
  console.log('axios,GET'); 
  console.log(`\t`,result.data); 
})
.catch(err=>console.log(err));
//단건조회 
axios.get('http://localhost:3000/customers/1')
.then(result=>{
  console.log('axios,단건조회'); 
  console.log(`\t`,result.data); 
})
.catch(err=>console.log(err));

//등록 
let insertInfo= {
  name: 'Jaein',
  email: 'Jaein@naver.com',
  phone: '010-1234-1234',
  address: null
};
//1)fetch 
// let fetchInsert={
// method:"POST",
// headers:{
//   "Content-Type":"application/json"
// },
// body:JSON.stringify({
//     NAME: 'Jaein',
//     EMAIL: 'Jaein@naver.com',
//     PHONE: '010-1234-1234',
//     ADDRESS: null
// })};

fetch('http://localhost:3000/customers',
  {
    method:'POST',
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(insertInfo), 
  }
)
.then(response=>response.json())
.then(result=>{
  console.log('fetch,POST'); 
  console.log(result); 
})
.catch(err=>console.log(err));


axios.post('http://localhost:3000/customers',insertInfo)
.then(result=>{
  console.log('axios, 등록'); 
  console.log(`\t`,result.data); 
})
.catch(err => console.log(err));