<template>
<ModalLayout>
<template v-slot:header>
<h1>헤더입니당</h1>
</template>
<template v-slot:default>
    <h3>default</h3>
</template>
<template v-slot:footer>
    <h1>푸터</h1>
</template>
</ModalLayout>
</template>
<script>
import ModalLayout from './ModalLayout.vue';

export default{
    components:{
        ModalLayout,
    }
}
</script>