<template>
    <span v-if="id && duser" :class="classn" >
        {{duser.Username}}
    </span>
    <span v-else  :class="classn" >
        <slot/>
    </span>
</template>

<script lang="ts">

import Vue, {PropType} from "vue";
import {UserData} from "~/types/user";
import {Context} from "@nuxt/types";
import {parsePowerId} from "~/assets/Functions";
import '@/assets/Fonts.scss'

export default Vue.extend({
    name: "UserFont",
    data: () : { duser:UserData.User | undefined }  => ({duser:undefined}),
    props:{
        user:Object as PropType<UserData.User>,
        power:String,
        id : Number
    },

    mounted() {
        this.update()
    },
    watch:{
        user() {this.update()}   ,
        power() {this.update()}  ,
        id() {this.update()}
    },
    methods:{
        update(){
            this.duser = this.user ?? {}
            if (!this.user && this.id) {
                this.$axios.$get('/api/Users/'+this.id).then(val=>{
                    if (! this.duser?.PowerID)
                        this.duser = val.data

                })
            }
        }
    },
    computed:{
        classn(){
            let d : string;
            if (!this.duser)
                return 'guest'
            if (this.duser['PowerID'])
                d = (this.duser as UserData.User)?.PowerID.toString()
            else if (this.power)
                d = this.power
            else
                d = "0"
            return parsePowerId(d)
        }
    }
})

</script>

<style scoped>

</style>
