const head = Symbol( 'head' );

class LinkedListNode {
	constructor ( data ) {
		this.data = data;
		this.next = null;
	}
}
export class PriorityQueue {
	constructor () {
		this[ head ] = null;
	}
	enqueue ( data ) {
		const newNode = new LinkedListNode( data );
		const headNode = this[ head ];

		// special case: no items in the list yet
		if ( headNode === null || data > headNode.data ) {
			newNode.next = headNode;
			// just set the head to the new node
			this[ head ] = newNode;
		} else {
			let current = this[ head ];

			while ( current.next !== null && data < current.next.data ) {
				current = current.next;
			}

			newNode.next = current.next;
			current.next = newNode;
		}
	}
	dequeue () {
		const element = this[ head ];

		// if queue is empty, head is null
		if ( element ) {
			this[ head ] = element.next;
		}
		return element;
	}
	iterate ( callback ) {
		let current = this[ head ];

		while ( current !== null ) {
			callback( current.data );

			current = current.next;
		}
	}
}