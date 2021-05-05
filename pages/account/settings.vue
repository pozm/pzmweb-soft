<template>
    <div id="dashMain" >
        <div class="container" style="display: flex; flex-flow: column" >

            <h2 style="display: flex; align-self: baseline;margin-left:5px">Profile</h2>
            <h3 style="display: flex; align-self: baseline;margin-left:10px">Bio</h3>
            <client-only>

                <vue-editor id="edit" v-model="Bio" useCustomImageHandler @imageAdded="handleupload" />
            </client-only>
            <vs-button @click="save" >
                save
            </vs-button>
        </div>

    </div>
</template>

<script lang="js">
import Vue from 'vue'
import '~/assets/user.scss'
import {userStore} from '~/store'
//

export default Vue.extend({
    data : () => ({h:false,ContentAvil:[],Bio:userStore.User.Bio,Theme:userStore.User.Theme}),

    async fetch() {
        this.ContentAvil =  (await this.$axios.$get('/api/Content'))

    },
    mounted(){
    },
    computed:{
        userStore() {
            return userStore
        }
    },
    middleware:[
        'authenticated'
    ],
    methods:{
        save() {
          userStore.UpdateSettings({
              Bio:this.Bio,
              Theme:this.Theme
          })
        },
        handleupload(l,Editor, cursorLocation, resetUploader) {
            // Editor.insertEmbed(cursorLocation, "image", 'no');
            resetUploader();
        }
    }

})
</script>

<style lang="scss" >
$color-black : #ffffff;

#dashMain {
    flex: 1 80%;
}

.title {
    font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
