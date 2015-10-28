'use strict';

let React = require('react-native');

let styles = React.StyleSheet.create({
	wrapper: {
		marginTop: 10,
		paddingRight: 15,
		paddingLeft: 15,
		paddingBottom: 20
	},
	touchBar: {
		overflow: 'hidden'
	},
	broadcastBox: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10
	},
	broadcastIcon: {
		width: 15, 
		height: 12
	},
	broadcastText: {
		fontSize: 12,
		color: '#585858'
	},
	twoColumnBox: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	smallCard: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10
	},
	icon32: {
		width: 32, 
		height: 32
	},
	productTitle: {
		marginRight: 5,
		textAlign: 'center', 
		fontSize:18, 
		color:'#333'
	}
});

module.exports = styles;