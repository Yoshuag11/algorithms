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