import { Component } from '@angular/core';
import { Employee } from '../todos';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  newEmployee:Employee = {} as Employee;
  employees:Employee[] = [];

  constructor(private employeeService:EmployeeService) {
    this.employeeService.getAllEmployees().subscribe(
      (result) => {
        this.employees = result;
      }
      );
    } 

  createEmployee() : void {
    this.employeeService.createEmployee(this.newEmployee).subscribe(
      (result) => {
        this.employees.push(this.newEmployee);
        this.newEmployee = {} as Employee;
      }
    );
  }

  updateEmployee(newValues:Employee, index:number) : void {
    this.employeeService.updateEmployee(newValues.id, newValues).subscribe(
      (result) => {
        this.employees[index] = newValues;
      }
    );
  }

  deleteEmployee(id:number, index:number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (result) => {
        this.employees.splice(index, 1);
      }
    );
  }

}
