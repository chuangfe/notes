// display 相關 class 功能.

/**
 * 伸縮盒, 可以配合斷點, 斷點效果為在該斷點內才是伸縮盒模型.
 *
 * 伸縮盒模型, 將元素改為 display: flex; 模型.
 * d-{breakpoints}-flex
 * d-inline-flex.
 * d-{breakpoints}-inline-flex.
 */

/**
 * 伸縮盒排列方向.
 * flex-{breakpoints}-{type}.
 * type:
 * flex-row, 預設左到右.
 * flex-row-reverse, 右到左.
 * flex-column, 預設上到下.
 * flex-column-reverse, 下到上.
 */

/**
 * 伸縮盒子元素水平排列方式.
 * justify-content-{breakpoints}-{type}, breakpoints 可有可無.
 * type: start, end, center, between, around, evenly.
 */

/**
 * 伸縮盒子元素垂直排列方式.
 * align-items-{breakpoints}-{type}, breakpoints 可有可無.
 * type: start, end, center, baseline, stretch.
 * stretch: 填滿父元素的高度.
 */

/**
 * 伸縮盒子元素水平排列方式, 這個 class 是設置在伸縮盒的子元素身上.
 * align-self-{breakpoints}-{type}, breakpoints 可有可無.
 * type: start, end, center, baseline, stretch.
 * stretch: 填滿父元素的高度.
 */

/**
 * 伸縮盒子元素垂直排列方式, 待補充.
 * align-content-{breakpoints}-{type}, , breakpoints 可有可無.
 */

/**
 * 伸縮盒子元素寬度依照剩餘的空間平均分配, 有點看不懂, 就當是子元素佔滿剩餘空間就好.
 * flex-{breakpoints}-fill, breakpoints 可有可無.
 */

/**
 * 伸縮盒子元素依照比例分配剩餘空間, 沒有這個 class 的子元素, 寬度為內容寬度.
 * flex-grow-{breakpoints}-{number}, breakpoints 可有可無.
 * number: 範例中只看到 0, 1 兩個.
 */

/**
 * 伸縮盒子元素換行.
 * flex-{breakpoints}-{type}, breakpoints 可有可無.
 * type: nowrap, wrap, wrap-reverse.
 * nowrap: 不換行.
 * wrap: 可以換行.
 * wrap-reverse: 可以換行, 並且反轉排序.
 */

/**
 * 伸縮盒子元素排序.
 * order-{breakpoints}-{number}, breakpoints 可有可無.
 * number: 數字越小排序越前面.
 * number: 也可以寫 first, last.
 * first = -1;
 * last = 6;
 */

/**
 *  當 flex 與 margin 配合使用時, 會有意外的驚喜.
 *
 * 水平排列範例, 垂直排列有可以使用.
 *
 * <div class="d-flex bd-highlight mb-3">
 *   第一個子元素靠左對齊.
 *   <div class="me-auto p-2 bd-highlight">Flex item</div>
 *
 *   其他子元素靠右對齊.
 *   <div class="p-2 bd-highlight">Flex item</div>
 *   <div class="p-2 bd-highlight">Flex item</div>
 * </div>
 *
 * <div class="d-flex bd-highlight mb-3">
 *   其他子元素靠左對齊.
 *   <div class="p-2 bd-highlight">Flex item</div>
 *   <div class="p-2 bd-highlight">Flex item</div>
 *
 *   最後的子元素靠右對齊.
 *   <div class="me-auto p-2 bd-highlight">Flex item</div>
 * </div>
 */

/**
 * 在斷點時隱藏或顯示元素.
 * d-{breakpoints}-{type}, breakpoints 可有可無.
 * type: none, block, inline-block.
 */
