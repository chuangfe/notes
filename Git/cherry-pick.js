// cherry-pick 指令使用複製的方式調整 commit 的順序.

/**
 * git cherry-pick 指標
 *
 * 指標: HEAD, HEAD + 倒退步數, 分支名稱, 分支名稱 + 倒退步數, commitHash.
 *
 * 補充, 是將其他 commit 複製到當前的分支.
 */

/**
 * 補充, 實際上有可能出現, 部分的 commit 先上線, 所以如果 commit 與 commit 中間的耦合性太高, 合併分支時容易出現修改前的 code 程式.
 */
