const express = require('express')
const secondcontroller = require("../controllers/secondcontroller")
const route = express.Router();

route.post("/add-data",FirstController.AddData)
route.get('/get-data',FirstController.GetData)
route.patch("/update-data/:id",FirstController.UpdateData)
route.delete("/delete-data/:id",FirstController.DeleteData)

module.exports = route;
