const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/item.router.js');
const myListRouter = require('./routes/myList.router.js');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/item', itemsRouter);
app.use('/myList', myListRouter);



// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
