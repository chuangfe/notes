/**
 * 如何在 vue-cli 中使用 jest 單元測試.
 */

/**
 * 如果在 vue cli 建立專案時已經選取 jest 則可以跳過.
 */

/**
 * 1. 輸入指令, vue add @vue/unit-jest, 這是最安全的作法.
 *
 
 */

/**
 * 2. 自己下載 npm plugin, 並且還要補充設定檔, 可能會失敗.
 * "@vue/cli-plugin-unit-jest": "^4.5.13"
 * "@vue/test-utils": "^1.0.3"
 *
 * npm script 腳本.
 * "test:unit": "vue-cli-service test:unit"
 * 
 * jest.config.js 設定檔.
 * module.exports = {
  preset: '@vue/cli-plugin-unit-jest'
}
 */
