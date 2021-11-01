/**
 * @vue/test-utils 與 jest 的基本使用方式.
 *
 * 請注意, 你需要學習 @vue/test-utils 與 jest 的 api 使用方式.
 * https://vue-test-utils.vuejs.org/zh/
 * https://jestjs.io/zh-Hans/
 */

// 引入 vuex 物件.
import Store from "../../src/store/index";

// 針對 vuex 的 actions 測試.
test("Test store actions SEARCH_MERCHANDISE_ACTIONS", async () => {
  const result = await Store.dispatch("SEARCH_MERCHANDISE_ACTIONS", [
    {
      id: "poke-ball-01",
      category: "ball",
    },
  ]);

  expect(result[0].oldItem).toHaveProperty("id");
});
