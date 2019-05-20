/*
 * Complete the 'countMax' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts STRING_ARRAY upRight as parameter.
 */

function countMax ( upRight ) {
	const n = upRight.length;

	if ( n > 100 || n < 0 ) {
		throw new RangeError( `Size of 'upRight' is 1 <= upRightSize <= 100` );
	}

	const exponent = 6;
	const rowsAndColumnsLimit = Math.pow( 10, exponent );
	const isInteger = Number.isInteger;
	let minUp;
	let minRight;

	for ( let value of upRight ) {
		let [ u, r ] = value.split( ' ' );

		u = parseInt( u.trim(), 10 );
		r = parseInt( r.trim(), 10 );

		if ( isNaN( u ) || isNaN( r ) || !isInteger( u ) || !isInteger( r ) ) {
			throw new Error( 'You need to provide only integers to `upRight`' );
		} else if ( u > rowsAndColumnsLimit || r > rowsAndColumnsLimit ) {
			throw new RangeError(
				'Either `up` or `right` value surpassed the boundaries of the grid, which is 10^6 on either side'
			);
		}
		if ( !minUp || u < minUp ) {
			minUp = u;
		}
		if ( !minRight || r < minRight ) {
			minRight = r;
		}
	}
	return minUp * minRight;
}

console.log( countMax( [ '2 3', '3 7', '4 1' ] ) );

console.log( countMax( [ '27180 27875', '24829 24055', '21539 17799', '18007 23569', '11407 12029', '13921 26546', '15750 7005', '24044 21250', '14202 8933', '6013 22197', '25882 18284', '17885 8996', '9573 6468', '22180 21941', '11769 12964', '13917 21164', '5232 13621', '24668 13244', '8663 17104', '6902 13318', '28324 7301', '31368 20999', '30213 11323', '12314 29125', '20955 16501', '21931 31094', '12765 17196', '27020 16742', '27521 27822', '7931 21143', '9924 9103', '14451 31248', '27575 31406', '30221 11271', '16167 7599', '8763 24648', '16738 25675', '8362 27644', '17456 29928', '14106 13547', '25416 25539', '28400 20792', '10191 25433', '30460 9078', '8273 13212', '17102 19152', '21028 23894', '14907 15340', '27797 18457', '28927 26432', '16724 13742', '19927 7109', '12158 14618', '26203 23866', '10569 27418', '5147 27005', '28695 28500', '19671 16158', '29569 15149', '30712 25905', '10914 14578', '10119 26876', '16804 30451', '21999 24844', '6841 15144', '12148 10168', '23390 16513', '17337 11013', '6452 26023', '10334 28787', '9110 29485', '7686 30473', '29701 7603', '31280 15196', '28529 14121', '26267 10930', '26551 10447', '10663 25305', '29283 21899', '26213 24181', '15620 8469', '16008 25623', '23536 17546', '16178 14668', '8904 28747', '17057 31274', '31063 14620', '25466 28917', '19814 24488', '20431 28703', '9177 31101', '26748 21915', '5750 30095', '29017 23249', '10556 19072', '27347 10576', '5779 13998', '20423 28499', '30043 27322', '22258 18923' ] ) );