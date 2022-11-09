const route= require("express").Router()
const ExampleController=require("../controllers/exampleController")

route.get("/getall",ExampleController.getAll)
route.post("/add",ExampleController.add)
route.delete("/delete/:id",ExampleController.delete)

module.exports = route