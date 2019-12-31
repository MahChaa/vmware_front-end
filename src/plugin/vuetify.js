import Vue from "vue"
import Vuetify from "vuetify"; //https://vuetifyjs.com/en/getting-started/quick-start

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg'  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    }
});
