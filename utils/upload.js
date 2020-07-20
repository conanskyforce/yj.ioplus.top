const fs = require('fs')
const path = require('path')
const COS = require('./tencentCOS')
const destPath = './dist/assets/images'
let files = 
  fs.readdirSync(destPath)
  .filter(file=>file)
  .map(file=>({
    name: file,
    path: path.resolve(process.cwd(),destPath,file)
  }))

COS.asyncStart(files)