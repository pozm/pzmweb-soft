<template>

    <div id="main" style="display: flex; flex-flow: row" >

        <SideBar/>
        <div id="content" >

            <nuxt/>
        </div>

    </div>
</template>


<style>
.mu:not(.el-menu--collapse) {
    width: 200px;
 }
</style>

<script lang="ts">

import {userStore} from '~/store'
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            isCollapse: true,
            userStore
        };
    },
    mounted() { // fixes it being different on client & server
        this.isCollapse = this.$mq === 'sm'
    },
    methods: {
        handleOpen(key:string, keyPath:string) {
            console.log(key, keyPath);
        },
        handleClose(key:string, keyPath:string) {
            console.log(key, keyPath);
        },
        getStore() {
            console.log(userStore.User)
            return userStore
        },
        delay(cb:()=>any,t:number) {
            let old = Date.now()
            while ((Date.now() - old) < t) {}
            return cb()
        },
        OnSelection(key :string) {
            switch (key) {
                case '5': {this.isCollapse = !this.isCollapse;} break;
                case '1': { this.$nuxt.context.redirect('/') } break;
                case '6-1': { this.$nuxt.context.redirect('/account/dash') } break;
                case '6-2': { userStore.logout(); this.$nuxt.context.redirect(this.$nuxt.$route.fullPath) } break;
            }
        },
        PathToIndex() {
            switch (this.$route.path) {

            }
        }
    }
})
</script>

<style lang="scss" >
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

@import '../assets/Var';

.fadem-enter-active,
.fadem-leave-active {
    transition: all .5s;

}

.fadem-enter,
.fadem-leave-to {
    max-width: 65px;
    span {
        opacity: 0;

    }
}
@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
}
.fadem-enter-to ,
.fadem-leave {
    span {
        animation: fadeIn ease .5s;
    }
    max-width: 200px;
}
.fadem1-enter-active,
.fadem1-leave-active {
    transition: all .5s;
}

.fadem1-enter,
.fadem1-leave-to {
    min-width: 200px;
}

.fadem1-enter-to ,
.fadem1-leave {
    min-width: 65px;
}
</style>
