/**
 * HEAD 介紹.
 *
 * HEAD 是一種指標(標記、記號 ...), 可以是指向分支或是指定的 commit 紀錄.
 *
 * 通常而言, 在沒有特別操作 HEAD 時, HEAD 會自動指向當前分支的最新 commit 紀錄, 也就是當前 HEAD 指向分支, 故跟著分支的路線移動.
 */

/**
 * 將 HEAD 移動到指定的 commit 紀錄.
 * 輸入: git checkout CommitHash
 */

/**
 * 通常很難記住 commit hash, 因為其編碼複雜且很常, 可以使用 ^ or ~Number 符號在目前的分支路線中, 移動 HEAD 的位置.
 *
 * ^ 符號代表上一個, 可以輸入多個, 像這樣 master^^^.
 * ~Number 符到代表指定 HEAD 移動到前 Number 個.
 *
 * 輸入: git checkout master, 代表將 HEAD 移動到 master 分支的最新 commit 紀錄.
 * 輸入: git checkout master^, 代表將 HEAD 移動到 master 分支的第二新的 commit 紀錄.
 */
