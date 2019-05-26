/*
 * Complete the 'circularSubstringCompetition' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING target
 *  2. STRING source
 */

function circularSubstringCompetition( target, source ) {
	const firstLetter = target[ 0 ];
	const targetLength = target.length;
	let foundSource = false;
	let minLength = Infinity;

	for ( let i = 0, sourceLength = source.length; i < sourceLength; i += 1 ) {
		if ( firstLetter === source[ i ] ) {
			// const area = [ i ];
			// let str = source[ i ];
			let letterFound;
			// let count = 1;
			let currentPosition = i;
			let leftPosition = i;
			let rightPosition = i;
			const usedPositions = [ i ];
			const usedLeftPositions = [ i ];
			const usedRightPositions = [ i ];
			let leftWordFound = true;
			let rightWordFound = true;
			// let currentPosition = i + 1;

			for ( let j = 1; j < targetLength; j += 1 ) {
				const targetCurrentLetter = target[ j ];
				// let startPosition = currentPosition;

				letterFound = false;

				for ( let k = leftPosition; k !== rightPosition ; k += 1 ) {
					if ( k === sourceLength ) {
						k = 0;
					}
					if (
						!usedPositions.includes( k ) &&
						targetCurrentLetter === source[ k ]
					) {
						letterFound = true;

						usedPositions.push( k );
						break;
					}
				}

				if ( letterFound ) {
					continue;
				}

				let i = 1;

				while ( true ) {
					const nextLeftPosition = leftPosition - i;
					const nextRightPosition = rightPosition + i;

					if ( nextLeftPosition < 0 ) {
						nextLeftPosition = sourceLength - 1;
					}
					if ( nextRightPosition === sourceLength ) {
						nextRightPosition = 0;
					}
					if ( targetCurrentLetter === source[ nextLeftPosition ] ) {
						foundLeft = true;
					}
					if ( targetCurrentLetter === source[ nextRightPosition ] ) {
						foundRight = true;
					}
				}

				for ( let r = rightPosition; r !== currentPosition ; r -= 1 ) {
					if (
						!usedRightPositions.includes( r ) &&
						targetCurrentLetter === source[ r ]
					) {
						letterFound = true;

						usedRightPositions.push( r );
						break;
					}
				}

				if ( letterFound ) {
					break;
				}

				for ( let r = rightPosition + 1; r !== currentPosition; r += 1 ) {
					if ( r === sourceLength ) {
						r = 0;
					}
					if ( targetCurrentLetter === source[ r ] ) {
						letterFound = true;
						rightPosition = r;

						usedRightPositions.push( r );
						break;
					}
				}
			}
		}
	}

	if ( foundSource ) {
		return minLength;
	}
	return -1;
}
// function circularSubstringCompetition( target, source ) {
// 	const firstLetter = target[ 0 ];
// 	const targetLength = target.length;
// 	let foundSource = false;
// 	let minLength = Infinity;

// 	for ( let i = 0, sourceLength = source.length; i < sourceLength; i += 1 ) {
// 		if ( firstLetter === source[ i ] ) {
// 			// const area = [ i ];
// 			// let str = source[ i ];
// 			let letterFound;
// 			// let count = 1;
// 			let currentPosition = i;
// 			let rightPosition = i;
// 			let leftPosition = i;
// 			const usedLeftPositions = [ i ];
// 			const usedRightPositions = [ i ];
// 			let leftWordFound = true;
// 			let rightWordFound = true;
// 			// let currentPosition = i + 1;

// 			for ( let j = 1; j < targetLength; j += 1 ) {
// 				const targetCurrentLetter = target[ j ];
// 				// let startPosition = currentPosition;

// 				letterFound = false;

// 				// right validation
// 				if ( rightWordFound ) {
// 					for ( let r = rightPosition; r !== currentPosition ; r -= 1 ) {
// 						if (
// 							!usedRightPositions.includes( r ) &&
// 							targetCurrentLetter === source[ r ]
// 						) {
// 							letterFound = true;

// 							usedRightPositions.push( r );
// 							break;
// 						}
// 					}

// 					if ( letterFound ) {
// 						break;
// 					}

// 					for ( let r = rightPosition + 1; r !== currentPosition; r += 1 ) {
// 						if ( r === sourceLength ) {
// 							r = 0;
// 						}
// 						if ( targetCurrentLetter === source[ r ] ) {
// 							letterFound = true;
// 							rightPosition = r;

// 							usedRightPositions.push( r );
// 							break;
// 						}
// 					}

// 					if ( !letterFound ) {
// 						rightWordFound = false;
// 					}
// 				}
// 			}
// 			if ( rightWordFound ) {
// 				let count = 1;

// 				for ( let r = currentPosition; r !== rightPosition; r += 1 ) {
// 					count += 1;

// 					if ( r === sourceLength ) {
// 						r = 0;
// 					}
// 				}

// 				if ( count < minLength ) {
// 					minLength = count;
// 				}
// 			}
// 		}
// 	}

// 	if ( foundSource ) {
// 		return minLength;
// 	}
// 	return -1;
// }
// function circularSubstringCompetition( target, source ) {
// 	const firstLetter = target[ 0 ];
// 	const targetLength = target.length;
// 	let foundSource = false;
// 	let minLength = Infinity;

// 	for ( let i = 0, length = source.length; i < length; i += 1 ) {
// 		if ( firstLetter === source[ i ] ) {
// 			const usedPositions = [ i ];
// 			let str = source[ i ];
// 			let letterFound;
// 			let count = 1;
// 			let currentPosition = i + 1;

// 			if ( currentPosition === length ) {
// 				currentPosition = 0;
// 			}

// 			for ( let j = 1; j < targetLength; j += 1 ) {
// 				const targetCurrentLetter = target[ j ];
// 				let startPosition = currentPosition;

// 				letterFound = false;

// 				do {
// 					const currentTarget = source[ currentPosition ];

// 					currentPosition += 1;
// 					count += 1;

// 					if ( targetCurrentLetter === currentTarget ) {
// 						str += targetCurrentLetter;
// 						letterFound = true;
// 						break;
// 					}

// 					if ( currentPosition === length ) {
// 						currentPosition = 0;
// 					}
// 				} while ( startPosition !== currentPosition )

// 				if ( !letterFound ) {
// 					break;
// 				}
// 			}

// 			if ( target === str ) {
// 				foundSource = true;

// 				if ( count < minLength ) {
// 					minLength = count;
// 				}
// 			}
// 		}
// 	}

// 	if ( foundSource ) {
// 		return minLength;
// 	}
// 	return -1;
// }

// console.log( circularSubstringCompetition( 'krr', 'hackerrank' ) );
// console.log( circularSubstringCompetition( 'z', 'z' ) );
console.log( circularSubstringCompetition( 'kanah', 'hackerrank' ) );