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
                    image: 'pets_v/sheep2.png',
                    title: 'Овца',
                    type: 'hat',
                },
                {
                    id: 1,
                    image: 'pets_v/cow.png',
                    title: 'Крава',
                    type: 'boots',
                },
            ]
        },
        {
            level: [
                {
                    id: 0,
                    image: 'pets_v/sheep2.png',
                    title: 'Овца',
                    type: 'hat',
                },
                {
                    id: 1,
                    image: 'pets_v/cow.png',
                    title: 'Крава',
                    type: 'boots',
                },
                {
                    id: 2,
                    image: 'pets_v/donkey2.png',
                    title: 'Магаре',
                    type: 'gloves',
                },
            ]
        },
        {
            level: [
                {
                    id: 0,
                    image: 'pets_v/sheep2.png',
                    title: 'Овца',
                    type: 'hat',
                },
                {
                    id: 1,
                    image: 'pets_v/cow.png',
                    title: 'Крава',
                    type: 'boots',
                },
                {
                    id: 2,
                    image: 'pets_v/donkey2.png',
                    title: 'Магаре',
                    type: 'gloves',
                },
                {
                    id: 3,
                    image: 'pets_v/hen.png',
                    title: 'Кокошка',
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
    showCongrats: false
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;
