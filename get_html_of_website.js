const https = require('https')
var fs= require('fs')
// const options = {
//   hostname: 'en.wikipedia.org',
//   port: 443,
//   path: '/wiki/Nodejs',
//   method: 'GET'
// }

const options = {
  hostname: 'blog.nihalcybersecurity.com',
  path: '/1.html',
  method: 'GET'
}

const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

  res.on('data',function(chunk) {
  //   fs.appendFile('Nodejs.html',chunk,function(err){
  //       if(err){
  //           console.log(err)
  //       }
  //   })
  // }
  console.log(chunk)}
  )
})

req.on('error', error => {
  console.error(error)
})

req.end()