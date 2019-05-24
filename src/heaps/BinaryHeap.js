export class BinaryHeap {
	constructor ( scoreFunction ) {
		this.content = [];
		this.scoreFunction = scoreFunction;
	}
	push ( element ) {
		const content = this.content;

		content.push( element );
		this.bubbleUp( content.length - 1 );
	}
	pop () {
		const content = this.content;
		// store the first element so we can return it later
		const result = content[ 0 ];
		// get the element at the end of the array
		const end = content.pop();

		// if there are any elements left, put the end element at the start
		// and let it sink down
		if ( content.length ) {
			content[ 0 ] = end;

			this.sinkDown( 0 );
		}
		return result;
	}
	bubbleUp ( n ) {
		const content = this.content;
		const scoreFunction = this.scoreFunction;
		const element = content[ n ];
		const score = scoreFunction( element );

		while ( n > 0 ) {
			const parentN = Math.floor( ( n + 1 ) / 2 ) - 1;
			const parent = this.content[ parentN ];

			// If the parent has a lesser score, things are in order and we are done
			if ( scoreFunction( parent ) >= score ) {
				break;
			}

			// Otherwise, swap the parent with the current element and continue
			content[ parentN ] = element;
			content[ n ] = parent;
			n = parentN;
		}
	}
	sinkDown ( n ) {
		// look up the target element and its score
		const content = this.content;
		const scoreFunction = this.scoreFunction;
		const length = content.length;
		const element = content[ n ];
		const elementScore = scoreFunction( element );

		while ( true ) {
			// compute the indices of the child elements
			const child2N = ( n + 1 ) * 2;
			const child1N = child2N - 1;
			// This is used to store the new position of the element, if any.
			let swap = null;
			let child1Score;

			// if the first child exists (is inside the array)...
			if ( child1N < length ) {
				// look it up and compute its score
				const child1 = content[ child1N ];

				child1Score = scoreFunction( child1 );

				// if the score is less than our element's, we need to swap;
				// if ( child1Score < elementScore ) {
				if ( elementScore < child1Score ) {
					swap = child1N;
				}
			}
			// Do the same checks for the other child
			if ( child2N < length ) {
				const child2 = content[ child2N ];

				if (
					( swap === null ? elementScore : child1Score ) < scoreFunction( child2 )
				) {
					swap = child2N;
				}
			}
			if ( swap === null ) {
				break;
			}

			content[ n ] = content[ swap ];
			content[ swap ] = element;
			n = swap;
		}
	}
	size () {
		return this.content.length;
	}
}

// const heap = new BinaryHeap( function ( x ) {
// 		return x;
// 	} );

// [ 10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5 ].forEach( function ( value ) {
// 	heap.push( value );
// } );

// heap.remove( 2 );

// while ( heap.size() ) {
// 	console.log( heap.pop() );
// }