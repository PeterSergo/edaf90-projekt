const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const { StatusCodes } = require("http-status-codes");

(function () {
  const port = 8080;
  const server = express();

  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };

  server.use(cors(corsOptions));
  server.use(express.json());

  server.listen(port, () => {
    console.log("movie REST Server is listening on port " + port);
  });

  function getDetails(req, res, next, kind) {
    const obj = inventory[req.params.name];
    if (obj) {
      if (obj[kind]) {
        res.json(obj);
      } else {
        res.set("Content-Type", "text/plain");
        res
          .status(StatusCodes.BAD_REQUEST)
          .send(req.params.name + " is not a " + kind);
      }
    } else {
      res.set("Content-Type", "text/plain");
      res.status(StatusCodes.NOT_FOUND).send("can not find " + req.params.name);
    }
  }

  function handleOrder(req, res, next) {
    try {
      const order = {
        status: "confirmed",
        timestamp: new Date(),
        uuid: uuidv4(),
        price: 0,
        order: req.body,
      };
      order.price = req.body.reduce(
        (acc, salad) => getSaladPrice(salad) + acc,
        0
      );
      res.json(order);
    } catch (e) {
      res.set("Content-Type", "text/plain");
      res.status(StatusCodes.NOT_FOUND).send(e);
    }
  }

  function throwError(name) {
    throw "can not find " + name;
  }
  function getList(req, res, next, kind) {
    let list = Object.keys(inventory).filter((name) => inventory[name][kind]);
    res.json(list);
  }

  function addInventoryListener(server, kind) {
    server.get("/" + kind + "s", (req, res, next) =>
      getList(req, res, next, kind)
    );
    server.get("/" + kind + "s/", (req, res, next) =>
      getList(req, res, next, kind)
    );
    server.get("/" + kind + "s/:name", (req, res, next) =>
      getDetails(req, res, next, kind)
    );
  }

  addInventoryListener(server, "foundation");
  addInventoryListener(server, "protein");
  addInventoryListener(server, "extra");
  addInventoryListener(server, "dressing");
  server.post("/orders/", handleOrder);
  server.get("/", (req, res, next) =>
    res.json({
      try: req.hostname + ":" + port + req.originalUrl + "foundations",
    })
  );
})();
