<!--layout/DefaultHeader.vue-->
<template>
<nav class="nav justify-content-center">
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" :to="{name:'custList'}">전체조회</router-link>|
    <router-link class="nav-link" :to="{name:'custInfo'}">개별조회</router-link>|
   <router-link class="nav-link" :to="{name:'cusAdd'}">등록</router-link>
  </nav>
</template>