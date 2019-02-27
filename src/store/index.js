import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
  cardsData: [
    {
      level: [
        {
          id: 0,
          image: 'hat_02.png',
          title: 'Шапка',
          type: 'hat',
        },
        {
          id: 1,
          image: 'boots_02.png',
          title: 'Ботуш',
          type: 'boots',
        },
      ]
    },
    {
      level: [
        {
          id: 0,
          image: 'hat_02.png',
          title: 'Шапка',
          type: 'hat',
        },
        {
          id: 1,
          image: 'boots_02.png',
          title: 'Ботуш',
          type: 'boots',
        },
        {
          id: 2,
          image: 'scarf_02.png',
          title: 'Шал',
          type: 'scarf',
        },
      ]
    },
    {
      level: [
        {
          id: 0,
          image: 'hat_02.png',
          title: 'Шапка',
          type: 'hat',
        },
        {
          id: 1,
          image: 'boots_02.png',
          title: 'Обувки',
          type: 'boots',
        },
        {
          id: 2,
          image: 'scarf_02.png',
          title: 'Шал',
          type: 'scarf',
        },
        {
          id: 3,
          image: 'jacket_02.png',
          title: 'Яке',
          type: 'sweater',
        },
      ]
    }
  ],
  currentLevel: 0,
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
