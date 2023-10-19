const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const express = require('express');

server.use(express.json());
server.use(middlewares);

//add movie to db.json
server.post('/orders', (req, res) => {
  const { Title, imdbID } = req.body;

  const orders = router.db.get('orders').value();

  const ordersArray = Array.isArray(orders) ? orders : [];

  ordersArray.push({ Title, imdbID });

  router.db.set('orders', ordersArray).write();

  res.json({ message: 'Order added successfully' });
});

//remove movie from db.json 
server.delete('/orders/:imdbID', (req, res) => {
  const imdbID = req.params.imdbID;

  const orders = router.db.get('orders').value();

  const updatedOrders = orders.filter((order) => order.imdbID !== imdbID);

  router.db.set('orders', updatedOrders).write();

  res.json({ message: 'Order removed successfully' });
});

//clears all previous orders when the server restarts
//router.db.set('orders', []).write();

server.use(router);

server.listen(8080, () => {
  console.log('JSON Server is running');
});