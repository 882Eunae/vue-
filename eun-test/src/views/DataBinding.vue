<!--views/DataBinding.vue 페이지의 일부분인 하나의 컴포넌트-->
<template>
  <!--HTML-->
  <div>
    <!--이중괄호-->
    <h1>{{ title }}</h1>
    <!--directive:Vue의 명령 수행,'v-' 접두어 사용-->
    <h2 v-text="title" id="home"></h2> <!--text속성을 제어하는 -->
    <p v-html="tagList"></p>
    <p v-text="tagList" v-bind:name="tagName"></p>
    <!--v-bind 디렉티브 : 단방향 바인딩-->
   
     <input type="text" v-model="valueModel">  <!-- v-model 디렉티브: 양방향 바인딩 -->
     <p>{{ valueModel+1000 }},{{ typeof valueModel }}</p>
     <input type="number" v-model.lazy="numberModel">
     <p>{{ numberModel }},{{ numberModel +10000 }}</p>
  </div>
</template>
<script>
//Vue 객체의 데이터,기능 

export default{
  data(){ //데이터 바인딩에 사용하는 데이터들(CRUD) 
    return {
      title:'Hello,vue.js',
      tagList:'<strong>Today is...</strong>',
      tagName:'bindTest', 
      valueModel:'Korea',   //양방향 
      numberModel:10000,
      selectModel:'winter',
      textModel:'백견불여일타',
      chData:'',
      city:[],
      hobby:'',
    }
  }
}
</script>
<style>
/*css*/ 
</style>M