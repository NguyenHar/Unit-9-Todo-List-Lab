import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = "https://localhost:7027/api/Employees";
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
  createEmployee(newEmployee:Employee):Observable<void> {
    return this.http.post<void>(this.url, newEmployee);
  }
  updateEmployee(id:number, newValues:Employee):Observable<any> {
    return this.http.put<any>(this.url+"/"+id, newValues);
  }
  deleteEmployee(id:number):Observable<any> {
    return this.http.delete<any>(this.url+"/"+id);
  }
}
