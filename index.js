const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./routes/api'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
