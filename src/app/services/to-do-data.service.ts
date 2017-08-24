import { Injectable }   from '@angular/core';
import { Todo }         from '../models/todo';
import { ApiService }   from './api.service';
import { Observable }   from 'rxjs/Observable';


// This class is Responsible for managing the ToDo items - It will call the API Service from here.

@Injectable()
export class ToDoDataService {


	constructor( private api: ApiService ) {}


	// Simulate Post /todos
	addTodo( todo: Todo ): Observable<Todo> {
		return this.api.createTodo( todo );
	}


	// Simulate DELETE /todos/:id
	deleteTodoById( todoId: number ): Observable<Todo> {
		return this.api.deleteTodoById( todoId );
	}


	// Simulate PUT /todos/:id
	updateTodo( todo: Todo ): Observable<Todo> {
		return this.api.updateTodo( todo );
	}


	// Simulate GET /todos
	getAllTodos(): Observable<Todo[]> {
		return this.api.getAllTodos();
	}


	// Simulate GET /todos/:id
	getTodoById( todoId: number ): Observable<Todo> {
		return this.api.getTodoById( todoId );
	}


	// Toggle todo complete
	toggleTodoComplete( todo: Todo ) {
		todo.complete = !todo.complete;
		return this.api.updateTodo( todo );
	}


/*

	// Placeholder for last id so we can simulate automatic incrementing of id's 
	lastId: number = 0;
	// Placeholder for todo's
	todos: Todo[] = [];

	constructor() {}


	// Simulate Post /todos
	addTodo( todo: Todo ): ToDoDataService {

		if ( !todo.id ) {
			todo.id = ++this.lastId;
		}
		this.todos.push(todo);
		return this;
	}


	// Simulate DELETE /todos/:id
	deleteTodoById( id: number ): ToDoDataService {

		this.todos = this.todos.filter( todo => todo.id !== id );
		return this;
	}


	// Simulate PUT /todos/:id
	updateTodoById( id: number, values: Object = {} ): Todo {

		let todo = this.getTodoById(id);
		if (!todo) {
			return null;
		}
		Object.assign(todo, values);
		return todo;
	}


	// Simulate GET /todos
	getAllTodos(): Todo[] {

		return this.todos;
	}


	// Simulate GET /todos/:id
	getTodoById( id: number ): Todo {

		return this.todos.filter( todo => todo.id == id ).pop();
	}


	// Toggle todo complete
	toggleTodoComplete( todo: Todo ) {

		let updatedTodo = this.updateTodoById( todo.id, {
			complete: !todo.complete
		} );
		return updatedTodo;
	}
*/


}
