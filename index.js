const http = require('http');
const uuid = require('uuid');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/html') {
    res.setHeader('Content-Type', 'text/html');
    const content = `
        <!DOCTYPE html>
        <html>
          <head>
          </head>
          <body>
              <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
              <p> - Martin Fowler</p>
        
          </body>
        </html>
        `;

    res.end(content);
  } else if (req.method === 'GET' && req.url === '/json') {
    res.setHeader('Content-Type', 'json');
    const jsonData = {
      slideshow: {
        author: 'Yours Truly',
        date: 'date of publication',
        slides: [
          {
            title: 'Wake up to WonderWidgets!',
            type: 'all',
          },
          {
            items: [
              'Why <em>WonderWidgets</em> are great',
              'Who <em>buys</em> WonderWidgets',
            ],
            title: 'Overview',
            type: 'all',
          },
        ],
        title: 'Sample Slide Show',
      },
    };

    res.end(JSON.stringify(jsonData));
  } else if (req.method === 'GET' && req.url === '/uuid') {
    let uuidData = uuid.v4();
    const jsonObject = {
      uuidData,
    };
    res.end(JSON.stringify(jsonObject));
  } else if (req.method === 'GET' && req.url.startsWith('/status/')) {
    let url = req.url.split('/');
    let code = url.pop();

    res.statusCode = code;

    res.end(`a response with ${code}`);
  } else if (req.method === 'GET' && req.url.startsWith('/delay/')) {
    let url = req.url.split('/');
    let seconds = url.pop();

    setTimeout(() => {
      res.end('200');
    }, seconds * 1000);
  } else {
    res.statusCode = 404;
    res.end('Not Found!!');
  }
});

let portNumber = 8080;

server.listen(portNumber, () =>
  console.log(`Listening on ${portNumber}`)
);
