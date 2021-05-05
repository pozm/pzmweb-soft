import vuex, {Store}  from "vuex"
export const user = () => ({})


import {Module, VuexModule, Action, Mutation, MutationAction} from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { UserData} from "~/types/user";
import Vue from "vue";
import {AxiosError} from 'axios'
import {Api} from "~/types/api";
import {Message} from "element-ui";
import {userStore} from "~/utils/store-accessor";


let LinkUrl = process.env.DiscordLink
let DLoginUrl = process.env.DiscordLogin
let DJoinURL = process.env.DiscordJoin
Vue.use(vuex)

@Module({
    name: 'user',
    stateFactory: true,
    namespaced: true,
})
export default class UserModule extends VuexModule {
    User: UserData.User | { [x:string]:any } = {}
    LoggedIn = false

    @MutationAction
    async UpdateData() {
        let medata = await $axios.$get('/api/Account/me').catch(()=>({error:true,data:{}})) as {data:UserData.User, error:boolean}
        if (medata?.error || !medata?.data?.ID)
        {
            return {User:{},LoggedIn:false}
        }
        return {User:medata?.data,LoggedIn:true}
    }
    @Action
    async LinkDiscord() {
        let dat = await new Promise(resolve=>{

            if (!this.LoggedIn)
                return false;
            let win = window.open(LinkUrl,'_blank','height=777,width=520,scrollbars=off,location=0,menubar=0,status=0')
            if (!win)
                return false
            window.addEventListener('message',(ev)=>{
                let even = ev as unknown as CustomEvent
                let ret = even.detail.ret
                resolve(ret)
                if (win)
                    win.close()
            })
            setTimeout(()=>{
                if (!win)
                    return ''
                if (!win.closed)
                    win.close()
                resolve(7)
            },200e3)
        })
        await this.UpdateData()
        switch (dat) {
            case 1:{
                Message.success('Successfully linked discord as ' + userStore.User.DiscordUser)
            } break;
            default:{
                Message.error('Something went wrong while linking')
            }break;
        }
        return dat
    }
    @Action
    async JoinDiscord() {
        let dat = await new Promise(resolve=>{

            if (!this.LoggedIn)
                return false;
            let win = window.open(DJoinURL,'_blank','height=777,width=520,scrollbars=off,location=0,menubar=0,status=0')
            if (!win)
                return false
            window.addEventListener('message',(ev)=>{
                let even = ev as unknown as CustomEvent
                let ret = even.detail.ret
                resolve(ret)
                if (win)
                    win.close()
            })
            setTimeout(()=>{
                if (!win)
                    return ''
                if (!win.closed)
                    win.close()
                resolve(7)
            },200e3)
        })
        await this.UpdateData()
        switch (dat) {
            case 7:{
                Message.success('Successfully joined the discord')
            } break;
            default:{
                Message.error('Something went wrong while linking')
            }break;
        }
        return dat
    }
    @Action
    async UpdateSettings(Set:UserData.settings) {
        let Worked = await ($axios.post('/api/Account/Settings',{
            Theme:Set.Theme,
            Bio:Set.Bio,
        }).catch((err : AxiosError)=> (err.response!)))

        let Updated = !Worked.data.error

        if (!Updated){
            return Worked.data
        }
        await this.UpdateData()

        return Worked.data

    }
    @Action
    async DiscordLogin() {
        let dat = await new Promise(resolve=>{
            if (this.LoggedIn)
                return false;
            let win = window.open(DLoginUrl,'_blank','height=777,width=520,scrollbars=off,location=0,menubar=0,status=0')
            if (!win)
                return false
            window.addEventListener('message',(ev)=>{
                let even = ev as unknown as CustomEvent
                if (!even )
                    return
                let ret = even.detail.ret
                resolve(ret)
                if (win)
                    win.close()
            })
            setTimeout(()=>{
                if (!win)
                    return ''
                if (!win.closed)
                    win.close()
                resolve(7)
            },200e3)
        })
        await this.UpdateData()
        switch (dat) {
            case 11:{
                Message.success('Successfully Logged in as ' + userStore.User.Username)
            } break;
            case 12:{
                Message.error('No Pozm.Pw account is linked with this discord account')
            } break;
            default:{
                Message.error('Something went wrong while Logging in')
            }break;
        }
        return dat
    }

    @Action
    async logout() {
        if (!this.LoggedIn)
            return false;
        await $axios.delete('/api/Account/Session').catch(()=>({}))
        await this.UpdateData()
    }

    @Action({ rawError: true })
    async login(data : UserData.login) : Promise<Api.Response> {

        let Worked = await ($axios.post('/api/Account/Login',{
            Email:data.Username,
            Username:data.Username,
            Password:data.Password,
            Recaptcha:data.Recaptcha
        }).catch((err : AxiosError)=> (err.response!)))
        let LoggedIn = !Worked.data.error

        // ok now we get the user
        if (!LoggedIn)
            return Worked.data;

        await this.UpdateData()

        return Worked.data
    }
    @Action({ rawError: true })
    async singup(data : UserData.signup) : Promise<Api.Response> {

        let Worked = await ($axios.post('/api/Account/Create',{
            Email:data.Email,
            UserName:data.Username,
            Key:data.Key,
            Password:data.Password,
            Recaptcha:data.Recaptcha
        }).catch((err : AxiosError)=> (err.response!)))
        let LoggedIn = !Worked.data.error

        // ok now we get the user
        if (!LoggedIn)
            return Worked.data;

        await this.UpdateData()

        return Worked.data
    }
}
