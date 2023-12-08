const express = require('express');
const app = express();

const uuid = require('uuid');

let port = 3000;

// html data

app.get('/html', (req, res) => {
  let htmlContent = `<!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
        <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
        <p> - Martin Fowler</p>
  
    </body>
  </html>`;

  res.send(htmlContent);
});

// json data
app.get('/json', (req, res) => {
  let jsonData = {
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

  res.json(jsonData);
});

// uuid.v4

app.get('/uuid', (req, res) => {
  let uuidData = uuid.v4();
  let obj = { uuidData };
  res.json(obj);
});

// status/{status-code}

app.get('/status/:code', (req, res) => {
  let code = req.params.code;
  res.status(code).send(`a response with code ${code}`);
});

// delay/{in-seconds}

app.get('/delay/:seconds', (req, res) => {
  let milli = req.params.seconds;
  setTimeout(() => res.end('200'), parseInt(milli) * 1000);
});

// user specified error handler kind of..

app.all('*', (req, res) => {
  res.status(404).send(req.url + ' not found!!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
