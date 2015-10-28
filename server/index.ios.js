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
			<TabBarIOS tintColor="#ff6160" barTintColor="#f5f5f5">
				
				<TabBarIOS.Item
					title="投资"
					icon={require('image!licai-b')}
					selectedIcon={require('image!licai-a')}
					selected={this.state.selectedTab === 'invest'}
					onPress={() => this.setState({selectedTab: 'invest'})}
					>
					
					<NavigatorIOS
						style={{flex: 1}}
						titleTextColor="#ff6160"
						barTintColor="#fff"
						tintColor="#ff6160"
						translucent={true}
						itemWrapperStyle={{
							backgroundColor: '#f4f4f4'
						}}
						initialRoute={{
							title: '钱隆来了',
							component: InvestView
						}}	/>


				</TabBarIOS.Item>

				
				<TabBarIOS.Item
					title="钱包"
					icon={require('image!wallet-b')}
					selectedIcon={require('image!wallet-a')}
					selected={this.state.selectedTab === 'wallet'}
					onPress={() => this.setState({selectedTab: 'wallet'})}
					>

					<NavigatorIOS
						style={{flex: 1}}
						titleTextColor="#ff6160"
						barTintColor="#fff"
						tintColor="#ff6160"
						translucent={true}
						itemWrapperStyle={{
						}}
						initialRoute={{
							title: '我的钱包',
							component: WalletView
						}}	/>

				</TabBarIOS.Item>

			</TabBarIOS>
		);
	}
}


React.AppRegistry.registerComponent('qianlonglaile', () => Qianlonglaile);

