<template>
    <div id="dashMain" >
        <div class="container" style="display: flex; flex-flow: column" >


            <h3 style="display: flex; align-self: baseline;margin-left:5px">Discord</h3>
            <div v-if="!userStore.User.DiscordID" class="UserBand" >
                <vs-button @click="userStore.LinkDiscord()" type="primary" transparent block >Link</vs-button>

            </div>
            <Band v-else :name="userStore.User.DiscordUser" :avatar="userStore.User.AvatarUri" >
                <template>
                    <div style="display: flex;align-items: baseline" >
                        <p style="font-size: medium; display: block" > {{userStore.User.DiscordID}} • </p>
                        <vs-button @click="userStore.LinkDiscord()" type="primary" transparent >Relink</vs-button>
                        <vs-button @click="userStore.JoinDiscord()" type="primary" transparent >Join discord</vs-button>

                    </div>

                </template>

            </Band>

            <h3 style="display: flex; align-self: baseline;margin-left:5px">Settings</h3>
            <nuxt-link to="/account/settings" >Click here</nuxt-link>


        </div>
        <div>


        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '~/assets/user.scss'
import {userStore} from '~/store'
export default Vue.extend({
    data : () => ({h:false,ContentAvil:[]}),
    async fetch() {
        this.ContentAvil =  (await this.$axios.$get('/api/Content'))

    },
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
