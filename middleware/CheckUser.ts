import { Middleware } from '@nuxt/types'
import {getModule} from "vuex-module-decorators";
import UserModule from "~/store/user";

const Auth: Middleware = async (context) => {

    let userStore = getModule(UserModule,context.store)
    if (!userStore.LoggedIn){
        await userStore.UpdateData()
    }

}

export default Auth
