'use strict';

let React = require('react-native');
let {
  AppRegistry,
  Image,
  StatusBarIOS,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;
let TabNavigator = require('react-native-tab-navigator');

class HiddenTabBarDemo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTab: 'home',
      showTabBar: true,
    };
  }

  render() {
    let tabBarStyle = {};
    let sceneStyle = {};
    if (!this.state.showTabBar) {
      tabBarStyle.height = 0;
      tabBarStyle.overflow = 'hidden';
      sceneStyle.paddingBottom = 0;
    }

    return (
      <TabNavigator tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <View style={styles.scene}>
            <TouchableOpacity onPress={this._toggleTabBarVisibility.bind(this)}>
              <Text style={styles.button}>
                {this.state.showTabBar ? 'Hide Tab Bar' : 'Show Tab Bar'}
              </Text>
            </TouchableOpacity>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <View style={styles.scene}>
            <Text style={{ color: '#fff' }}>Profile</Text>
          </View>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  _toggleTabBarVisibility() {
    this.setState(state => ({
      showTabBar: !state.showTabBar,
    }));
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scene: {
    backgroundColor: '#1e2127',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#007aff',
    fontWeight: '600',
  },
});


AppRegistry.registerComponent('qianlonglaile', () => HiddenTabBarDemo);