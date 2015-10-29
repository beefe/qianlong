'use strict';

let React = require('react-native');

let {
	View, Text, Image,
	StyleSheet
} = React;

let styles = StyleSheet.create({
	base: {
		height: 130
	}
});

class SlideBanner extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let images = this.props.images;

		return (
			<View>
				<Image style={styles.base} source={{uri: images[0]}} />
			</View>
		);
	}

}

module.exports = SlideBanner;