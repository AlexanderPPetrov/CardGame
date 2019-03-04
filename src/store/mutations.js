import mutations from './mutation-types';
import _ from 'lodash';
export default {
  [mutations.SET_LOADER](state, isLoading) {
    state.isLoading = isLoading;
  },
  [mutations.SET_CARDS](state, cards) {
    const clonedCards = [];
    for (let i = 0; i < cards.length; i++) {
      cards[i].isMatched = false;
      cards[i].isOpened = false;
      const clonedCard = {
        id: cards.length + i,
        image: cards[i].image,
        title: cards[i].title,
        type: cards[i].type,
      };
      clonedCards.push(clonedCard);
    }
    console.log(JSON.stringify(clonedCards));
    const cardsResult = _.shuffle([...clonedCards, ...cards]);
    state.cards = cardsResult;
  },
  [mutations.ADD_MATCHED_CARD](state, card) {
    state.matchedCards.push(card);
  },
  [mutations.UPDATE_CARD](state, card) {
    const index = state.cards.findIndex(x => x.id == card.id);
    state.cards.splice(index, 1, card);
  },
  [mutations.SET_GAME_FINISHED](state, gameFinished) {
    state.gameFinished = gameFinished;
  },
  [mutations.SET_COUNT](state, count) {
    state.tryCount = count;
  },
  [mutations.SET_START_TIME](state, time) {
    state.startTime = time;
  },
  [mutations.SET_PLAY_TIME](state, time) {
    state.playTime = time;
  },
  [mutations.SET_CURRENT_LEVEL](state, level) {
    state.currentLevel = level;
  },
  [mutations.SET_SHOW_CONGRATS](state, isMatched) {
    state.showCongrats = isMatched;
  },
};
