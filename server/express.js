const express = require("express");
const cors=require('cors')
const app = express();
app.use(express.json())
app.use(cors());
const db = require("./models");

const userdetailsRouter=require('./routes/userdetails')
const diseases=require('./routes/Diseases')
app.use("/userdetails",userdetailsRouter);

app.use('/diseases',diseases);


db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("server runs");
  });
});
