export default {
  getCardById: state => id =>
    state.cards.find(card => card.id === id),
  getOpenedCards: state =>
    state.cards.filter(card => card.isOpened && !card.isMatched),
};
