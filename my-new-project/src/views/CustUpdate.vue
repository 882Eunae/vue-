<!--views/CustUpdate.vue-->
<template>
<div class="container">
    <div class="row">
        <label>아이디</label>
        <input type="text" v-model="info.id" readonly>
    </div>
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
        <label>주소소</label>
        <input type="text" v-model="info.address">
    </div>
    <div class="row">
        <button class="btn btn-info"
        v-on:click="updateCustomer(info.id)">수정</button>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            info:{
                name:null,
                email:null,
                phone:null,
                address:null,
            }
        }
    },
    created(){
        const selectId=this.$route.params.custId;
        this.getCustInfo(selectId);
    },methods:{
        async getCustInfo(id){
            let ajaxRes=await axios.get(`/api/customers/${id}`)
                                   .catch(err=>console.log(err)); 
            this.info=ajaxRes.data;  
        },
        async updateCustomer(custId){
            let updateDta={
                name:this.info.name,
                email:this.info.email,
                phone:this.info.phone,
                address:this.info.address
            }
            let ajaxRes=
            await axios.put(`/api/customers/${custId}`,updateDta)
                       .catch(err=>console.log(err));
            let sqlRes=ajaxRes.data;
            console.log('sqlRes',sqlRes); 
            let result=sqlRes.affectedRows; 
            if(result>0){
                alert('정상수정'); 
            } else{
                alert('수정안되뮤ㅠ'); 
            }
        }
    }
}
</script>