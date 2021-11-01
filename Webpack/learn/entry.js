// entry 介紹

// 1. string 單入口，單出口
// entry: './src/views/index.js'
// output.filename: "./js/index.bundle.js"

// 2. array 多入口，單出口
// entry: ['./src/views/index.js', './src/views/add.js']
// output.filename: "./js/index.bundle.js"

// 3. object 多入口，多出口
// {
//   index: ['/src/views/index.js', './src/views/add.js'],
//   about: ['/src/views/about.js', './src/views/add.js'],
// }
// 依照 key 輸出結果
// output.filename: "./js/index.bundle.js"
// output.filename: "./js/about.bundle.js"
