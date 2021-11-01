// @vue/test-utils 的建構函式.
// 用於獲取自訂元件.

import { createLocalVue, shallowMount } from "@vue/test-utils";
import MyPlugin from "my-plugin";
import Foo from "./Foo.vue";

/**
 * 官方網站範例.
 */
const localVue = createLocalVue();
// 註冊元件.
localVue.use(MyPlugin);

// @vue/test-utils 建構函式的實體.
const wrapper = shallowMount(Foo, {
  // 在這裡將自訂元件插入 test 物件內.
  localVue,
  mocks: { foo: true },
});

// 待補充.
expect(wrapper.vm.foo).toBe(true);

// 待補充.
const freshWrapper = shallowMount(Foo);
expect(freshWrapper.vm.foo).toBe(false);
