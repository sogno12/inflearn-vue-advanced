import Vue from "vue";
import Vuex from "vuex";

import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex); //플러그형태로제공되므로

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
    },
    mutations,
    actions,
});