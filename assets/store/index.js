import Vue from 'vue';
import Vuex from 'vuex';

import noop from '@/store/modules/noop';
import albums from '@/store/modules/albums'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        albums,
        //noop,
    },
    // strict: debug,
});
