let React = require('react-native');

let {
	View, Text, Image,
	ScrollView,
	TouchableHighlight
} = React;

let FriendView = require('../friend/index');
let Purchase   = require('../purchase/index');

//https://dn-qianlonglaile.qbox.me/static/images/201509221445_8c0e379055f5817820bf641493ec22d9.jpg
//https://dn-qianlonglaile.qbox.me/static/images/201509212025_687bafab3dcf25092fad53291ba0b05e.jpg

class InvestView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<View>
					<Image 
						style={{
							height: 130
						}}
						source={{uri: 'https://dn-qianlonglaile.qbox.me/static/images/201509212025_687bafab3dcf25092fad53291ba0b05e.jpg'}}/>
				</View>

				<View style={{
					paddingTop: 10,
					paddingRight: 15,
					paddingLeft: 15,
					paddingBottom: 20
				}}>
					<TouchableHighlight
						activeOpacity={1}
						underlayColor="#fff"
						style={{
							borderRadius: 6,
							backgroundColor: '#fff'
						}}
						onPress={() => {
							this.props.navigator.push({
								title: '好友列表',
								component: FriendView
							});
						}} >
						<View style={{
							flex: 3,
							flexDirection: 'row',
							justifyContent: 'space-between',
							padding: 10,
							borderRadius: 6
						}}>
							<Image
								style={{width: 15, height: 12, marginTop: 1}}
								resizeMode="cover"
								source={require('image!icon_wealth_news')} />

							<View style={{backgroundColor: 'yellow'}}>
								<Text style={{fontSize: 12, color: '#585858'}}>你的好友小猩猩、大猩猩、老猩猩等88人正在使用</Text>
							</View>
							
							<Image 
								style={{width: 15, height: 12, marginTop: 1}}
								resizeMode="cover"
								source={require('image!201510141543')} />
						</View>
					</TouchableHighlight>


					<View style={{
							paddingTop: 10,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>

						<View style={{
							flexDirection: 'row',
							alignItems: 'center',
							flex: 1,
							padding: 10, 
							borderRadius: 6,
							backgroundColor: '#fff'}}>
							<Image resizeMode="cover" style={{width: 32, height: 32}} source={require('image!icon_wealth_assets')} />
							<View style={{justifyContent: 'space-between', height: 36, paddingLeft: 5}}>
								<Text style={{fontSize: 16, color:'#ff6160'}}>资产日报</Text>
								<Text style={{color: '#585858'}}>你的钱给了谁？</Text>
							</View>
						</View>
						
						<View style={{
							flexDirection: 'row',
							alignItems: 'center',
							flex: 1,
							marginLeft: 10,
							padding: 10,
							borderRadius: 6,
							backgroundColor: '#fff'}}>
							<Image resizeMode="cover" style={{width: 32, height: 32}} source={require('image!icon_wealth_invitation')} />
							<View style={{justifyContent: 'space-between', height: 36, paddingLeft: 5}}>
								<Text style={{fontSize: 16, color:'#ff6160'}}>邀请好友</Text>
								<Text style={{color: '#585858'}}>佣金收益1%</Text>
							</View>
						</View>
					</View>

					<View style={{marginTop:10, borderRadius:6, backgroundColor:'#fff'}}>
						<View style={{
							flexDirection: 'row', 
							justifyContent: 'center', 
							alignItems: 'center',
							paddingTop: 20,
							borderRadius: 6,
							paddingBottom: 14}}>

							<Text style={{textAlign: 'center', fontSize:18, color:'#333'}}>钱隆第108期-活期</Text>
							<Image style={{width:6, height:10, marginLeft: 5}} source={require('image!icon_my_enter')}/>
						</View>

						<View>
							<Text style={{paddingTop:0, textAlign:'center', fontSize:46, color:'#ff6160'}}>14%</Text>
							<Text style={{paddingBottom:20, textAlign:'center', fontSize:12, color:'#585858'}}>项目总金额：100万</Text>
							

							<TouchableHighlight
								activeOpacity={1}
								underlayColor="#ec4c4a"
								style={{
									flexDirection: 'row',
									alignItems:'center',
									justifyContent:'center',
									alignSelf:'center',
									width:200,
									height:40,
									borderRadius:20,
									backgroundColor:'#ff6160',
								}}
								onPress={() => {
									this.props.navigator.push({
										title: '购买',
										component: Purchase
									});
								}}>
									<Text style={{fontSize:16, fontWeight:'700', color: '#fff'}}>立即投资</Text>
							</TouchableHighlight>
						</View>

						<View style={{
								flexDirection:'row',
								justifyContent:'center',
								paddingTop: 10,
								paddingBottom: 20,
								borderRadius: 6,
							}}>
							<Text style={{color:'#585858'}}>本标提供全额本息担保</Text>
							<Text style={{color:'#ff6160'}}>详情</Text>
						</View>

						

					</View>

					<View style={{marginTop:10,paddingTop:20,borderRadius:6,backgroundColor:'#fff'}}>
						<Text style={{paddingBottom:12,textAlign:'center',fontSize:14,color:'#585858'}}>钱隆来了已累计为投资者提供理财金额(元)</Text>
						<Text style={{paddingBottom:15,textAlign:'center',fontSize:24,color:'#d3a241'}}>58,888,888,888,880</Text>
						
						<TouchableHighlight
							activeOpacity={1}
							underlayColor="#dfdfdf"
							style={{
								backgroundColor:'#fff',
								borderBottomLeftRadius:6,
								borderBottomRightRadius:6
							}}>
							<View style={{
									flexDirection:'row',
									alignItems:'center',
									justifyContent:'center',
									height: 40,
									borderBottomLeftRadius:6,
									borderBottomRightRadius:6,
									borderTopWidth:0.5,
									borderColor:'#e5e5e5'
								}}>
								<Text style={{textAlign:'center',fontSize:18,color:'#585858'}}>查看往期</Text>
								<Image style={{width:6, height:10, marginLeft: 5}} source={require('image!icon_my_enter')}/>
							</View>
						</TouchableHighlight>
					</View>

				</View>


			</ScrollView>
		);
	}

}

module.exports = InvestView;




