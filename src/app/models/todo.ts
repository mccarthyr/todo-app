export class Todo {

	id: number;
	title: string = '';
	complete: boolean = false;

	constructor( values: Object = {} ) {

		Object.assign( this, values ); 
		// Assigns the properties of the object passed in to an instanace of this Todo class when called
		// Calling coe example: 
		/*
		let todo = new Todo( {
  			title: 'Read',
  			complete: false
  		} );
		*/

	}

}

