import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url:string = "https://localhost:7027/api/Todos";
  constructor(private http:HttpClient) { }

  getAllTodos():Observable<Todos[]> {
    return this.http.get<Todos[]>(this.url)
  }
  getTodos(id:number):Observable<Todos> {
    return this.http.get<Todos>(this.url + "/" + id);
  }
  updateTodos(id:number, newValues:Todos):Observable<any> {
    return this.http.put<any>(this.url+"/"+id, newValues);
  }

  createTodo(todo:Todos):Observable<void> {
    return this.http.post<void>(this.url, todo);
  }

  deleteTodo(id:number):Observable<any> {
    return this.http.delete<any>(this.url+"/"+id);
  }
  
}
