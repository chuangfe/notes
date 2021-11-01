// @vue/test-utils 的建構函式.
// 已知是用來包覆 .vue 檔的 component 元件.
// 目前查到的說明為, 測試時會繪製所有子元件.

import { mount } from "@vue/test-utils";

mount(component, {
  // 可選參數.
});
