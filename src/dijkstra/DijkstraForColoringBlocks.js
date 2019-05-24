import { PriorityQueue } from '../queues/PriorityQueueForDijkstra';

export class Graph {
	constructor ( directed = true ) {
		this.nodes = [];
		this.directed = directed;
		this.adjacencyList = {};
		this.existingNodes = new Map();
	}
	addNode ( node ) {
		const existingNodes = this.existingNodes;

		// validation to avoid having repeated nodes
		if ( existingNodes.get( node ) ) {
			return;
		}

		this.nodes.push( node );
		this.adjacencyList[ node ] = [];

		existingNodes.set( node, true );
	}
	addEdge ( node1, node2, weight ) {
		const adjacencyList = this.adjacencyList;

		adjacencyList[ node1 ].push( { node: node2, weight } );

		if ( this.directed ) {
			adjacencyList[ node2 ].push( { node: node1, weight } );
		}
	}
	findPathWithDijkstra ( startNode, endNode ) {
		const nodes = this.nodes;
		const adjacencyList = this.adjacencyList;
		const times = {};
		const backTrace = {};
		const pq = new PriorityQueue();

		times[ startNode ] = 0;

		nodes.forEach( node => {
			if ( node !== startNode ) {
				times[ node ] = Infinity;
			}
		} );

		pq.enqueue( [ startNode, 0 ] );

		while ( !pq.isEmpty() ) {
			const [ currentNode, time ] = pq.dequeue();
			const currentList = adjacencyList[ currentNode ];
			const currentTime = times[ currentNode ];

			for ( let i = 0, length = currentList.length; i < length; i += 1 ) {
				const { node, weight } = currentList[ i ];
				const newTime = currentTime + weight;

				if ( newTime < times[ node ] ) {
					times[ node ] = newTime;
					backTrace[ node ] = currentNode;

					pq.enqueue( [ node, newTime ] );
				}
			}
		}

		const path = [ endNode ];
		let lastStep = endNode;

		while ( lastStep !== startNode ) {
			path.unshift( backTrace[ lastStep ] );
			lastStep = backTrace[ lastStep ];
		}
		return times[ endNode ];
	}
}
// const map = new Graph();

// map.addNode( 'start' );
// map.addNode( 'start' );
// map.addNode( 'end' );
// map.addNode( '1 1' );
// map.addNode( '1 2' );
// map.addNode( '1 3' );
// map.addNode( '2 1' );
// map.addNode( '2 2' );
// map.addNode( '2 3' );
// map.addNode( '3 1' );
// map.addNode( '3 2' );
// map.addNode( '3 3' );
// map.addEdge( 'start', '1 1', 1 );
// map.addEdge( 'start', '1 2', 2 );
// map.addEdge( 'start', '1 3', 2 );
// map.addEdge( '1 1', '2 2', 2 );
// map.addEdge( '1 1', '2 3', 1 );
// map.addEdge( '1 2', '2 1', 2 );
// map.addEdge( '1 2', '2 3', 1 );
// map.addEdge( '1 3', '2 1', 2 );
// map.addEdge( '1 3', '2 2', 2 );
// map.addEdge( '2 1', '3 2', 1 );
// map.addEdge( '2 1', '3 3', 2 );
// map.addEdge( '2 2', '3 1', 2 );
// map.addEdge( '2 2', '3 3', 2 );
// map.addEdge( '2 3', '3 1', 2 );
// map.addEdge( '2 3', '3 2', 1 );
// map.addEdge( '3 1', 'end', 0 );
// map.addEdge( '3 2', 'end', 0 );
// map.addEdge( '3 3', 'end', 0 );

// console.log( map.findPathWithDijkstra( 'start', 'end' ) );

// const map = new Graph();

// map.addNode( 'Fullstack' );
// map.addNode( 'Dig Inn' );
// map.addNode( 'Dubliner' );
// map.addNode( 'Starbucks' );
// map.addNode( 'Cafe Grumpy' );
// map.addNode( 'Insomnia Cookies' );
// map.addEdge( 'Fullstack', 'Dig Inn', 7 );
// map.addEdge( 'Fullstack', 'Dubliner', 2 );
// map.addEdge( 'Fullstack', 'Starbucks', 6 );
// map.addEdge( 'Dig Inn', 'Dubliner', 4 );
// map.addEdge( 'Dig Inn', 'Cafe Grumpy', 9 );
// map.addEdge( 'Dubliner', 'Starbucks', 3 );
// map.addEdge( 'Dubliner', 'Insomnia Cookies', 7 );
// map.addEdge( 'Starbucks', 'Insomnia Cookies', 6 );
// map.addEdge( 'Cafe Grumpy', 'Insomnia Cookies', 5 );

// console.log( map.findPathWithDijkstra( 'Fullstack', 'Cafe Grumpy' ) );