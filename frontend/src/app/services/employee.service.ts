import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API=location.href+"api/employees"
  selectedEmployee : Employee={
    name:'',
    office:'',
    position:'',
    salary:null,
  }
  employees : Employee[]//arreglo con objetos de tipo Employee
  
  constructor(public http: HttpClient){}

  getEmployees(){
    //esto va a obtener un arreglo de empleados
    return this.http.get<Employee[]>(this.URL_API)
  }

  createEmployee(employee:Employee){
    return this.http.post(this.URL_API,employee)
  }
  
  deleteEmployee(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
  
  updateEmployee(employee:Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`,employee)
  }
}
