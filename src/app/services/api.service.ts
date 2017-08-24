import { Injectable }  from '@angular/core';
import { environment } from '../../environments/environment';
import { Http }        from '@angular/http';

import { Todo }        from '../models/todo';

import { Observable }  from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 

const API_URL = environment.apiUrl;


/*
 -------------------
 REST API ENDPOINTS:
 -------------------
 GET     /todos       - get all existing todos
 GET     /todos/:id   - get an existing todo
 POST    /todos       - create a new todo
 PUT     /todos/:id   - update an existing todo
 DELETE  /todos/:id   - delete an existing todo
*/




@Injectable()
export class ApiService {

	constructor( private http: Http ) { }


	// API: GET /todos
	public getAllTodos(): Observable<Todo[]> {

		return this.http.get( API_URL + '/todos' )
				.map( response => {
					const todos = response.json();
					return todos.map( (todo) => new Todo( todo ) );
				} )
				.catch( this.handleError );
	}



	// API: POST /todos
	public createTodo( todo: Todo ) {
		
		return this.http.post( API_URL + '/todos', todo )
				.map( response => {
					return new Todo( response.json() );
				} )
				.catch( this.handleError );
	}


	// API: GET /todos/:id
	public getTodoById( todoId: number ) {
		
		return this.http.get( API_URL + '/todos/' + todoId )
				.map( response => {
					return new Todo(response.json());
				} )
				.catch( this.handleError );
	}



	// API: PUT /todos/:id
	public updateTodo( todo: Todo ) {
		
		return this.http.put( API_URL + '/todos/' + todo.id, todo )
				.map( response => {
					return new Todo( response.json() );
				} )
				.catch( this.handleError );
	}



	// API: DELETE /todos/:id
	public deleteTodoById( todoId: number ){
		
		return this.http.delete( API_URL + '/todos/' + todoId )
				.map( response => null )
				.catch( this.handleError );
				// The map line could be left out complete in this one...
	}



	private handleError(error: any): Observable<any> {
		console.error('An ERROR HAS OCCURRED IN THE API SERVICE: ', error);
		return Observable.throw( error );
	}
	



}

 

