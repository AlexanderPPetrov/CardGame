<template>
  <div v-on:click="flipCard($event)" class="card-container js-card col-4 col-sm-3 my-3" :class="{ switched: !card.isOpened }">
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


      flipCard(){
        if (this.switching) {
          return false
        }
        this.switching = true;
        var view = this;
        setTimeout(() => {

          const card = Object.assign({}, view.card);
          card.isOpened = !card.isOpened;
          view.$store.commit(mutations.UPDATE_CARD, card);

          if(view.card.isOpened){
            view.$store.commit(mutations.ADD_OPENED_CARD, view.card);
          }


          view.switching = false
        }, cardTransitionTime / 2);

      },
    },
  };
</script>
