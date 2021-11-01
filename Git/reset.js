// reset 會將 commit 紀錄倒退, 相當於將最新的 commit 紀錄刪除.

/**
 * git reset 指標.
 * 指標: HEAD, 分支名稱 + 倒退步數, 其他分支名稱, commitHash.
 *
 * 補充, 如果是多人合作的 git 專案, 不推薦在多人使用的分支上使用 reset 指令.
 * 補充, 沒有在分支內的 commit 需要先將 HEAD 移動過去, 才能將分支移動過去.
 */

/**
 * reset 有三種狀態.
 *
 * soft, 退回 commit 紀錄後, 會將被退回的紀錄放在 staged 裡面.
 *
 * mixed, 退回 commit 紀錄後, 會將被退回的紀錄放在衝突裡面.
 *
 * hard, 不保留任何被退回的紀錄.
 */
