import { createStore } from "vuex";

export default createStore({
  state: {
    // 開啟 light box 後, 回到 picList pag 歷史紀錄長度
    len: 0,
  },
  mutations: {
    LEN_ADD(state) {
      state.len++;
    },
    LEN_RESET(state) {
      state.len = 0;
    },
  },
  actions: {},
  modules: {},
});
