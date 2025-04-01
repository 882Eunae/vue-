<!--views/TextModal.vue-->
<template>
<Layout>
  <!--슬랏이 있느 태그의 경우 여는태그 닫는태그 둘다 있어야함 -->
  <template v-slot:header>
    <h1>팝업제목</h1>
  </template>
  <template v-slot:default>
    <p>팝업 컨텐츠 1</p>
    <p>팝업 컨텐츠 2</p>
  </template>
  <template v-slot:footer>
    <button type="button">닫기</button>
  </template>
 </Layout> 
</template>

<script>
import Layout from './ModalLayout.vue'
export default{
  components:{
    Layout
  }
}

</script>