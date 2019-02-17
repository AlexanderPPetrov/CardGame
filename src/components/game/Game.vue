<template>
  <div class="container h-100 align-items-center justify-content-center d-flex">
    <div class="row">
      <mt-card v-if="cardResults.length"
               v-for="(card) in cardResults"
               :key="card.id"
               :card="card"
      ></mt-card>
    </div>
    <b-modal id="modalGameEnd"
             ref="modal"
             @ok="newGame"
             v-model="gameFinished"
             no-close-on-esc
             no-close-on-backdrop
             centered
             cancel=false
             size="lg"
             ok-variant="info btn-lg"
             ok-only
             hide-header-close
    >
      <div class="d-flex justify-content-between">
        <div class="w-50 d-flex align-items-center flex-column">
          <div class="result result-count">{{getTryCount}}</div>
          <div class="result-label">Брой опити</div>
        </div>
        <div class="w-50 d-flex align-items-center flex-column">
          <div class="result result-time">{{ getPlayTime | moment("utc") |  moment("HH:mm:ss") }}</div>
          <div class="result-label">Време</div>
        </div>
      </div>
      <span slot="modal-ok" class="d-flex align-items-center">
          <i class="fa fa-play-circle btn-icon mr-3"></i>
          <span>НОВА ИГРА</span>
      </span>
    </b-modal>
  </div>

</template>

<script>
  import MtCard from '../common/Card';
  import mutations from '../../store/mutation-types';

  export default {
    created(){
      this.$store.commit(mutations.SET_CARDS, this.$store.state.originalCards);

    },
    computed: {
      cardResults() {
        return this.$store.state.cards;
      },
      gameFinished(){
        return this.$store.state.gameFinished;
      },
      getTryCount(){
        return this.$store.state.tryCount;
      },
      getPlayTime(){
        return this.$store.state.playTime;
      }
    },
    methods: {
      newGame(){
        this.$store.commit(mutations.SET_GAME_FINISHED, false);
        setTimeout(() => {
          this.$store.commit(mutations.SET_CARDS, this.$store.state.originalCards);
          this.$store.commit(mutations.SET_COUNT, 0);
          this.$store.commit(mutations.SET_PLAY_TIME, new Date().getTime());
        }, 250)

      }
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
