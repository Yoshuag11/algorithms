/*
 * Complete the 'largestMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function largestMatrix ( arr ) {
	const rowsLength = arr.length;

	if ( rowsLength > 500 || rowsLength < 0 ) {
		throw new RangeError( 'Size of `arr` values surpassed: 1 <= arr <= 100' );
	}

	const isInteger = Number.isInteger;
	let maxSize = 0;

	for ( let i = 0; i < rowsLength; i += 1 ) {
		const row = arr[ i ];

		for ( let j = 0, columnsLength = row.length; j < columnsLength; j += 1 ) {
			const value = row[ j ];

			if (
				isNaN( value ) ||
				!isInteger( value )
			) {
				throw new Error(
					`Array can only contains integers, found: ${ value }`
				);
			}

			if ( value === 1 ) {
				if ( maxSize === 0 ) {
					maxSize = 1;
				}

				let white = true;
				let currentColumn = j + 1;
				let size = 0;

				while (
					white &&
					currentColumn < columnsLength
				) {
					// maintain the square shape by not using more columns than the
					// available rows.
					if ( size > rowsLength - 1 - i ) {
						break;
					}

					size += 1;
					white = row[ currentColumn ] === 1;
					currentColumn += 1;
				}

				let squareFound = false;

				while ( size > 0 /** or simply `size` or `size >= 1` */ ) {
					// process to validate square only if its size could be bigger than
					// current max size.
					if ( size <= maxSize ) {
						break;
					}

					currentColumn = j;

					let columnsLeft = size;
					let currentRow = i + 1;
					let rowsLeft = size - 1;

					while ( true ) {
						white = arr[ currentRow ][ currentColumn ] === 1;
						columnsLeft -= 1;

						if ( !white ) {
							break;
						}
						if ( columnsLeft === 0 ) {
							rowsLeft -= 1;

							if ( rowsLeft === 0 ) {
								if ( white ) {
									squareFound = true;
									maxSize = size;
								}
								break;
							}

							columnsLeft = size;
							currentColumn = j;
							currentRow += 1;
							continue;
						}

						currentColumn += 1;
					}

					if ( squareFound ) {
						break;
					}

					size -= 1;
				}
			}
		}
	}
	return maxSize;
}

console.log( largestMatrix( [ [ 1, 1 , 1 ], [ 1, 1 , 0 ], [ 1, 0 , 1 ] ] ) );
console.log( largestMatrix( [  [ 0, 1, 1 ], [ 1, 1, 0 ], [ 1, 0, 1 ], [ 2 ] ] ) );
console.log( largestMatrix( [ [ 1, 1, 1, 0, 1, 1, 1, 1, 1, 0 ], [ 1, 1, 1, 1, 1, 1, 1, 0, 1, 1 ], [ 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 0, 1, 1, 0, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ] ) );