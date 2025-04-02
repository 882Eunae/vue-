<template>
 <!--Header-->
 <DefaultHeader></DefaultHeader>
  <router-view/>
  <!--Footer Component-->
</template>
<script>
import DefaultHeader from './layout/DefaultHeader.vue';
export default{
  components:{
    DefaultHeader,
  }
}
</script>

