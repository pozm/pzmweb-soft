<template>
    <div @mouseenter="hover=true" @mouseleave="hover=false" >
        <ElImage
            style="border-radius: 10px"
            :id="item.ID"
            :preview-src-list="[item.High]"
            :src="makeLow(item)"
        />
        <transition name="fade" mode="out-in">
            <div v-if="hover" class="ImgInside">
                <div class="insideCol" >
                    <div>Name : </div> <div class="Capitalize" >{{ GetName(item.Low) }}</div>
                </div
                ><div class="insideCol" >
                    <div>ID : </div> <div class="Capitalize" >{{item.ID }}</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">

import Vue, { PropType } from "vue";
import '@/assets/user.scss'
import { ContentData } from "~/types/content";
export default Vue.extend({
    data:() => ({hover:false}),
    name: "hImage",
    props:{
        src:String,
        inner:String,
        item:Object as PropType<ContentData.File>
    },
    methods:{
        makeLow(item:ContentData.File) {
            return `${item.Low}?width=${~~(item.Width/2)}&height=${~~(item.Height/2)}`
        },
        GetName(f: string) {
            return f.slice(f.lastIndexOf("/") + 1, f.lastIndexOf("."));
        }
    }
})

</script>

<style lang="scss" scoped>
    @import "assets/Var";

    .p1 {
        margin-right: 10px;
        padding:2px;
        background: white;
    }
    .p2 {
        padding:3px;
        background: $--background-color-sec;
    }
    .ImgInside {
        position: absolute;
        top: 5px;
        padding: 3px 5px;
        left: 2.5%;
        background: rgba($--background-color-base,.25);
        box-shadow: 3px 8px 17px 1px rgba(8, 9, 10, 0.38);
        //border: solid 2px transparent;
        //background-clip: padding-box;
        color: white;
        max-width: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        backdrop-filter: saturate(180%) blur(30px);
        mix-blend-mode: difference;
        border-radius: 7px;

        display: inline-block;


    }
    .insideCol {
        display: flex;
        flex-flow: wrap;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        & > div {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

        }
        & > div:first-child{
            margin-right: 5px;
        }
    }
</style>
