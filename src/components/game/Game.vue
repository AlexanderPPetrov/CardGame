<template>
    <div class="h-100 game-content d-flex align-items-center" :class="{ fadeIn: isLoaded }">
        <div class="align-items-center justify-content-center d-flex main-container flex-column">
            <div v-if="cardResults.length" class="row align-items-center justify-content-center">
                <mt-card v-for="(card) in cardResultsFirst"
                         :key="card.id"
                         :card="card"
                         :displayCardTitle="displayCardTitle"
                ></mt-card>
            </div>
            <div v-if="cardResults.length" class="row align-items-center justify-content-center">
                <mt-card v-for="(card) in cardResultsSecond"
                         :key="card.id"
                         :card="card"
                         :displayCardTitle="displayCardTitle"
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
                <div class="h-100 d-flex justify-content-center flex-column">
                    <div class="result-header">Твоят резултат</div>
                    <div class="d-flex w-100 my-5">
                        <div
                            class="stats-container align-items-center justify-content-center text-center d-flex flex-column">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-star icon-star result-icon mr-3"></i>
                                <span class="result">
                {{getTryCount}}
              </span>
                            </div>
                            <div class="result-label">Опити</div>
                        </div>
                        <div
                            class="stats-container align-items-center justify-content-center text-center d-flex flex-column">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-stopwatch icon-clock result-icon mr-3"></i>
                                <span class="result">
                {{ getPlayTime | moment("utc") |  moment("HH:mm:ss") }}
              </span>
                            </div>
                            <div class="result-label">Време</div>
                        </div>
                        <div
                            class="stats-container align-items-center justify-content-center text-center d-flex flex-column">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-gamepad icon-level result-icon mr-3"></i>
                                <span class="result">
                {{ getCurrentLevel }}
              </span>
                            </div>
                            <div class="result-label">Трудност</div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <b-button v-on:click="newGame" variant="info" size="lg" class="d-flex align-items-center">
                            <i class="fa fa-play-circle btn-icon  mr-3"></i>
                            <span>НОВА ИГРА</span>
                        </b-button>
                    </div>
                </div>
                <div slot="modal-footer"></div>
            </b-modal>
        </div>
        <div v-if="showCongrats">
<!--            <div class="pyro pyro-1">-->
<!--                <div class="before"></div>-->
<!--                <div class="after"></div>-->
<!--            </div>-->
<!--            <div class="pyro pyro-2">-->
<!--                <div class="before"></div>-->
<!--                <div class="after"></div>-->
<!--            </div>-->
            <div class="congrats-container d-flex justify-content-center align-items-center flex-column">
                <img :src="getBravo" class="bravo-image heartbeat"/>
            </div>
        </div>

    </div>
</template>

<script>
    import MtCard from '../common/Card';
    import mutations from '../../store/mutation-types';

    export default {
        data() {
            return {
                isLoaded: false,
                displayCardTitle: false
            }
        },
        created() {

            setTimeout(() => {
                this.isLoaded = true;
                this.startGame();
            }, 1000);
        },
        computed: {
            cardResults() {
                return this.$store.state.cards;
            },
            cardResultsFirst() {
                return this.$store.state.cards.slice(0, this.$store.state.cards.length / 2);
            },
            cardResultsSecond() {
                return this.$store.state.cards.slice(this.$store.state.cards.length / 2, this.$store.state.cards.length);
            },
            gameFinished() {
                return this.$store.state.gameFinished;
            },
            getTryCount() {
                return this.$store.state.tryCount;
            },
            getPlayTime() {
                return this.$store.state.playTime;
            },
            getCurrentLevel() {
                return this.$store.state.currentLevel + 1;
            },
            getBravo() {
                const image = '/static/img/bravo.png';
                return image;
            },
            showCongrats() {
                return this.$store.state.showCongrats;
            }
        },

        methods: {
            startGame() {
                this.displayCardTitle = false;
                this.$store.commit(mutations.SET_START_TIME, new Date().getTime());
                this.$store.commit(mutations.SET_COUNT, 0);
                const currentLevel = this.$store.state.currentLevel;
                const cards = this.$store.state.cardsData[currentLevel].level;
                this.$store.commit(mutations.SET_CARDS, cards);
                setTimeout(()=>{
                    this.displayCardTitle = true;
                }, 1000)
            },
            newGame() {
                this.$store.commit(mutations.SET_GAME_FINISHED, false);
                setTimeout(() => {
                    let nextLevel = this.$store.state.currentLevel + 1;
                    if (nextLevel >= this.$store.state.cardsData.length - 1) {
                        nextLevel = this.$store.state.cardsData.length - 1;
                    }
                    this.$store.commit(mutations.SET_CURRENT_LEVEL, nextLevel);
                    this.startGame();
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
