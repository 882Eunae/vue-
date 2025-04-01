<!--components/PropsComponent.vue 부모-->
<template>
<div>
  <PageTitle title="First!"/> 
  <PageTitle title="Today is....."/>
</div>  
</template>

<script>
import PageTitle from './PageTitle.vue'; //자식
export default{
  components:{
    PageTitle, //자식 컴포넌트 등록 
  }
}
</script>