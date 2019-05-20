/*
 * Complete the 'minNum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER threshold
 *  2. INTEGER_ARRAY happy
 */

function minNum ( threshold, happy ) {
	const n = happy.length;

	if ( n > 100 || n < 0 ) {
		throw new RangeError(
			'Size of `happy` values surpassed: 1 <= happy <= 100'
		);
	} else if ( threshold > 1000 || threshold < 1 ) {
		throw new RangeError(
			`threshold value "${ value }" surpassed set boundaries: ` +
				`1 <= thresholdValue <= 1000`
		);
	}

	const isInteger = Number.isInteger;
	let count = 2;
	let min = happy[ 0 ];
	let i = 1;

	while ( true ) {
		if ( i >= n ) {
			count = n;
			break;
		}

		const firstValue = happy[ i ];
		const secondValue = happy[ i + 1 ];

		if (
			isNaN( firstValue ) ||
			!isInteger( firstValue ) ||
			secondValue !== undefined &&
				( isNaN( secondValue ) || !isInteger( secondValue ) )
		) {
			throw new Error( '`happy` can contain only integers.' );
		} else if (
			firstValue > 1000 ||
			firstValue < 1 ||
			secondValue !== undefined &&
				( secondValue > 1000 || secondValue < 1 )
		) {
			throw new RangeError(
				'happy value surpassed set boundaries: 1 <= happyValue <= 1000'
			);
		}
		if ( firstValue - min >= threshold || secondValue - min >= threshold ) {
			return count;
		}

		i += 2;
		count += 1;
	}
	return count;
}

console.log( minNum( 2, [ 1, 2, 3 ] ) );
console.log( minNum( 650, [ 82, 112, 134, 178, 206, 229, 238, 278, 293, 335 ] ) );
console.log( minNum( 402, [ 162, 206, 224, 264, 288, 334, 364, 367, 389, 405, 454, 478, 479, 482, 509, 517, 545, 578, 626, 657, 692, 705, 720, 734, 747 ] ) );
console.log( minNum( 668, [ 464, 495, 501, 502, 524, 534, 578, 612, 617, 656, 663, 678, 721, 740, 770, 775, 780, 786, 799, 801, 827, 835, 884, 915, 959, 997, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000 ] ) );