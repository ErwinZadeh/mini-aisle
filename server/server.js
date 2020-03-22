const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/item.router.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/item', itemsRouter);


// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
