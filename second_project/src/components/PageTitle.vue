<!--components/PageTitle.vue-->
<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  // 부모가 넘겨준 값들, Read Only
  props: ['title'],
  created(){
    console.log('PageTitle Created'); 
  },
  mounted(){
    console.log('PageTilte Mounted');
  },
}
</script>
