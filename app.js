
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html')
    res.setHeader ('James', 'James is awesome')
    res.write('<html>')
    res.write('<head><title>HTTP Server</title><style type="text/css">body { font-family: sans-serif;}a{ text-decoration: none; color:#00bfff;}a:hover{ color: #A0A0A0;}</style></head>')
    res.write('<body>')
    res.write('<h1>Welcome to my Server Page</h1>')
    res.write('<p>You can find all my code for this assignment here: <a href="https://github.com/jamesdesigns/HTTP-Server-JamesHooper" target="_blank">GitHub HTTP Server</a></p>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
  if (req.url === '/api'){
    console.log(req.rawHeaders)
    const jane = {
      book: 'Pride and Prejudice',
      movie: 'Persuasion',
      age: 41,
    }
    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify(jane))
    return res.end()
  }  
})

server.listen(5000)
