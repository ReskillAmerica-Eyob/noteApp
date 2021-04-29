const path = require('path')
const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {

  if(req.url === '/'){
    let filePath = path.join(__dirname, 'public', 'index.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(data)
    })
  }
})

const port = 5000

server.listen(port, () => {
  console.log(`port is running on port ${port}`)
})