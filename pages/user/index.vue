<template>
    <div class="container">
        <div style="margin-top: 35px" >

            <userbandsm v-for="(user, idx) in users" :user="user">
                <user-font :user="user"> {{parsePowerId(user.PowerID)}} </user-font>
            </userbandsm>

            <vs-pagination
                :max="10"
                :length="pages"
                v-model="pages"
                @change="console.log('hhhhaaaaax')"
            />
        </div>
    </div>
</template>

<script lang="ts">

import Vue from "vue";
import {Context} from "@nuxt/types";
import {parsePowerId} from "~/assets/Functions";
import {UserData} from "~/types/user";
import { $axios } from "~/utils/api";

export default Vue.extend({
    data:() : { users:UserData.User | undefined,total:number,pages:number,atp:number } =>({users:undefined,total:0,pages:0,atp:0}),
    async fetch(  ){
        let val = (await $axios.get('/api/Users?a=20&o='+this.atp)).data
        console.log(val.data,!val.data.error)
        if (!val.data.error)
        {
            console.log(val.data)
            this.users = val.data.users;
            this.total = val.data.total;
            this.pages = val.data.pages;
            // {users:val.data.users,total:val.data.total,pages:val.data.pages}
        } else {

        }
    },
    mounted() {
      console.log(this.atp)
    },
    watch:{
      // at(val) {
      //
      // }
    },
    methods:{
        parsePowerId,
        regAt(user : UserData.User) {
            console.log(user)
            return new Date(user?.RegisteredAT ?? '').toLocaleDateString()
        }
    }
})

</script>

<style lang="scss" >
@import 'assets/Var';
.color {
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    right:0;
    top:0;
    background-color: $--color-success;
}
</style>
