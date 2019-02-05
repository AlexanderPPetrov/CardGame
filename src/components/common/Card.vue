<template>
  <div v-on:click="flipCard($event)" class="card-container js-card col-4 col-sm-3 my-3"
       :class="{ switched: !card.isOpened }">
    <div class="card-wrapper">
      <div class="card-side d-flex align-items-center justify-content-center" :class="{ active: card.isOpened }">
        <img :src="getCardFront" class="img-fluid"/>
        <img :src="getImage" class="card-image"/>
      </div>
      <div class="card-side card-side-back" :class="{ active: !card.isOpened }">
        <img :src="getCardBack" class="img-fluid"/>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */

  import mutations from '../../store/mutation-types';
  import getters from '../../store/getters';
  const cardTransitionTime = 500;
  export default {
    name: 'mt-card',
    props: {
      card: Object,
    },
    computed: {
      getCardFront() {
        const image = '/static/images/card_front.png';
        return image;
      },
      getImage() {
        const image = '/static/images/' + this.card.image;
        return image;
      },
      getCardBack() {
        const image = '/static/images/card_back.png';
        return image;
      },
    },
    data() {
      return {
        switching: false,
      };
    },
    methods: {


      closeOpenedCards(){
        const view = this;
        setTimeout(() => {

          const openedCards = getters.getOpenedCards(view.$store.state);
          for (let i = 0; i < openedCards.length; i++) {
            view.toggleOpenedCard(openedCards[i])
          }
        }, cardTransitionTime * 2);

      },

      toggleOpenedCard(card){
        const newCard = Object.assign({}, card);
        newCard.isOpened = !card.isOpened;
        this.$store.commit(mutations.UPDATE_CARD, newCard);
      },

      canOpenMore(){
        const openedCards = getters.getOpenedCards(this.$store.state);
        if (openedCards.length == 2) {
          return false;
        }
        return true;
      },
      setMatchedCards(){
        const openedCards = getters.getOpenedCards(this.$store.state);
        for (let i = 0; i < openedCards.length; i++) {
          this.markCardAsMatched(openedCards[i]);
        }
      },

      markCardAsMatched(card){
        const newCard = Object.assign({}, card);
        newCard.isMatched = true;
        this.$store.commit(mutations.UPDATE_CARD, newCard);
      },

      flipCard(){
        if (this.switching) {
          return false
        }

        const view = this;
        const canOpenMore = this.canOpenMore();
        console.log(canOpenMore)
        if (!canOpenMore || this.card.isMatched) {
          return;
        }

        this.switching = true;
        setTimeout(() => {

          view.toggleOpenedCard(this.card);
          const openedCards = getters.getOpenedCards(view.$store.state);
          console.log(openedCards.length)
          if (openedCards.length == 2) {
            if (openedCards[0].type == openedCards[1].type) {
              console.log('matching')
              view.setMatchedCards();
            } else {
              console.log('not matching')
              view.closeOpenedCards();
            }
          }

          view.switching = false
        }, cardTransitionTime / 2);

      },
    },
  };
</script>
