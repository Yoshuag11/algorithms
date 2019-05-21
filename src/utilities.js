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