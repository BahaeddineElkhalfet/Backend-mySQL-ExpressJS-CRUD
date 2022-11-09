const route= require("express").Router()
const ExampleController=require("../controllers/exampleController")

route.get("/getall",ExampleController.getAll)

module.exports = route