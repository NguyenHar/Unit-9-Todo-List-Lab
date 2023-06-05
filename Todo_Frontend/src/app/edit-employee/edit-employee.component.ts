import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../todos';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  displayForm:boolean = false;
  @Input() employee:Employee = {} as Employee;
  @Output() changed:EventEmitter<Employee> = new EventEmitter<Employee>();

  editEmployee() : void {
    this.changed.emit(this.employee);
    this.toggleDisplay();
  }

  toggleDisplay() : void {
    this.displayForm = !this.displayForm;
  }
}
