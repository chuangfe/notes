// revert 會產生新的 commit 紀錄, 這個紀錄是來自指標紀錄的修正.

/**
 * git revert 指標.
 * 指標: HEAD, 分支名稱 + 倒退步數, 其他分支名稱, commitHash.
 *
 * 簡單介紹, commit1 新增檔案, 然後在 commit1 使用 revert 指令, 會出現 commit2 的紀錄, 而 commit2 的紀錄是刪除 commit1 新增的檔案.
 *
 * 補充, 如果 revert 的指標離當前太遠, 可能會產生衝突, 需要解決.
 */
