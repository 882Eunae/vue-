<!--RefTest.vue-->
<template>
    <div>
        <input type="number" v-model="content">
        <p>{{ content }}</p>
        <button ref="button" @click="plus">+</button>
        <button ref="minus" @click="minus">-</button>
        <button ref="event" @click="event">이벤트</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            content:0,

        }
    },
    mounted(){
        this.$refs.button.click();
        this.$refs.minus.click(); 
        this.$refs.event.click(); 
        
    },
   
    methods:{
        plus(){
           let sum=this.content+100;
           this.content=sum;            
        },
        minus(){
           let minus=this.content-1;
           this.content=minus;
        },
        event(){
            this.$emit('event-info'); 
        }
    }
}

</script>