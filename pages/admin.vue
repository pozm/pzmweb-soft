<template>
    <div id="Admin"  style="display: flex; flex-flow: row" >
        <div style="flex: .1" >
            <div>

                <el-input aria-placeholder="hhh" >

                </el-input>
                <perfect-scrollbar  class="scroll-area" :settings="{
                    suppressScrollY: false,
                    suppressScrollX: false,
                    wheelPropagation: false
                }">
                    <div v-for="i in Array(111)" >
                        aaa
                    </div>
                </perfect-scrollbar>
            </div>
        </div>

        <div class="container" >

hhh

        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@/assets/user.scss'
import {userStore} from '~/store'
export default Vue.extend({
    data : () => ({h:false,ContentAvil:[]}),

    computed:{
        userStore() {
            return userStore
        }
    },
    middleware:[
        'authenticated'
    ],
    methods:{

    }

})
</script>

<style>

#dashMain {
    flex: 1 80%;
}

.scroll-area {
    position: relative;
    width: 200px;
    height: calc(100vh - 40px);
}

.title {
    font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
