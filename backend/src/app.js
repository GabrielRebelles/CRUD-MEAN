const express = require("express")
const morgan = require("morgan")
const path = require("path");
const cors = require("cors")

const app = express()


app.set('port',process.env.PORT||3000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/", express.static(path.join(__dirname,'../','public')));

app.use("/api/employees",require("./routes/employees.routes"))

module.exports=app