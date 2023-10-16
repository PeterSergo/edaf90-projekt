const express = require("express");
const cors = require("cors");
const { IMDbid } = require("IMDbid");
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
})();
