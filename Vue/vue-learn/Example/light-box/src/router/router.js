import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PicList from "../views/PicList.vue";
import Pic from "../views/Pic.vue";
import Store from "../store/store";

/*eslint-disable*/

const components = {
  home: {
    default: Home,
  },
  picList: {
    default: PicList,
  },
  // 開啟 light box
  picLightBoxOpen: {
    default: PicList,
    LightBox: Pic,
  },
  // 關閉 light box
  picLightBoxClose: {
    default: Pic,
  },
};

const routes = [
  {
    path: "/",
    name: "Home",
    components: components.home,
    meta: {
      type: "home",
    },
  },
  {
    path: "/pic",
    name: "PicList",
    components: components.picList,
    meta: {
      type: "picList",
    },
  },
  {
    path: "/pic/:id",
    name: "Pic",
    components: components.picLightBoxClose,
    meta: {
      type: "pic",
      onOff: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // 如果你要前往 pic page
  if (to.meta.type === "pic") {
    // 如果你來自 picList page
    if (from.meta.type === "picList") {
      // 打開 Light Box, 並修改 components
      to.matched[0].components = components.picLightBoxOpen;
      to.meta.onOff = true;
      // 保存歷史紀錄
      Store.commit("LEN_ADD");
    }
    // 如果你來自 pic page, 並且已經打開 Light Box, 請你繼續開著 Light Box
    else if (from.meta.type === "pic" && from.meta.onOff) {
      to.matched[0].components = components.picLightBoxOpen;
      to.meta.onOff = true;
      // 保存歷史紀錄
      Store.commit("LEN_ADD");
    }
    // 如果你不是來自 picList page, 之前也沒有打開 Light Box, 請你繼續關著 Light Box
    else {
      to.matched[0].components = components.picLightBoxClose;
      to.meta.onOff = false;
      // 刪除歷史紀錄
      Store.commit("LEN_RESET");
    }
  }
  // 如果你不是要前往 pic page, 請按照預設顯示畫面
  else {
    to.matched[0].components = components[to.meta.type];
    to.meta.onOff = false;
    // 刪除歷史紀錄
    Store.commit("LEN_RESET");
  }

  next();
});

export default router;
