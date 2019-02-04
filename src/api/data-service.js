import networkClient from './network-client';

export default {
  getCards(params, success, failure) {
    networkClient.get('trending/movie/day', success, failure, params);
  },
};
