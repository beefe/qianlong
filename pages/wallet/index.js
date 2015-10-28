let React = require('react-native');

let {
	View, Text
} = React;

class WalletView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>Wallet View 1</Text>
				<Text>Wallet View 2</Text>
			</View>
		);
	}

}

module.exports = WalletView;