export class PriorityQueue {
	constructor () {
		this.collection = [];
	}
	// @param Array { element }: index 0 value and index 1 weight
	enqueue ( element ) {
		// lower weight = shorter time = higher priority
		if ( this.isEmpty() ) {
			this.collection.push( element );
		} else {
			const collection = this.collection;
			let added = false;
			const [ value, weight ] = element;

			for ( let i = 1, length = collection.length; i < length; i += 1 ) {
				if ( weight < collection[ i - 1 ][ 1 ] ) {
					collection.splice( i - 1, 0, element );
					added = true;
					break;
				}
			}

			if ( !added ) {
				collection.push( element );
			}
		}
	}
	dequeue () {
		return this.collection.shift();
	}
	isEmpty () {
		return this.collection.length === 0;
	}
}