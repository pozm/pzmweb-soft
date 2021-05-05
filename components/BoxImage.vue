<template>
    <NuxtLink :to="to" style="flex:1;margin: 0px 14px; justify-content: center; display: flex" >
        <div class="Box Image" :style=" { height,width, background:getUrl() } " @mouseenter="hover=true" @mouseleave="hover=false" >
            <Transition name="fade" mode="in-out" >

                <div v-if="hover" >
                    <slot/>
                </div>

            </Transition>
        </div>
    </NuxtLink>
</template>

<script lang="ts" >

import Vue from "vue";
import '@/assets/box.scss'
export default Vue.extend({
    name:'BoxImage',
    data: () => ({hover:false}),
    props:{
        width: String,
        height: String,
        url: String,
        to:String
    },
    methods:{
        getUrl() {
            return `url(${this.url})`
        }

    },
    mounted() {
        console.log(this)
    }
})

</script>

<style scoped>

</style>
