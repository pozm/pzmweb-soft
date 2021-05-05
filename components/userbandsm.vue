<template>
    <nuxt-link style="text-decoration: none" :to="'/user/'+user.ID" >

        <div class="UserBandsm shadow p-4 px-5" :class="small" >
            <div class="avatarParent" >
                <Avatar :size="64" :url="user.AvatarUri" />
            </div>
            <div class="AvatarText" >
                <UserFont :user="user"  > {{this.user.Username}} </UserFont>
                <div class="AvatarTextBio" style="align-self:baseline;text-align: left" >
                    <slot/>

                </div>
            </div>
        </div>
    </nuxt-link>

</template>

<script lang="ts">

import Vue, {PropType} from "vue";

import '@/assets/user.scss'
import {UserData} from "~/types/user";
import sanitize from "sanitize-html";

export default Vue.extend({
    name: "userbandsm",
    props:{
        user:Object as PropType<UserData.User>,
        small:Boolean
    },
    computed:{
    }
})

</script>

<style scoped>
</style>
