<template>
<!--    <div class="container">-->
        <div class="users" >
            <vs-select v-model="type" >
                <vs-option label="any" value="1" />

            </vs-select>
            <userbandsm v-for="(user, idx) in users" :user="user">
                <user-font :user="user"> {{parsePowerId(user.PowerID)}} </user-font>
            </userbandsm>

            <vs-pagination v-if="d"
                :length="pages"
                v-model="atp"
            />
        </div>
<!--    </div>-->
</template>

<script lang="ts">

import Vue from "vue";
import {Context} from "@nuxt/types";
import {parsePowerId,Clamp} from "~/assets/Functions";
import {UserData} from "~/types/user";
import { $axios } from "~/utils/api";

export default Vue.extend({
    data:() : { users:UserData.User | undefined,total:number,pages:number,atp:number,d:boolean,type: number } =>({users:undefined,total:1,pages:423,atp:333,d:false,type:-1}),
    async fetch(  ){
        let id = this.atp ==333 ? this.$nuxt.context.params.id || 1 : this.atp;
        let val = (await $axios.get('/api/Users?a=20&o='+(Number(id)-1))).data
        console.log(id)
        if (!val.data.error)
        {
            console.log(val.data)
            this.users = val.data.users;
            this.total = val.data.total;
            this.pages = val.data.pages;
            this.atp   = Number(id);
            this.d=true
            // {users:val.data.users,total:val.data.total,pages:val.data.pages}
        } else {

        }
    },
    mounted() {
        console.log(this.atp)
    },
    watch:{
        atp(val) {
            this.atp = val
            this.$nuxt.refresh()
        }
    },
    computed:{
        len(){
            return Clamp(1,10,this.pages)
        }
    },
    methods:{
        parsePowerId,
        Clamp,
        regAt(user : UserData.User) {
            console.log(user)
            return new Date(user?.RegisteredAT ?? '').toLocaleDateString()
        },
        goto(idd:number) {
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
.users {
    margin-top: 35px;
    padding-left: 40px;
    padding-right: 40px;
}
</style>
