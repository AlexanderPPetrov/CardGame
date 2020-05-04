<template>
    <div v-on:click="flipCard($event)" class="card-container js-card my-1 mx-1"
         :class="{ switched: !card.isOpened }">
        <div class="card-wrapper">
            <div class="card-side d-flex align-items-center justify-content-center"
                 :class="{ active: card.isOpened, matched: card.isMatched, heartbeat: card.isMatched }">
                <img :src="getCardFront" class="vh-image"/>
                <img :src="getDisabledOverlay" class="card-image vh-image card-disabled-overlay"/>
                <img :src="getImage" class="card-image vh-image card-asset"/>
                <span class="card-title" v-if="displayCardTitle">{{card.title}}</span>
                <img :src="getStar" v-if="card.isMatched" class="star-image rotateScaleUp"
                     :class="{puffOutCenter: card.starOut}"/>
            </div>
            <div class="card-side card-side-back d-flex align-items-center justify-content-center"
                 :class="{ active: !card.isOpened }">
                <img :src="getCardBack" class="vh-image"/>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */

    import mutations from '../../store/mutation-types';
    import getters from '../../store/getters';

    const cardTransitionTime = 500;
    const openCardSound = '/static/media/select.mp3';
    const closeCardSound = '/static/media/move.mp3';
    const notMatchingCardSound = '/static/media/notmatching.mp3';
    const matchCardSound = '/static/media/matching.mp3';
    const levelSound = '/static/media/level.mp3';

    export default {
        name: 'mt-card',
        props: {
            card: Object,
            displayCardTitle: Boolean
        },
        computed: {
            getCardFront() {
                const image = '/static/img/card_front_animals.png';
                return image;
            },
            getImage() {
                const image = '/static/img/' + this.card.image;
                return image;
            },
            getCardBack() {
                const image = '/static/img/card_back_animals.png';
                return image;
            },
            getDisabledOverlay() {
                const image = '/static/img/card_disabled_overlay.png';
                return image;
            },
            getStar() {
                const image = '/static/img/star.png';
                return image;
            },
        },
        data() {
            return {
                switching: false
            };
        },
        methods: {

            closeOpenedCards() {
                setTimeout(() => {

                    const openedCards = getters.getOpenedCards(this.$store.state);
                    for (let i = 0; i < openedCards.length; i++) {
                        this.toggleOpenedCard(openedCards[i])
                    }
//          this.playSound(notMatchingCardSound);
                }, cardTransitionTime * 2);

            },

            toggleOpenedCard(card) {
                const newCard = Object.assign({}, card);
                newCard.isOpened = !card.isOpened;
                this.$store.commit(mutations.UPDATE_CARD, newCard);
                if (newCard.isOpened) {
                    this.playSound(openCardSound)
                } else {
                    this.playSound(closeCardSound)
                }
            },

            canOpenMore() {
                const openedCards = getters.getOpenedCards(this.$store.state);
                if (openedCards.length == 2) {
                    return false;
                }
                return true;
            },
            setMatchedCards() {
                const openedCards = getters.getOpenedCards(this.$store.state);
                for (let i = 0; i < openedCards.length; i++) {
                    this.markCardAsMatched(openedCards[i]);
                }
                setTimeout(() => {
                    this.playSound(matchCardSound);
                }, cardTransitionTime / 2);

                this.checkGameFinished();
            },

            checkGameFinished() {
                const matchedCards = getters.getMatchedCards(this.$store.state);
                if (matchedCards.length == this.$store.state.cards.length) {
                    setTimeout(() => {
                        this.playSound(levelSound);
                        this.$store.commit(mutations.SET_SHOW_CONGRATS, true);
                    }, 2000);
                    setTimeout(() => {
                        this.$store.commit(mutations.SET_GAME_FINISHED, true);
                        this.$store.commit(mutations.SET_SHOW_CONGRATS, false);
                        this.$store.commit(mutations.SET_PLAY_TIME, (new Date().getTime() - this.$store.state.startTime) / 1000);
                    }, 6000);

                }
            },

            playSound(sound) {
                if (sound) {
                    var audio = new Audio(sound);
                    audio.play();
                }
            },
            markCardAsMatched(card) {
                const newCard = Object.assign({}, card);
                newCard.isMatched = true;
                this.$store.commit(mutations.UPDATE_CARD, newCard);
                setTimeout(() => {
                    newCard.starOut = true;
                    this.$store.commit(mutations.UPDATE_CARD, newCard);
                }, 2000);
            },

            flipCard() {
                if (this.switching) {
                    return false
                }

                const canOpenMore = this.canOpenMore();

                if (!canOpenMore || this.card.isMatched) {
                    return;
                }

                this.switching = true;
                // setTimeout(() => {

                    this.toggleOpenedCard(this.card);
                    const openedCards = getters.getOpenedCards(this.$store.state);
                    if (openedCards.length == 2) {
                        if (openedCards[0].type == openedCards[1].type) {
                            // Cards matching
                            this.setMatchedCards();
                        } else {
                            // Cards not matching
                            this.closeOpenedCards();
                        }
                        this.$store.commit(mutations.SET_COUNT, this.$store.state.tryCount + 1);
                    }

                    this.switching = false
                // }, cardTransitionTime / 2);

            },
        },
    };
</script>
