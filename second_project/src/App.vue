<template>
  <div>
    <input type="text" v-model.lazy="selected">
    <component v-bind:is="selected"></component>
  </div>
</template>

<script>
import PropsCom from './components/PropsComponents.vue';
import PageTitle from './components/PageTitle.vue';
import TextModal from './views/TextModal.vue';
import PropsTest from './components/PropsTest.vue';
import RefTest from './components/RefTest.vue';
import Modal from './views/Modal.vue';
export default {
  data() {
    return {
      selected: 'TextModal'
    };
  },
  components: {
   PropsCom, //'PropsCom':PropsCom
   //PageTitle,
   TextModal,
   Modal,
   //PropsTest,
   //RefTest,
  },
  created(){
    console.log('App.vue Created'); 
  },
  mounted(){
    console.log('App.vue Mounted');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
