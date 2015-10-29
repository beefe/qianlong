'use strict';

let React = require('react-native');

let {
	View, Text,
	TabBarIOS,
	NavigatorIOS
} = React;

let InvestView = require('./pages/invest/index');
let WalletView = require('./pages/wallet/index');

class Qianlonglaile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'invest'
		};
	}

	render() {
		return (
			<TabBarIOS tintColor="#ff6160" barTintColor="#f0f0f0">
				
				<TabBarIOS.Item
					title="投资"
					icon={require('image!licai-b')}
					selectedIcon={require('image!licai-a')}
					selected={this.state.selectedTab === 'invest'}
					onPress={() => this.setState({selectedTab: 'invest'})} >
					
					{createNavigator({route: {
						title: '钱隆来了',
						component: InvestView
					}})}

				</TabBarIOS.Item>

				
				<TabBarIOS.Item
					title="钱包"
					icon={require('image!wallet-b')}
					selectedIcon={require('image!wallet-a')}
					selected={this.state.selectedTab === 'wallet'}
					onPress={() => this.setState({selectedTab: 'wallet'})} >

					{createNavigator({route: {
						title: '我的钱包',
						component: WalletView
					}})}
				
				</TabBarIOS.Item>

			</TabBarIOS>
		);
	}
}


function createNavigator(s) {
	return (
		<NavigatorIOS
			style={{flex:1}}
			titleTextColor="#ff6160"
			barTintColor="#fff"
			tintColor="#ff6160"
			translucent={true}
			itemWrapperStyle={{backgroundColor:'#f5f5f5'}}
			initialRoute={s.route} />
		);	
}

React.AppRegistry.registerComponent('qianlonglaile', () => Qianlonglaile);

