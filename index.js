const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
const cors = require('cors');
const app = express();

app.use(cors());
var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./routes/api'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
