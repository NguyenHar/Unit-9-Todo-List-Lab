import { Component } from '@angular/core';
import { Employee, Todos } from '../todos';
import { TodoService } from '../todo.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  newTodo:Todos = {} as Todos;
  todos:Todos[] = [];
  employees:Employee[] = [];

  constructor(private todoService:TodoService, private employeeService:EmployeeService) {
    this.todoService.getAllTodos().subscribe(
      (result) => {
        this.todos = result;
      }
    );
  }

  ngOnInit() : void {
    this.employeeService.getAllEmployees().subscribe(
      (result) => {
        this.employees = result;
      }
      );
  }

  completeTask(newValues:Todos, index:number) : void {
    this.todos[index].isCompleted = true;
    this.todoService.updateTodos(newValues.id, newValues).subscribe(
      (result) => {}
    );
  }

  createTodo() : void {
    if (this.newTodo.isCompleted == null)
      this.newTodo.isCompleted = false;
    this.todoService.createTodo(this.newTodo).subscribe(
      (result) => {
        this.todos.push(this.newTodo);
        this.newTodo = {} as Todos;
      }
    );
  }

  deleteTodo(id:number, index:number) : void {
    this.todoService.deleteTodo(id).subscribe(
      (result) => {
        this.todos.splice(index, 1);
      }
    );
  }

  getName(id:number):string {
    for (let i=0; i<this.employees.length; i++)
    {
      if (this.employees[i].id == id)
        return this.employees[i].name;
    }
    return "";
  }
}
