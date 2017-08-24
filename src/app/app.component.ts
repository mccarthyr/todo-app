import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';
import { ToDoDataService } from './services/to-do-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToDoDataService]

})

export class AppComponent implements OnInit {


	newTodo: Todo = new Todo();

	todos: Todo[] = [];


	constructor( private todoDataService: ToDoDataService ) {}


	public ngOnInit() {
		
		console.log("In the INIT now");

		this.todoDataService.getAllTodos()
			.subscribe( 
				(todos) => {
					this.todos = todos;
				}
			 );
	}


	onAddTodo( todo ) {

		console.log("---> Now in the onAddTodo() method: " + todo.title);


		this.todoDataService.addTodo( todo )
			.subscribe(
				(newTodo) => {
					this.todos = this.todos.concat( newTodo );
				}
			);
	}



	onToggleTodoComplete( todo ) {

		this.todoDataService.toggleTodoComplete( todo )
			.subscribe(
				(updatedTodo) => {
					todo = updatedTodo;
				}
			);
	}


	onRemoveTodo( todo ) {

		this.todoDataService.deleteTodoById( todo.id )
			.subscribe(
				(_) => {
					this.todos = this.todos.filter( (t) => t.id !== todo.id );
				}
			);
	}


	getTodos() {
		//return this.todoDataService.getAllTodos();
		return this.todos;
	}


	/*
	newTodo: Todo = new Todo();

	// METHODS RELATING TO THE TODO APPLICATION - CALLING THE TODO DATA SERVICE FROM HERE...

	toogleToDoComplete(todo) {
		this.todoDataService.toggleTodoComplete(todo);
	}

	addToDo() {
		this.todoDataService.addTodo(this.newTodo);
		this.newTodo = new Todo();
		console.log("A NEW TODO HAS BEEN ADDED!");
	}

	removeToDo( todo ) {
		this.todoDataService.deleteTodoById( todo.id );
	}

	getTodos() {
		return this.todoDataService.getAllTodos();
	}
	*/

}













