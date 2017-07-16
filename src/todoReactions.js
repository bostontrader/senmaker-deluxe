var State = require('./state');
var Utils = require('./utils');

import ProNode from './ProNode'
import NounNode from './NounNode'
import NPNode from './NPNode'
import VPNode from './VPNode'

// Wait to emulate a server request.
//var lag = 1000;


/**
 * Creates a new todo and add it to the list.
 * @param  {String} The todo content.
 */
State.on('todo:create', function( text ){

	// We set the app into a loading status
	// to let the user know
	State.get().set({status: 'loading'});

	// Call the fake server
	setTimeout( function(){
		State.get()
			// Restore the default status for the app and clean
			// the input
			.set( {status: 'ready', todoInput: ''} )

			// Creates the new todo
			.todos.push({
				model: {
					title: text,
					id: Utils.uuid(),
					completed: false
				},
				ui: {
					status: 'ready',
					input: text
				}
			})
		;

		// Save the state in localStorage
		Utils.store('freezerTodos', State.get());
	}, lag);
});

/**
 * Deletes a todo.
 * @param  { FreezerNode } The todo to delete.
 */
State.on('todo:delete', function( todo ){

	console.log('deleting',todo)
	State.get().set({catfood: !State.get().catfood});
	// Since we are receiving the todo to delete from
	// the arguments. We can use directly instead of
	// making use of the state.
	//var updated = todo.pivot()
	//					.ui.set({ status: 'deleting' })
	//;

	//setTimeout( function(){
		// We just remove the todo from teh list
		//State.get()
			//.todos.splice( getTodoIndex( updated ), 1 )
		//;

		// Save the state in localStorage
		//Utils.store('freezerTodos', State.get());
	//}, lag);
});

/**
 * Deletes a todo.
 * @param  { FreezerNode } The todo to delete.
 */
State.on('todo:addPOS', function( posType ){

	console.log('add new pos',posType)
	//addPOS(posType) {

	let newPOS
	//console.log(149,posType)
	switch(posType) {
		case 5: // N
			newPOS = new NounNode({})
			State.get().treeData.push({title:'N', pos:newPOS})
			break
		case 7: // Pro
			newPOS = new ProNode({})
			//const n1 = NGenerateText(n)
			State.get().treeData.push({title:'PRO', pos:newPOS})
			//console.log(101,typeof(n))
			//const listener = n.getListener()
			//var freezer = new Freezer({ arr: [2] }),
				//state = freezer.get(),
				//listener = state.arr.getListener()
			//;

			//listener.on('update', function( ){
				//console.log( 'Listener Updated!' );
				//console.log( state, prevState );
			//});




			break
		//case 8: // V
		//this.addVerb()
		//break
		case 9: // NP
			newPOS = new NPNode({})
			State.get().treeData.push({title:'NP', pos:newPOS})
			break

		case 10: // VP
			newPOS = new VPNode({})
			//const n1 = NGenerateText(n)
			State.get().treeData.push({title:'vp', pos:newPOS})
			break
		//case 14: // Clause
		//this.addClause()
		//break
		//}
	}
})

/**
 * Updates a todo text. Shows how a reaction can receive more
 * than one parameter.
 *
 * @param  {FreezerNode} todo   The todo to update.
 * @param  {String} text    The new text for the todo.
 */
State.on('todo:update', function( todo, text ){
	// Set the todo in an 'updating' state
	// to let the user know.
	// The updated node is returned.
	var updated = todo.pivot().ui.set({ status: 'updating' });

	// Call the server
	setTimeout( function(){
		var todo = State.get().todos[ getTodoIndex( updated ) ];

		// We need to pivot in the node to modify multiple children.
		// Pivoting will make children changes return the updated
		// todo instead the updated child.
		todo.pivot()
			.model.set({ title: text })
			.ui.set({ status: 'ready' })
		;

		// Save the state in localStorage
		Utils.store('freezerTodos', State.get());
	}, lag);
});

/**
 * Set a filter for the todos.
 * @param  {String} The filter to apply. It can be 'all'|'completed'|'active'.
 */
State.on('todo:filter', function( filter ){
	State.get().set({ filter: filter });

	// Save the state in localStorage
	Utils.store('freezerTodos', State.get());
});

/**
 * Removes completed nodes from the list.
 */
State.on('todo:clearCompleted', function(){
	var todos = State.get().todos.pivot(),
		toRemove = []
	;

	// Let's mark all the completed nodes as deleting
	for( var i = todos.length - 1; i>= 0; i-- ){
		if( todos[i].model.completed ){
			// Pivoting makes us to have always the updated
			// reference to todos.
			todos = todos[i].ui.set({status: 'deleting'});
			toRemove.push( i );
		}
	}

	// Call the server
	setTimeout( function(){
		var todos = State.get().todos;

		// Remove all the completed children now.
		toRemove.forEach( function( i ){
			todos = todos.splice( i, 1 );
		});

		// Save the state in localStorage
		Utils.store('freezerTodos', State.get());
	}, lag);
});

/**
 * Marks a todo as complete or active.
 * @param {FreezerNode} The todo to toggle.
 */
State.on('todo:toggle', function( todo ){
	todo.model.set({ completed: !todo.model.completed });

	// Save the state in localStorage
	Utils.store('freezerTodos', State.get());
});


/**
 * HELPER function. Find a todo in the state and return
 * its index in the array.
 * @param  {FreezerNode} todo The todo to find.
 * @return {Number|Boolean}   The index or false if not found.
 */
var getTodoIndex = function( todo ){
	var i = 0,
		found = false,
		todos = State.get().todos
	;

	while( i<todos.length && found === false ){
		// Since todos are immutable, we can use
		// direct comparison here instead of using uuid.
		if( todos[i] === todo )
			found = i;
		i++;
	}

	return found;
};