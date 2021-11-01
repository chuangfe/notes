// @vue/test-utils 的建構函式.
// 已知是用來包覆 .vue 檔的 component 元件.
// 目前查到的說明為, 測試時不會繪製子元件, 速度比較快.

import { shallowMount } from "@vue/test-utils";

shallowMount(component, {
  // 可選參數.
});
