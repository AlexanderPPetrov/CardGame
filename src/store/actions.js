import mutations from './mutation-types';
import actions from './action-types';
import dataService from '../api/data-service';

export default {
  [actions.GET_CARDS]({commit}, page) {
    commit(mutations.SET_LOADER, true);
    dataService.getTrendingMovies(
      page,
      (responseCards) => {
        commit(mutations.SET_CARDS, responseCards);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
};
