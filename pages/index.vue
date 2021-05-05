<template>
    <div class="container">
        <div>
            <h1 class="title" >Hello{{ userStore.LoggedIn ? ', ' : '' }} <user-font v-if="userStore.LoggedIn" :user="userStore.User" > {{userStore.User.Username}} </user-font> </h1>

            <transition name="fadeh" mode="in-out" appear >
                <p class="subtitle" v-if="h" > Welcome.</p>


            </transition>
            <transition name="fadeh" mode="in-out" appear :duration="2000000" >
                <div style="display: ruby" >
                    <vs-button to="/forum" transparent >Go to Forum</vs-button>
                    <vs-button to="/account/dash" transparent >Go to Dashboard</vs-button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {userStore} from "~/utils/store-accessor";
export default Vue.extend({
    data : () => ({h:false,userStore}),
    mounted() {
        this.h=true
    }
})
</script>

<style>

.fadeh-enter-active{
    transition: transform 0.5s, opacity 0.7s;

}

.fadeh-enter {
    opacity: 0;
    transform: scaleY(0) translateY(-40px);
}

.fadeh-enter-to {
    opacity: 1;
    transform: scaleY(1) translateY(0px);
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
