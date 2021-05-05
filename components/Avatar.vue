<template>

    <div :class="{['drop-shadow']:shadow}" >
        <div :hidden="!loaded" class="CircleMask p1" :style=" outer ? { background: outer} : '' " >
            <div  class="CircleMask p2" :style=" inner ? { background: inner} : '' ">
                <img
                    class="CircleMask"
                    :src="this.url"
                    :width="this.size"
                    alt=""
                    @load="loaded=true"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import Vue from "vue";
import '@/assets/user.scss'
export default Vue.extend({
    data:() => ({loaded:false}),
    name: "Avatar",
    props:{
        url:String,
        size:{
            type:Number,
            default:128
        },
        inner:String,
        outer:String,
        shadow:{
            type:Boolean,
            default:true
        }
    },
    watch:{
        url(){
            this.loaded=false
        }
    }
})

</script>

<style lang="scss" scoped>
    @import "assets/Var";
    .drop-shadow{
        border-radius: 50%;
        box-shadow: 3px 10px 20px -10px rgba($--color-primary, 1);
        margin-right: 10px;


    }
    .p1 {
        padding:2px;
        background: $--color-primary;
    }
    .p2 {
        padding:3px;
        background: $--background-color-sec;
    }
</style>
