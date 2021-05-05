<template>

    <div class="UserBand shadow p-4 px-5" :class=" {small} " >
        <div class="avatarParent" >
            <Avatar :url="this.avatar" />
        </div>
        <div class="AvatarText" style="font-size:xxx-large; align-self:center;" >
            {{ name }}
            <slot/>
        </div>
    </div>

</template>

<script lang="ts">

import Vue, {PropType} from "vue";

import '@/assets/user.scss'
import {UserData} from "~/types/user";

export default Vue.extend({
    name: "band",
    props:{
        name:String,
        avatar:String,
        small:Boolean
    }
})

</script>

<style scoped>

</style>
