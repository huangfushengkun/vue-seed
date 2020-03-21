/*
 * Vuex
 * */
import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

let state={
    id:"1"
}

let getters={
    getId:state=>state.id
}
// let mutations = {

// }
// let actions = {

// }

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules:{

    }
}) 