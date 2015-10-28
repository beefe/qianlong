'use strict';

let React = require('react-native');

let {
	View, Text, Image,
	StyleSheet, ScrollView,
	TouchableHighlight
} = React;

// 页面
let FriendPage = require('../friend/index');
let PurchasePage = require('../purchase/index');

// 轮播图组件
let SlideBanner = require('../../components/slide-banner/index');

// 轮播图图片
let slideBannerImages = [
		'https://dn-qianlonglaile.qbox.me/static/images/201509212025_687bafab3dcf25092fad53291ba0b05e.jpg',
		'https://dn-qianlonglaile.qbox.me/static/images/201509221445_8c0e379055f5817820bf641493ec22d9.jpg'
	];

let arrowImage = require('../../components/icon-arrow/index');

// 样式
let styles = require('./styles');
let stylesBasic = require('../styles');

class InvestView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>

				<SlideBanner images={slideBannerImages} />
				
				<View style={styles.wrapper}>

					<TouchableHighlight 
						underlayColor="#dfdfdf" 
						style={[styles.touchBar, stylesBasic.boxAppearance]}
						onPress={() => {
							this.props.navigator.push(FriendPage);
						}} >

						<View style={styles.broadcastBox}>
							<Image style={styles.broadcastIcon} source={require('image!icon_wealth_news')} />
							<Text style={styles.broadcastText}>你的好友小猩猩、大猩猩、老猩猩等88人正在使用</Text>
							<Image style={styles.broadcastIcon} source={require('image!201510141543')} />
						</View>

					</TouchableHighlight>


					<View style={styles.twoColumnBox}>
						
						{createSmallCard({
							title: '资产日报',
							desc: '你的钱给了谁？',
							marginL: 0,
							icon: require('image!icon_wealth_assets'),
						})}

						{createSmallCard({
							title: '邀请好友',
							desc: '佣金收益1%',
							marginL: 10,
							icon: require('image!icon_wealth_invitation'),
						})}

					</View>

					<View style={[stylesBasic.boxAppearance, {marginTop: 10}]}>
						<View style={{
							flexDirection: 'row', 
							justifyContent: 'center', 
							alignItems: 'center',
							paddingTop: 20,
							borderRadius: 6,
							paddingBottom: 14}}>

							<Text style={styles.productTitle}>钱隆第108期-活期</Text>
							
							{arrowImage}

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
									this.props.navigator.push(PurchasePage);
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

								<Text style={{marginRight:5, textAlign:'center',fontSize:18, color:'#585858'}}>查看往期</Text>
								
								{arrowImage}

							</View>
						</TouchableHighlight>
					</View>

				</View>


			</ScrollView>
		);
	}

}

function createSmallCard(s) {
	return (
		<View style={[stylesBasic.boxAppearance, styles.smallCard, {marginLeft: s.marginL}]}>
			<Image style={styles.icon32} source={s.icon} />
			<View style={{justifyContent: 'space-between', height: 36, paddingLeft: 5}}>
				<Text style={{fontSize: 16, color:'#ff6160'}}>{s.title}</Text>
				<Text style={{color: '#585858'}}>{s.desc}</Text>
			</View>
		</View>
	);
}

module.exports = InvestView;




