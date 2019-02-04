<template>
  <div class="container h-100 align-items-center justify-content-center d-flex">
    <div class="row">
      <mt-card v-if="cardResults.length"
               v-for="(card) in cardResults"
               :key="card.id"
               :card="card"
      ></mt-card>
    </div>
  </div>
</template>

<script>
  import MtCard from '../common/Card';
  import mutations from '../../store/mutation-types';

  export default {
    created(){
      this.$store.commit(mutations.SET_CARDS, this.$store.state.cards);

    },
    computed: {
      cardResults() {
        return this.$store.state.cards;
      },
    },
    components: {
      MtCard,
    },
  };
</script>
<style lang="scss">
  label {
    color: #7e7e7e;
  }
</style>
