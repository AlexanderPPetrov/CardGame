import Vue from 'vue';
import Router from 'vue-router';
import Game from '../components/game/Game';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      components: {
        default: Game,
      },
    },
  ],
});
