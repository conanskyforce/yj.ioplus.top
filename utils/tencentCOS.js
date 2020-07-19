const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs')

const secret = require('../config.js')
const cos = new COS({
  SecretId: secret.SecretId,
  SecretKey: secret.SecretKey
});
function promisify(func) {
  return function () {
    let args = Array.prototype.slice.call(arguments)
    return new Promise((resolve, reject) => {
      args.push((err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
      func.apply(this, args)
    })
  }
}
[
  'getService',
  'getObject',
  'getBucket',
  'putObject',
  'putBucket'
].forEach(item => {
  cos[item] = promisify(cos[item])
})

let service
const prefixDir = '/conan-static/static.ioplus.top'

const asyncStart = async (files = []) => {
  try {
    service = await cos.getService();
    const objects = await cos.getBucket({
      Bucket: service.Buckets[0].Name,
      Region: service.Buckets[0].Location
    })
    console.log(`upload files:`)
    console.log(constFiles(files, prefixDir, objects))
    await putObjects(constFiles(files, prefixDir, objects))
  } catch (err) {
    console.log(err)
  }
}

// 过滤已上传文件
const filterUploaded = (file, prefixDir, objects, force) => {
  if (force) return true
  let key = `${prefixDir}/${file.name}`
  return !objects.Contents.some(content => ~key.indexOf(content.Key))
}

// 构造上传文件对象
const constFiles = (files, prefixDir, objects, force) => {
  return files.filter((file) => filterUploaded(file, prefixDir, objects, force)).map(file => ({
    key: `${prefixDir}/${file.name}`,
    path: file.path,
    name: file.name
  }))
}
// 批量上传
async function putObjects(fileList) {
  if (!fileList || !fileList.length) return
  for (let file of fileList) {
    await putObject(file)
  }
}

async function putObject(file) {
  let res = await cos.putObject({
    Bucket: service.Buckets[0].Name,
    Region: service.Buckets[0].Location,
    Key: file.key,
    Body: fs.createReadStream(file.path),
    onProgress: function (progressData) {
      console.log(file.name, JSON.stringify(progressData));
    }
  })
  return res
}
module.exports = {
  asyncStart
}