const route= require("express").Router()
const ExampleController=require("../controllers/exampleController")

route.get("/getall",ExampleController.getAll)
route.post("/add",ExampleController.add)

module.exports = route