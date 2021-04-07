const mongoose = require("mongoose")

const uri = "mongodb+srv://userCurso:nRNDvZ0JC3dExdxF@clustercurso.rzdeb.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
    .connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify:false
    })
    .then(db => console.log("DB conectada"))
    .catch(err => console.log(err));

