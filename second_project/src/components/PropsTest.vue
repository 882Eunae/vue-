
<!--PropsTest.vue-->
<template>
<div>
 <PageTitle title="은애복습중..." ></PageTitle>
</div>
<hr>

<PageTest v-bind="info"  @update-info="handler"></PageTest>
<PageTest v-bind:title="header"
                 v-bind:content="content"
                 :count="h2count"
                 :regdate="regdate"
                 :writer="writer"
                 @update-info="handler2"></PageTest>
<RefTest @event-info="event1" ></RefTest>
<RefTest @event-info="event2" ></RefTest>



</template>
<script >
import PageTitle from './PageTitle.vue';
import PageTest from './PageTest.vue';
import RefTest from './RefTest.vue';

export default{
    data(){
        return{
         info:{
        title:'Today is',
        count:5,
        writer:'Adward',
        regdate:'2024-11-19',
        content:'No content'
      },
      header:'제목제목',
      content:'내용내용',
      regdate:'2025-04-01',
      writer:'작가작가',
      h2count:0,
    
        }

    },
    components:{
        PageTitle,
        PageTest,
        RefTest,
       
    },
    methods:
    {
        handler(readInfo){ 
        alert('handelr선택');
        this.info.count=readInfo;
    },
    handler2(readInfo){
        alert( 'handler2 선택');
       this.h2count=readInfo;
    },
    refHandler(resMinus){
        this.minus=resMinus; 
        alert('minus버튼이 눌렸습니다')
    },event1(){
        alert('이벤트1클릭'); 
    },
    event2(){
        alert('이벤트2클릭');
    }
    }
}


</script>
