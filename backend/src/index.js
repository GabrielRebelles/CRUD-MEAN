require("./database")
const app = require("./app")

const server = app.listen(app.get('port'),()=>{
    console.log(`Server corriendo en http://localhost:${server.address().port}`)
})