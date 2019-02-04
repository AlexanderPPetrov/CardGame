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
  [mutations.ADD_OPENED_CARD](state, card) {
    state.openedCards.push(card);
  },
  [mutations.ADD_MATCHED_CARD](state, card) {
    state.matchedCards.push(card);
  },
  [mutations.UPDATE_CARD](state, card) {
    const index = state.cards.findIndex(x => x.id == card.id);
    state.cards.splice(index, 1, card);
  },
};
