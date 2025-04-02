<!--views/CustAdd.vue-->
<template>
    <div class="container">
        <div class="row">
            <label>이름</label>
            <input type="text" v-model="info.name"> 
        </div>
        <div class="row">
            <label>이메일</label>
            <input type="text" v-model="info.email"> 
        </div>
        <div class="row">
            <label>연락처</label>
            <input type="text" v-model="info.phone"> 
        </div>
        <div class="row">
            <label>주소</label>
            <input type="text" v-model="info.address"> 
        </div>
<div class="row">
  <button class="btn btn-info"
   v-on:click="addCust">
    등록
  </button>
</div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
 info: {
        name:null,
        email:null,
        phone:null,
        address:null, 
           }  
        }
    },
    methods:{
        async addCust(){
            let ajaxRes=
            await axios.post('/api/customers',this.info)
                        .catch(err=>console.log(err)); 
            let sqlRes=ajaxRes.data;
           console.log(sqlRes); 
        },   
    }
}

</script>