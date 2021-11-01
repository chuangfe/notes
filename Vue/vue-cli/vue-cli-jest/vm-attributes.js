// @vue/test-utils 的實體的方法.
// attributes, 用於獲取元素的屬性, 如果元素有子元素, 只會獲取最外層元素的屬性.

/**
 * 大概操作方式.
 *
 * MerchandiseItem, 是一個 .vue 檔的 component 元件, 所以 attributes 只會抓根元素的屬性.
 */

const wrapper = shallowMount(MerchandiseItem, {});

wrapper.attributes("id");
