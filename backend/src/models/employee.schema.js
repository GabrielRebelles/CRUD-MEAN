const { Schema, model } = require("mongoose")

//cramos schema
const employeeSchema = new Schema({
    name: {type:String,required:true},
    position: {type:String,required:true},
    office: {type:String,required:true},
    salary: {type:Number,required:true},
},{
    //añade un campo de cunado fue creado y actualizado a cada dato:
    timestamps:true,
    //para que no añada el "_v":
    versionKey:false,
})

//creamos modelo utilizando el schema
module.exports = model("Employee", employeeSchema)

