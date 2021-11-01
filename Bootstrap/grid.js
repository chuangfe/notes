// 網格系統.

// row 行, 通常是父元素.
// col 列, 通常是子元素, 一行的列數最高為 12 個.

/**
 * col class 介紹, 通常 col 是 row 的子元素.
 *
 * col-{breakpoint}-{type or number}, breakpoint 可有可無, 若有 breakpoint, 則畫面大於斷點時, 這個 class 才會生效, 沒生效時為 100% 寬度.
 *
 * type: auto, 依照內容的寬度佔據一行.
 * number: 若無設定, 則會依照 col 數量平均 row 的寬度, 但是可能 col 的數量需要是 12 的因數.
 */

/**
 * 快速調整 col 的寬度, 可以不用寫 col 的 number, 應該是用在 col 數量非 12 因數時使用比較適合.
 *
 * 範例中是配合複數子 col, 而其中一個 col 單獨設定列數, 其他則不用設定列數.
 *
 * row-cols-{breakpoint}-{type or number}, breakpoint 可有可無.
 *
 * type: number, auto.
 *
 * 範例
 * <div class="row row-cols-5">
 */
