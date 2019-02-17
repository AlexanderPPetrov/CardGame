import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
  originalCards: [
    {
      id: 0,
      image: 'hat.png',
      title: 'Шапка',
      type: 'hat',
    },
    {
      id: 1,
      image: 'boots.png',
      title: 'Обувки',
      type: 'boots',
    },
    {
      id: 2,
      image: 'scarf.png',
      title: 'Шал',
      type: 'scarf',
    },
    {
      id: 3,
      image: 'sweater.png',
      title: 'Пуловер',
      type: 'sweater',
    },
  ],
  cards: [],
  isLoading: false,
  gameFinished: false,
  matchedCards: [],
  tryCount: 0,
  startTime: new Date().getTime(),
  playTime: new Date().getTime(),
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
