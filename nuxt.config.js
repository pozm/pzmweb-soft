import webpack from "webpack";

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'pozm',
        titleTemplate: (c) => c !== 'pozm' ? c+' - pozm' : 'pozm',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {property:'og:title',content:'Pozm\'s Website', template:(c) => c !== 'Pozm\'s Website' ? c+' - pozm' : 'Pozm\'s Website' },
            {property:'og:description',content:'Pozm\'s extremely cool website.' },
            {property:'og:site_name',content:'Pozm' },
            {name:'theme-color',content:'#c86dec' },
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet',href:'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css', crossOrigin:'anonymous'},
        ],
        script:[
            {async:true, type:'text/javascript', src:'https://unpkg.com/external-svg-loader@latest/svg-loader.min.js'}
        ]
    },
    loading:{
        color:'#c86dec',
        // height:'4px'
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/main.scss',
        '@/assets/Variables.scss'
    ],

    serverMiddleware: {
        '/': '@/server-middleware/'
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui.js',
        // '@/plugins/recaptcha.js',
        '@/plugins/axios-accessor.ts',
        '@/plugins/ctxmenu.js',
        '@/plugins/vuesax.js',
        '@/plugins/simpleScroll.js',
        {src:'@/plugins/vue2editor.js',ssr:false},
    ],
    router: {
        middleware: ['CheckUser']
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // '@nuxtjs/color-mode'
        '@nuxtjs/recaptcha',
        'nuxt-mq'
    ],
    'mq': {
        defaultBreakpoint: 'sm',
        breakpoints: {
            sm: 450,
            md: 1250,
            lg: Infinity,
        }
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.BASE_URL || 'http://localhost:3000'
    },
    publicRuntimeConfig: {
        recaptcha: {
            /* reCAPTCHA options */
            version: 2,     // Version
            dataTheme: "dark",
            siteKey: process.env.RECAPTCHA_SITE_KEY // for example
        },
        axios: {
            browserBaseURL: process.env.BASE_URL || 'http://localhost:3000'
        },
        server: {
            host: '0',
            port: 80 // default: 3000
        }

    },
    env:{
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
        DiscordLink :`https://discord.com/api/oauth2/authorize?client_id=769669036514345002&redirect_uri=${encodeURI(process.env.BASE_URL || 'http://localhost:3000')}%2Fapi%2FAccount%2FlinkDiscord&response_type=code&scope=identify`,
        DiscordLogin:`https://discord.com/api/oauth2/authorize?client_id=769669036514345002&redirect_uri=${encodeURI(process.env.BASE_URL || 'http://localhost:3000')}%2Fapi%2FAccount%2FloginWithDiscord&response_type=code&scope=identify`,
        DiscordJoin :`https://discord.com/api/oauth2/authorize?client_id=769669036514345002&redirect_uri=${encodeURI(process.env.BASE_URL || 'http://localhost:3000')}%2Fapi%2FAccount%2FDiscordJoin&response_type=code&scope=identify%20guilds.join`
    },
    cli: {
        badgeMessages:[
            `Base URL - ${process.env.BASE_URL || 'http://localhost:3000'}`,
        ]
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
            sass: {}
        }
    }
}
