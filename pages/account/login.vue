<template>
    <div class="container">
        <div style="display: block" >

            <div class="login">


                    <vs-input
                        v-model="username"
                        label-placeholder="Username"
                        block
                    />

                    <vs-input
                        label-placeholder="Password"
                        v-model="password"
                        type="password"
                        block
                    />

                    <recaptcha :hidden="!password"  @success="onCompletedCaptcha" dataTheme="dark"/>
                    <vs-button :disabled="!meta.recaptchaCompleted"  @click="onSubmit" >submit</vs-button>

                <vs-button icon  @click="discLogin"  >
                    <svg data-src="https://s2.svgbox.net/social.svg?ic=discord" width="16" height="16" color="#ffffff"></svg>
                    Login with discord

                </vs-button>
            </div>




        </div>
    </div>
</template>

<script lang="ts" >
import Vue from "vue";
import {UserData} from "~/types/user";
import UserModule, {user} from "~/store/user";
import { userStore } from "~/store";


export default Vue.extend({

    data() {
        return {
            username:'',
            password:'',
            meta : {
                recaptchaCompleted : false
            }
        }
    },
    computed:{
        userStore() {
            return userStore
        }
    },
    methods:{

        async discLogin() {
            let data = await userStore.DiscordLogin()
            if (data == 11) {
                await this.$router.push('/')
            }
        },

        onCompletedCaptcha() {
            this.meta.recaptchaCompleted = true
        },

        async onSubmit() {
            if (!this.meta.recaptchaCompleted)
                return;
            try {
                const token = await this.$recaptcha.getResponse()
                let out = await userStore.login({
                    Recaptcha:token,
                    Password:this.password,
                    Username:this.username,
                    Email:this.username
                })
                if (out.error)
                {
                    this.$notify({
                        title:'Failed to login',
                        message:`${out.message}`,
                        type:'error'
                    })
                }
                else {
                    let next = (this.$route.query?.next as string | undefined) ?? (this.$route.redirectedFrom ?? '/')
                    console.log(next,this.$route.params?.next,this.$route.query)
                    this.$router.replace(next)

                }
            }
            catch (e) {}
        },

    },
    middleware:[
        'guest'
    ],
    head : {
        title:'Login'
    }
})
</script>

<style scoped lang="scss" >

.login {
    display: grid;
    grid-gap: 40px;
}

</style>
