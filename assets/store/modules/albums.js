import Vue from 'vue';
import api from '../../services/api';

export default {
    //
    getters: {
        albums: state => state.albums.list.data,
    },
    state: () => ({
        albums: {},
    }),

    actions: {
        get({ commit }) {
            api.albums.get()
                .then((response) => {
                    const { data: value } = response
                    const key = 'list'
                    commit('set', { key, value });
                })
        },

        clear({ commit }, { key }) {
            commit('clear', { key });
        },
    },

    mutations: {
        set(state, { key, value }) {
            console.log(key, value)
            Vue.set(state.albums, key, value);
        },

        clear(state, { key }) {
            Vue.delete(state.nothing, key);
        },
    },
};
