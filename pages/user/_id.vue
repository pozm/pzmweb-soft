<template>
    <div class="container">
        <Userband :user="user" >
            <template v-if="user" >
                <p style="font-size: medium" >Registered since {{ regAt() }} • <UserFont :power="user.PowerID.toString()" > {{parsePowerId(user.PowerID)}} </UserFont></p>
                <p v-if="user['InvitedBy']" style="font-size: medium" >Invited by  <UserFont :id="user.InvitedBy" /> </p>
            </template>
        </Userband>
<!--        <div class="color"/>-->
    </div>
</template>

<script lang="ts">

import Vue from "vue";
import {Context} from "@nuxt/types";
import {parsePowerId} from "~/assets/Functions";
import {UserData} from "~/types/user";

export default Vue.extend({
    data:() : { user:UserData.User | undefined } =>({user:undefined}),
    async asyncData(ctx: Context): Promise<void | object> {
        let val = await ctx.$axios.get('/api/Users/'+ctx.params.id)
        console.log(val.data)
        if (val.data.data?.Username && !val.data.error)
        {
            return {user:val.data.data}
        } else {
            ctx.error({
                statusCode: 404,
                message: 'User not found'
            })
        }
    },
    methods:{
        parsePowerId,
        regAt(){
            return new Date(this.user?.RegisteredAT ?? '').toLocaleDateString()
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
