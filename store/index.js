'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    login: false,
    token: undefined,
    avatarUrl: undefined,
    nickName: undefined,
    openId: undefined,
    id: undefined,
    authorization: undefined
  },
  getters: {
    authorization: state => {
      return state.authorization;
    },
    openId: state => {
      return state.openId;
    },
    card: state => {
      return state.card;
    }
  },
  mutations: {
    loginId(state, data) {
      state.openId = data.openId;
      state.authorization = data.authorization;
    },
    login(state, provider) {
      state.login = true;
      state.token = provider.token;
      state.nickName = provider.nickName;
      state.avatarUrl = provider.avatarUrl;
      state.openId = provider.openId;
    },
    card(state, card) {
      state.card = card;
    }
  },
  actions: {
    loginId({ commit }, data) {
      commit('loginId', data);
    },
    login({ commit }, provider) {
      commit('login', provider);
    }
  }
});

export default store;
