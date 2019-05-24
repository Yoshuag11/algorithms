import { PriorityQueue } from '../queues/PriorityQueueForDijkstra';
export class Graph {
	constructor () {
		this.nodes = [];
		this.adjacencyList = {};
	}
	addNode ( node ) {
		this.nodes.push( node );
		this.adjacencyList[ node ] = [];
	}
	addEdge ( node1, node2, weight ) {
		const adjacencyList = this.adjacencyList;

		adjacencyList[ node1 ].push( { node: node2, weight } );
		// adjacencyList[ node2 ].push( { node: node1, weight } );
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

			adjacencyList[ currentNode ].forEach( neighbor => {
				const time = times[ currentNode ] + neighbor.weight;

				if ( time < times[ neighbor.node ] ) {
					times[ neighbor.node ] = time;
					backTrace[ neighbor.node ] = currentNode;

					pq.enqueue( [ neighbor.node, time ] );
				}
			} );
		}

		const path = [ endNode ];
		let lastStep = endNode;

		while ( lastStep !== startNode ) {
			path.unshift( backTrace[ lastStep ] );
			lastStep = backTrace[ lastStep ];
		}
		return `Path is ${ path } and time is ${ times[ endNode ] }`;
	}
}

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