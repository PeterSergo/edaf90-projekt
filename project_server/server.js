const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const express = require('express');

server.use(express.json());
server.use(middlewares);

// Create a custom route to handle POST requests to /orders
server.post('/orders', (req, res) => {
  const { Title, imdbID } = req.body;

  // Assuming 'orders' is the key for your orders data in db.json
  const orders = router.db.get('orders').value();

  // Ensure that you're working with an array
  const ordersArray = Array.isArray(orders) ? orders : [];

  // Add the movie to the 'orders' array
  ordersArray.push({ Title, imdbID });

  // Save the updated data to db.json
  router.db.set('orders', ordersArray).write();

  res.json({ message: 'Order added successfully' });
});

server.use(router);

server.listen(8080, () => {
  console.log('JSON Server is running');
});