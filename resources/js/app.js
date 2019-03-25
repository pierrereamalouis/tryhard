/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**** Register BootstrapVue ****/
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
/* Importing Boostrap Collapse as a Vue plugin */
import BCollapse from 'bootstrap-vue/es/components/collapse/collapse';
Vue.component('b-collapse', BCollapse);

/**** Regitster Vuetify ****/
import Vuetify from 'vuetify';

Vue.use(Vuetify, {
    theme: {
        primary: '#bd9c64',
        secondary: '#6485bd'
    }
});

/* Vuetify css */
import 'vuetify/dist/vuetify.min.css';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component(
    'header-component',
    require('./components/admin/Header.vue').default
);
Vue.component('side-nav', require('./components/admin/SideNav.vue').default);

// Dashboard
Vue.component(
    'league-box',
    require('./components/admin/dashboard/LeagueBox.vue').default
);
Vue.component(
    'pooler-box',
    require('./components/admin/dashboard/PoolerBox.vue').default
);
Vue.component(
    'keepers-box',
    require('./components/admin/dashboard/KeeperBox.vue').default
);

// League
Vue.component(
    'new-league',
    require('./components/admin/league/NewLeague.vue').default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
