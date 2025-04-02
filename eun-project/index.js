import axios from "axios";

axios('http://localhost:3000/customers')
     .then(result=>{
        console.log('axios.get');
        console.log('\t',result.data); 
     })
     .catch(err=>console.log(err));