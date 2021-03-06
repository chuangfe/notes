// git 指令介紹.

/**
 * git branch 分支名稱
 *
 * 介紹: 建立分支, 修改分支.
 *
 * 功能介紹: 強制修改分支的 commit 紀錄, 大概意思就是樹枝修剪, 並且可以接嫁樹枝.
 *
 * 補充: 如果可能盡量多新建分支, 但是要有明確的目的性, 比如說專案分工, 嘗試新寫法, 開發版, 測試版, 上線版, 穩定版 ... 等等.
 *
 * 補充, 更細可化分不同的分支執行不同的任務, 依照元件新增分支.
 *
 * 補充, 剛開起分支, 並不會進入到新的分支, 需使用 checkout 手動切換.
 */

/**
 * 補充, 可以修改分支的路線, 簡單而言就是將分支修改至其他 commit 紀錄點, 注意這些操作都需要一個指向, 指向可以是分支名稱可以是 HEAD 可以是 CommitHash, 大概意思就是樹枝修剪, 並且可以接嫁樹枝.
 *
 * 修改分支或是 CommitHash.
 * git branch -f 分支名稱/CommitHash 分支名稱/CommitHash
 *
 * git branch -f master CommitHash, 代表將 master 移動到指定的 CommitHash 位置, 而 master 舊的 commit 似乎會消失.
 */
