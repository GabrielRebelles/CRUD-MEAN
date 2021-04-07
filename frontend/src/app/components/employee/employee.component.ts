import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service"
import {NgForm} from "@angular/forms"
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //utilizo instancia employeService que viene de la clase EmployeeService
  //con esto puedo utilizar los metodos que defini en la clase EmployeeService
  constructor(public employeeService: EmployeeService) { }

  //cuando cargue:
  ngOnInit(): void {
    this.getEmployees()
  }

  resetForm(form:NgForm){
    form.reset()
  }


  getEmployees(){    
    this.employeeService.getEmployees().subscribe(
      res=>{
        this.employeeService.employees=res
      },
      err=>console.error(err)
    )
  }

  addEmployee(form:NgForm){
    if (form.value._id) {
      this.employeeService.updateEmployee(form.value).subscribe(
        res=>{
          this.getEmployees()
          form.reset()
        },
        err=>{
          console.log(err)          
          this.getEmployees()
          form.reset()
        }
      )
    }else{      
      this.employeeService.createEmployee(form.value).subscribe(
        res=>{
          this.getEmployees()
          form.reset()
        },
        err=>console.error(err)
      )
    }
  }

  deleteEmployee(_id:string){    
    if (confirm("Are you sure you want to delet it?")) {
      this.employeeService.deleteEmployee(_id).subscribe(
        res=>{
          this.getEmployees()
        },
        err=>{
          console.log(err)
          this.getEmployees()
        }
        )
    }
  }

  editEmployee(employee:Employee){
    this.employeeService.selectedEmployee=employee
  }


}
