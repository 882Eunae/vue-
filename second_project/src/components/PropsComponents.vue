<!--components/PropsComponent.vue 부모-->
<template>
<div>
  <PageTitle title="First!"/> 
  <PageTitle title="Today is.."/>
</div>  
<hr>
<PageContent v-bind:title="header"
             v-bind:count="(10+15)"
             :writer="['Adward']"
             :regdate="20241205"
             :content="{
                        first:'Node.js',
                        second:'Vue.js',
                        }"></PageContent>
    <hr>
    <PageContent v-bind="info" @update-info="handler"></PageContent>
    <hr>
    <RefComponent ref="child"/>
    <hr>
    <label>부모 데이터 :
      <input type="number" v-model="num">
      <button @click="childHandler">자식제어</button>
    </label>
</template>

<script>
import PageTitle from './PageTitle.vue'; //자식
import PageContent from './PageContent.vue';
import RefComponent from './RefComponent.vue';

export default{
  data(){
    return{
      header:'게시글조회', 
      info:{
        title:'Today is',
        count:5,
        writer:'Adward',
        regdate:'2024-11-19',
        content:'No content'
      },
      num:0
    }
  }, 
  components:{
    PageTitle, //자식 컴포넌트 등록 
    PageContent,
    RefComponent,
  },
  created(){
    console.log('PropsComponents Created'); 
  },
  mounted(){
    console.log('PropsComponents Mounted');
  },
   methods:{
    handler(readInfo){
      //자식 컴포넌트의 emit을 기반으로
      // 넘긴데이터가 매개변수로 넘어옴
      alert('자식 컴포넌트 요청');
      this.info.count=readInfo;
    },
    childHandler(){
      // 1) 자식 컴포넌트의 함수 직접호출 
      this.$refs.child.plusCount(); 
      let RefCom=this.$refs.child; 
      RefCom.$refs.btn.click(); 
    }
  },
   watch:{ //자식요소 변경시 부모가 다이렉트로 받을수 있음 
      num(){
      this.$refs.child.content=this.num;
    }
  }
}
</script>