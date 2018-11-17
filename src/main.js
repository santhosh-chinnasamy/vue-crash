// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Post from './components/Post.vue';
import Contact from './components/Contact.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [{
    path: '/',
    component: Post
  },
  {
    path: '/contact',
    component: Contact
  }
];
Vue.config.productionTip = false;
const router = new VueRouter({
  routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
