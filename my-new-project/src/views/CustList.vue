<!--views/CustList.vue-->
<template>
<div class="container">
    <table class="table">
        <caption>Total : {{ count }}</caption>
        <thead>
            <tr>
                <th>No</th>
                <th>아이디</th>
                <th>이름</th>
                <th>연락처</th>
            </tr>
        </thead> 
        <tbody>
        <template v-if="count>0">
            <tr v-for="(info,idx) in custList" :key="idx"
                v-on:click="goCustInfo(info.id)">
                <td>{{ idx+1 }}</td>
                <td>{{info.id}}</td>
                <td>{{ info.name }}</td>
                <td>{{ info.phone }}</td>
            </tr>
        </template>
        <tr v-else>
            <td colspan="4">
                현재 데이터가 존재하지 않습니다다
            </td>
        </tr>
    </tbody>
    </table>
</div>

</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            custList:[], 
        }
    },
    computed:{
        count(){
            return this.custList.length; 
        }
    }
    ,
    created(){
        this.getCustList(); 
    },
    methods:{
        async getCustList(){
            let ajaxRes=
            await axios.get(`/api/customers`)
                       .catch(err=>console.lof(err)); 
            this.custList=ajaxRes.data;           
        }, goCustInfo(custId){
            this.$router.push({name:'custInfo',query:{id:custId}});
        }
       
    }
}

</script>
