
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html')
    res.setHeader ('James', 'James is awesome')
    res.write('<html>')
    res.write('<head><title>HTTP Server</title><style type="text/css">body { font-family: sans-serif;}a{ text-decoration: none; color:#00bfff;}a:hover{ color: #A0A0A0;}h1, p{text-align:center;</style></head>')
    res.write('<body>')
    res.write('<h1>Welcome to my new HTTP Server Page</h1>')
    res.write('<p>You can find all my code for this assignment here: <a href="https://github.com/jamesdesigns/HTTP-Server-JamesHooper" target="_blank">GitHub</a></p>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
 
  if (req.url === '/api'){
    console.log(req.rawHeaders)
    const audi = {
      model: 'R8 Spyder',
      year: '2018',
      listPrice: 177100,
      engine: 'V10'
    }
    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify(audi))
    return res.end()
  }  
})

server.listen(5000)
