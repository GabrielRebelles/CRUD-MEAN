const mongoose = require("mongoose")

const uri = "Your URL";
mongoose
    .connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify:false
    })
    .then(db => console.log("DB conectada"))
    .catch(err => console.log(err));

