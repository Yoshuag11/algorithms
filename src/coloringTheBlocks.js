import { Graph } from './dijkstra/DijkstraForColoringBlocks';

/*
 * Complete the 'minPrice' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY cost as parameter.
 */
function minPrice( cost ) {
	const graph = new Graph( false );
	let i = 1;
	const firstBlock = cost[ 0 ];

	graph.addNode( 'start' );
	graph.addNode( 'end' );
	graph.addNode( '1 1' );
	graph.addNode( '1 2' );
	graph.addNode( '1 3' );
	graph.addEdge( 'start', '1 1', firstBlock[ 0 ] );
	graph.addEdge( 'start', '1 2', firstBlock[ 1 ] );
	graph.addEdge( 'start', '1 3', firstBlock[ 2 ] );

	for ( let length = cost.length; i < length; i += 1 ) {
		const block = cost[ i ];
		const firstValue = block[ 0 ];
		const secondValue = block[ 1 ];
		const thirdValue = block[ 2 ];
		const blockTag = i + 1;
		const previousBlockTag = i;
		const firstBlockTag = `${ blockTag } 1`
		const secondBlockTag = `${ blockTag } 2`
		const thirdBlockTag = `${ blockTag } 3`
		const previousFirstBlockTag = `${ previousBlockTag } 1`
		const previousSecondBlockTag = `${ previousBlockTag } 2`
		const previousThirdBlockTag = `${ previousBlockTag } 3`

		graph.addNode( firstBlockTag );
		graph.addNode( secondBlockTag );
		graph.addNode( thirdBlockTag );
		graph.addEdge( previousFirstBlockTag, secondBlockTag, secondValue );
		graph.addEdge( previousFirstBlockTag, thirdBlockTag, thirdValue );
		graph.addEdge( previousSecondBlockTag, firstBlockTag, firstValue );
		graph.addEdge( previousSecondBlockTag, thirdBlockTag, thirdValue );
		graph.addEdge( previousThirdBlockTag, firstBlockTag, firstValue );
		graph.addEdge( previousThirdBlockTag, secondBlockTag, secondValue );
	}

	graph.addEdge( `${ i } 1`, 'end', 0 );
	graph.addEdge( `${ i } 2`, 'end', 0 );
	graph.addEdge( `${ i } 3`, 'end', 0 );
	return graph.findPathWithDijkstra( 'start', 'end' );
}

// console.log( minPrice( [ [ 1, 2, 2 ], [ 2, 2, 1 ], [ 2, 1, 2 ] ] ) );
// console.log( minPrice( [ [ 1, 2, 2 ], [ 2, 3, 3 ], [ 3, 3, 1 ] ] ) );
// console.log( minPrice( [
// 	[ 12, 67, 10 ],
// 	[ 33, 79, 49 ],
// 	[ 79, 21, 67 ],
// 	[ 72, 93, 36 ],
// 	[ 85, 45, 28 ],
// 	[ 91, 94, 57 ],
// 	[ 1, 53, 8 ],
// 	[ 44, 68, 90 ],
// 	[ 24, 96, 30 ],
// 	[ 3, 22, 66 ],
// 	[ 49, 24, 1 ],
// 	[ 53, 77, 8 ],
// 	[ 28, 33, 98 ],
// 	[ 81, 35, 13 ],
// 	[ 65, 14, 63 ],
// 	[ 36, 25, 69 ]
// ] ) );