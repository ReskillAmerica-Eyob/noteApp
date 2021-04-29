
const path = require('path')

let filePath = path.join(__dirname, 'index.js')

let fileExtension = path.extname(filePath)

let basename = path.basename(filePath)

console.log(filePath)
console.log(fileExtension)
console.log(basename)