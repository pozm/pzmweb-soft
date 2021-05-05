import { Middleware } from '@nuxt/types'
import {getModule} from "vuex-module-decorators";
import UserModule from "~/store/user";

const Guest: Middleware = (context) => {

    let userStore = getModule(UserModule,context.store)

    if (userStore.User?.ID)
        return context.redirect('/')

}

export default Guest
