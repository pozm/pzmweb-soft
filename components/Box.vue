<template>
    <div class="Box" :style=" this.getProps() " >
        <slot/>
    </div>
</template>

<script lang="ts" >

import Vue from "vue";
import '@/assets/box.scss'
export default Vue.extend({
    name:'Box',
    props:{
        width: {
            type: String,
            default:'200px'
        },
        height: {
            type: String,
            default:'200px'
        },
    },
    methods:{
        getProps() {
            return {
                height:this.height,
                width:this.width,
            }
        }
    },
    mounted() {
        console.log(this)
    }
})

</script>

<style scoped>

</style>
