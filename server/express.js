const express = require("express");
const cors=require('cors')
const app = express();
app.use(express.json())
app.use(cors());
const db = require("./models");

const userdetailsRouter=require('./routes/userdetails')
app.use("/userdetails",userdetailsRouter);


db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("server runs");
  });
});
