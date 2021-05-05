<template>

    <div class="UserBand shadow p-4 px-5" :class="small" >
        <div class="avatarParent" >
            <Avatar :size="111" :url="user.AvatarUri" />
        </div>
        <div class="AvatarText" >
            <UserFont :user="user"  > {{this.user.Username}} </UserFont>
            <slot/>
        </div>
        <div class="AvatarTextBio" v-if="user.Bio" style="align-self:baseline;text-align: left" >
            <div class="bio" v-html="bio" ></div>
        </div>

    </div>

</template>

<script lang="ts">

import Vue, {PropType} from "vue";

import '@/assets/user.scss'
import {UserData} from "~/types/user";
import sanitize from "sanitize-html";

export default Vue.extend({
    name: "userband",
    props:{
        user:Object as PropType<UserData.User>,
        small:Boolean
    },
    computed:{
        bio(){
            return sanitize(this.user.Bio)
        }
    }
})

</script>

<style scoped>
</style>
