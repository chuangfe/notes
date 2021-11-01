// {n} 代表重複 n 次，例如:[ab]{2} 相當於 [ab][ab]
// {n,m} 代表最少重複 n 次，最多重複 m 次，優先尋找 m 次

console.log("aaa".match(/a{2}/g)); // [ 'aa' ]

console.log("aa".match(/a{2,4}/g)); // [ 'aa' ]

console.log("aaaa".match(/a{2,4}/g)); // [ 'aaaa' ]

console.log("aaaaaa".match(/a{2,4}/g)); // [ 'aaaa', 'aa' ]

console.log("aaaaaaa".match(/a{2,4}/g)); // [ 'aaaa', 'aaa' ]

console.log("regex".match(/regex{0,1}/g)); // [ 'regex' ]

console.log("aaaaa".match(/a{3,}/g)); // [ 'aaaaa' ] 3 ~ 無限

console.log("aaaaa".match(/a{0,}/g)); // [ 'aaaaa', '' ]

console.log("bbbbb".match(/a{0,}/g)); // [ '', '', '', '', '', '' ]
