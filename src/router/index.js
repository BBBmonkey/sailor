import Vue from 'vue';
import Router from 'vue-router';
import Frame from '../components/Frame';
import Search from '../components/Search';
import Edit from '../components/Edit';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Frame,
      children: [
        { path: 'search', name: 'search', component: Search },
        { path: 'edit', name: 'edit', component: Edit },
      ],
    },
  ],
});
