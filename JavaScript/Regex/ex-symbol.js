// ^ 代表開頭字串才符合，通常使用在第一個位置，例如:/^cat/

// $ 代表結尾字串才符合，通常使用在最後一個位置，例如:/cat$/

// * 代表零個或多個才符合，相當於 {0, } 縮寫

// + 代表一個或多個才符合，相當於 {1, } 縮寫，可以排除空字元

// ? 代表零個或一個才符合，相當於 {0, 1} 縮寫
// {1, 4}? 代表優先尋找重複 1 次的，{1, 4} 可以換成任何符號，例如:{0,} * +

// . 代表通配符，若多個目標字串中只有少部分字元不同，可以用該符號取代
//// 一個字元不同則使用 . 符號，兩個字元不同則使用 .. 符號

// | 代表選擇符號，例如:/cat|cdt/ 可以搜索到 cat cdt
//// 與 [] 不同的在於，[] 符號只能針對目標字串中一個字元，| 符號可以針對目標字串中多個字元
//// /a|b|c/ 相當於 [abc]

console.log("abcdef".match(/.*/g)); // [ 'abcdef', '' ]

console.log("abcdef".match(/.+/g)); // [ 'abcdef' ]

console.log("abcdef".match(/.?/g)); // [ 'a', 'b', 'c', 'd', 'e', 'f', '' ]
console.log("qwer".match(/\w?/g)); // [ 'q', 'w', 'e', 'r', '' ]
console.log("qwer".match(/\w{1,12}?/g)); // [ 'q', 'w', 'e', 'r' ]
console.log("qwer".match(/.*?/g)); // [ '', '', '', '', '' ]
console.log("(qwer)(qwerasdf)".match(/\(\w+?\)/)); // ['(qwer)']

console.log("abcazcafc".match(/a.c/g)); // [ 'abc', 'azc', 'afc' ]
