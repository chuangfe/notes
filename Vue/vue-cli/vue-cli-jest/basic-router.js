/**
 * @vue/test-utils 與 jest 的基本使用方式.
 *
 * 請注意, 你需要學習 @vue/test-utils 與 jest 的 api 使用方式.
 * https://vue-test-utils.vuejs.org/zh/
 * https://jestjs.io/zh-Hans/
 */

/**
 * 引入 @vue/test-utils 針對 jest 提供的方法.
 */
import { mount, shallowMount, createLocalVue } from "@vue/test-utils";

/**
 * 安裝 vue-router.
 */
import VueRouter from "vue-router";

/**
 * 引入需要測試的元件.
 */
import MerchandiseItem from "../../src/components/MerchandiseItem.vue";

/**
 * 如果你需要測試的元件有包含 <router-link>, 這種全局定義而且不是在 vm 實體裡面的類型, 需要這樣操作.
 */
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

/**
 * 基本操作大概如下.
 *
 * MerchandiseItem, 有設定要吃大量的 props 資料, 可以不餵資料, 但是會噴大量的錯誤, 錯誤來自 props 設定的 required 值.
 *
 * expect, 才是主要在測試的項目.
 */
describe("MerchandiseItem.vue", () => {
  it("測試 MerchandiseItem component, 但是我要測試什麼?", () => {
    const data = {
      id: "poke-ball-00",
      // 商品分類英文.
      category: "ball",
      // 商品分類中文.
      categoryName: "精靈球",
      // 商品名稱.
      name: "精靈球",
      // 商品說明.
      text: "是精靈寶可夢世界中隨處可見的一種道具。精靈球的作用是捕捉或者攜帶寶可夢，不同種類的精靈球擁有不同的特殊效果。",
      // 商品圖片.
      imageSrc: "./images/poke-ball-00.png",
      // 圖片屬性.
      alt: "poke-ball-00",
      // 商品庫存.
      remaining: 10,
      // 商品售價.
      originalPrice: 200,
      // 商品特價.
      specialPrice: 0,
      // 跳轉網址.
      merchandiseLink: "/merchandise/ball/poke-ball-00",
    };

    const wrapper = shallowMount(MerchandiseItem, {
      propsData: data,

      // 這兩個是為了處理 <router-link> 的錯誤.
      localVue,
      router,
    });

    // expect, 是 jest 的方法, 接收參數回傳的值.
    // toBe, 是 jest 的方法, 判斷 expect 獲取的值是否跟參數一樣.
    // attributes, 應該是用於獲取 component 根 el 的屬性.
    expect(wrapper.attributes("id")).toBe("merchandise-item");
  });
});
