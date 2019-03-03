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
          image: 'hat.png',
          title: 'Шапка',
          type: 'hat',
        },
        {
          id: 1,
          image: 'boots.png',
          title: 'Ботуши',
          type: 'boots',
        },
      ]
    },
    {
      level: [
        {
          id: 0,
          image: 'hat.png',
          title: 'Шапка',
          type: 'hat',
        },
        {
          id: 1,
          image: 'boots.png',
          title: 'Ботуши',
          type: 'boots',
        },
        {
          id: 2,
          image: 'gloves.png',
          title: 'Ръкавици',
          type: 'gloves',
        },
      ]
    },
    {
      level: [
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
          image: 'gloves.png',
          title: 'Ръкавици',
          type: 'gloves',
        },
        {
          id: 3,
          image: 'sweater.png',
          title: 'Пуловер',
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
