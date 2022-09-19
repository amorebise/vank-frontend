export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vank wallet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vankwallet.com' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/dark_vank.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" },
      // { rel: "stylesheet", href="https://fonts.googleapis.com" },
      // { rel: "stylesheet", href="https://fonts.gstatic.com" },
      // { href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap", rel: "stylesheet" },
    ],
    script: [


      {
        src: "https://code.jquery.com/jquery-3.6.0.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js",
        type: "text/javascript"
      },

      {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/typed.js@2.0.12",
        type: "text/javascript"
      },
      {
        src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
        type: "module"
      },
      {
        src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
        type: "nomodule"
      },



      // {
      //   scr: "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js",
      //   type: "text/javascript"
      // },
      // {
      //   scr: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js",
      //   type: "text/javascript"
      // },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./css/style.css'],
  // ssr: false,
  // loadingIndicator: {
  //   name: 'folding-cube',
  //   color: '#0d153a',
  //   background: '#00e8fe'
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate.js",
    {

      src: "~/plugins/aos.js",
      ssr: false
    },
    {

      src: "~/plugins/vue-notification.js",
      ssr: false
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/ngrok',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxt/image',
    "vue-toastification/nuxt",
    '@nuxtjs/axios',




    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://api.vankwallet.com/api",
    // proxy: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Credentials': 'true'
    }
  },
  // proxy: {
  //   // '/api/': 'https://api.vankwallet.com',
  //   '/api/': {
  //     target: 'api.vankwallet.com/', pathRewrite: { '^/api/': '' }, changeOrigin: false,
  //     prependPath: false
  //   }

  //   // '/api2/': 'http://api.another-website.com'
  // },
  auth: {
    strategies: {
      local: {
        token: {
          propertyName: 'data.token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        localStorage: true,
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/getUser', method: 'get' }
        }
      }
    }
  },
  // ngrok: {
  //   // module options
  //   addr: 8080 // port or network address, defaults to 80
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  }
}
