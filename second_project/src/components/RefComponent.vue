<!--components/RefComponenet.vue-->
<template>
  <div>
    <input type="number" v-model="content">
    <p>{{ content }}</p>
    <button ref="btn" @click="plusCount">더하기</button>
  </div>
</template>
<script>
export default{
  data(){
    return{
      content:'',
    }
  },
  mounted(){
    //이벤트 강제발생시 사용 
    console.log(this.$refs.btn);
    this.$refs.btn.click();
  },
  methods:{
    plusCount(){
     // alert('버튼을 클릭했습니다');
      if((typeof this.content)=='number'){
        let sum=this.content+100; 
        this.content=sum;
      }
      else{
        alert('데이터 타입이 숫자가 아닙니다');
        
      }

    },
  }
}

</script>