import express from 'express';
import data from './data.js';
import mysql from 'mysql';

const app = express();
// test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
app.get('/', (req, res) => {
  res.send('hello');
});
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 3000;

// establish mysql connection and api
const db = mysql.createConnection({
  host: 'ecom.czv82qqakxds.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'password',
  database: 'ecommerce',
});
db.connect((err) => {
  if (err) throw err;
  console.log('connected to db');
});
//grabs db data and gives it as json object
app.get('/api/shop', (req, res) => {
  db.query('SELECT * FROM products', (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
    console.log(result);
  });
});
app.get('/low', (req, res) => {
  db.query('SELECT * FROM products Order by price ASC', (err, results) => {
    if (err) {
      console.log(err);
    } else res.send(results);
  });
});

app.get('/high', (req, res) => {
  db.query('SELECT * FROM products Order by price DESC', (err, results) => {
    if (err) {
      console.log(err);
    } else res.send(results);
  });
});
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
