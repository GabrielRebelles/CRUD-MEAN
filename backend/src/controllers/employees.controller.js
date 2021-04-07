const employeesCtrl = {}

const Employee=require("../models/employee.schema")

employeesCtrl.getEmployees = async(req,res)=>{ 
    const employees = await Employee.find()
    res.json(employees)
}
employeesCtrl.createEmployee = (req,res)=>{
    Employee(req.body).save() 
    .then((newEmployee)=>{
        console.log(newEmployee);
        res.send({message:"employee created"})
    })
    .catch(()=>{res.status(500)})
}

employeesCtrl.getEmployee = async(req,res)=>{ 
    Employee.findById(req.params.id)
        .then((employee)=>{
            res.send(employee) 
        })
        .catch(()=>{
            res.send("Employee not found") 
        })
}
employeesCtrl.editEmployee = (req,res)=>{
    Employee.findByIdAndUpdate(req.params.id,req.body)
        .then((data)=>{
            res.send("Employee updated")
        })
        .catch(()=>{res.status(500)})
}
employeesCtrl.deleteEmployee = (req,res)=>{ 
    console.log(req.params.id);
    Employee.findByIdAndDelete(req.params.id)
        .then(()=>{res.send("Employee deleted")})
        .catch(()=>{res.status(500)})
}

module.exports = employeesCtrl