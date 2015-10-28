'use strict';

let React = require('react-native');

let {
	View, Text, Image,
	ScrollView,
	ListView
} = React;

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class FriendView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {friends: []};
	}

	componentDidMount() {
		fetch('http://localhost:3000/friend').then((responseText) => {
			responseText.json().then((resp) => {
				this.setState({
					friends: resp.data
				});
			});
		});
	}

	renderItem(item) {
		return (
			<View style={{
				paddingRight: 15,
				paddingLeft: 15,
				backgroundColor: '#fff'}}>
				
				<View style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingTop: 10,
					paddingBottom: 10,
					borderBottomWidth: 0.5,
					borderBottomColor: '#e5e5e5'}}>
					<Image style={{width: 45, height: 45}} source={{uri: item.avatar}} />
					<Text style={{paddingLeft: 10, fontSize: 14, color: '#585858'}}>{item.name}</Text>
				</View>

			</View>
		);
	}

	renderGroup(g) {
		let group = g || {};

		return (
			<View key={group.level}>
				<Text style={{
					paddingLeft: 15,
					paddingTop: 8,
					paddingBottom: 8,
					fontSize: 12, 
					lineHeight: 12,
					color: '#585858' }}>{group.title}</Text>

				<ListView 
					dataSource={ds.cloneWithRows(group.list)}
					renderRow={this.renderItem} />
			</View>
		);
	}

	render() {

		let friends = this.state.friends;

		let childs = [];

		friends.reduce((childs, group) => {
			childs.push(this.renderGroup(group));
			return childs;
		}, childs);

		return (
			<ScrollView>
				{childs}
			</ScrollView>
		);
	}

}

module.exports = FriendView;

