export const insertionSort = ( arr, descending ) => {
	let length = arr.length;

	for ( let i = 1; i < length; i += 1 ) {
		let auxI = i;

		while ( auxI > 0 ) {
			const l = arr[ auxI - 1 ];
			const r = arr[ auxI ];

			if ( descending ) {
				if ( l < r ) {
					arr[ auxI - 1 ] = r;
					arr[ auxI ] = l;
				}
			} else {
				if ( l > r ) {
					arr[ auxI - 1 ] = r;
					arr[ auxI ] = l;
				}
			}

			auxI -= 1;
		}
	}
};
export const findApproxValue = ( arr, value, bottom = 0, top = arr.length - 1 ) => {
	if ( top > bottom ) {
		const mid = Math.floor( ( top - bottom ) / 2 + bottom );
		const currentValue = arr[ mid ];
	
		if ( currentValue === value ) {
			return mid;
		} else if ( currentValue > value ) {
			return findApproxValue( arr, value, bottom, mid - 1 );
		}
		return findApproxValue( arr, value, mid + 1, top );
	}
	return bottom;
};
export const maxValue = ( arr ) => {
	let maxValue = arr[ 0 ];
	const length = arr.length;
	let index = 0;

	for ( let i = 1; i < length; i += 1 ) {
		const maxValueCandidate = arr[ i ];

		if ( maxValueCandidate > maxValue ) {
			maxValue = maxValueCandidate;
			index = i;
		}
	}
	return { maxValue, index };
};
export const quickSort = arr => {
	const length = arr.length;
	let less = [];
	let more = [];
	const pivotList = [];

	if ( length <= 1 ) {
		return arr;
	}

	const pivot = arr[ 0 ];

	for ( let i of arr ) {
		if ( i < pivot ) {
			less.push( i );
		} else if ( i > pivot ) {
			more.push( i );
		} else {
			pivotList.push( i );
		}
	}

	less = quickSort( less );
	more = quickSort( more );
	return [ ...less, ...pivotList, ...more ];
};