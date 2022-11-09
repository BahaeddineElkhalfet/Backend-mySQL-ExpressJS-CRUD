const express =require("express")

const app= express()
const port=process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const routeExample =require ("./routes/exampleRoute")
app.use('/api',routeExample)

app.listen(port,()=>console.log(`Success: listening on port ${port} !`))