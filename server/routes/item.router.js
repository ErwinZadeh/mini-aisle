const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all items
router.get('/', (req, res) => {
  let queryText = 
  'SELECT "id", "item_name", "amount", "amount_id", "category_id", "store_id" FROM "item" ORDER BY "store_id";';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting items', error);
    res.sendStatus(500);
  });
});

// Adds a new item to the list of items
// Request body must be an item object with a name, amount number, amount unit, category & store.
router.post('/',  (req, res) => {
  let newItem = req.body;
  console.log(`Adding item`, newItem);

  let queryText = `INSERT INTO "item" ("item_name", "amount", "amount_id", "category_id", "store_id")
                   VALUES ($1, $2, $3, $4, $5);`;
  pool.query(queryText, [newItem.itemName, newItem.amountNumber, newItem.amountUnit, newItem.category, newItem.shoppingStore])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new item`, error);
      res.sendStatus(500);
    });
});

// DELETE item
router.delete('/:id', (req, res) => {
  console.log('in /item DELETE', req.params.id)
  const query = `DELETE FROM "item" WHERE id=$1;`;
  const values = [req.params.id];
  pool.query(query, values)
      .then((result) => {
          console.table(result)
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error in DELETE`, error);
          res.sendStatus(500);
      });
});

module.exports = router;
