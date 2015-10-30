'use strict';

let React = require('react-native');

let {
	View, Text, TextInput, Image,
	TouchableHighlight
} = React;

class Purchase extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			earning: 0,
			earningsYield: '0.14',
			disableSubmit: true,
			underlayColor: '#d9d9d9',
			submitBtnColor: '#d9d9d9'
		};
	}

	calculateEarning(value) {
		let val = parseInt(value);
		let rate = this.state.earningsYield;
		
		if (!isNaN(val) && val > 0) {
			this.setState({
				earning: val * rate / 365
			});
			this.recoverSubmit();
		} else {
			this.setState({
				earning: 0
			});
			this.disableSubmit();
		}
	}

	recoverSubmit() {
		this.setState({
			disableSubmit: false,
			underlayColor: '#ec4c4a',
			submitBtnColor: '#ff6160'
		});
	}

	disableSubmit() {
		this.setState({
			disableSubmit: true,
			underlayColor: '#d9d9d9',
			submitBtnColor: '#d9d9d9'
		});
	}

	nextStep() {
		alert('😄');
	}

	render() {
		let earning = this.state.earning;
		let submitBtnColor = this.state.submitBtnColor;
		let underlayColor = this.state.underlayColor;

		return (
			<View 
				style={{
					paddingTop: 64
				}} >

				<View 
					style={{
						flexDirection:'row',
						alignItems:'center',
						height:44,
						marginTop:10,
						paddingLeft:15,
						paddingRight:15,
						borderTopWidth:0.5,
						borderBottomWidth:0.5,
						borderColor:'#e5e5e5',
						backgroundColor:'#fff'
					}}>
					<Text style={{width:100, color:'#757575'}}>当前活期收益</Text>
					<Text style={{color:'#585858'}}>7% <Text style={{color:'#d3a241'}}>+7%(新人专享)</Text></Text>
				</View>

				<View 
					style={{
						flexDirection:'row',
						alignItems:'center',
						height:60,
						marginTop:10,
						paddingLeft:15,
						paddingRight:15,
						borderTopWidth:0.5,
						borderBottomWidth:0.5,
						borderColor:'#e5e5e5',
						backgroundColor:'#fff'
					}}>
					<Text style={{width:100,fontSize:15,color:'#333'}}>投资金额(元)</Text>
					<TextInput 
						keyboardType="numeric" 
						placeholder="最低100" 
						placeholderTextColor="#ccc" 
						clearButtonMode="while-editing"
						onChangeText={this.calculateEarning.bind(this)}
						style={{
							flex:1,
						}} />
				</View>
				<View style={{
					paddingTop: 10,
					paddingBottom: 10,
					paddingLeft: 15,
					paddingRight: 15,
				}}><Text style={{color:'#d3a241'}}>每日将增加{earning}元收益</Text></View>

				<TouchableHighlight
					activeOpacity={1}
					underlayColor={underlayColor}
					onPress={this.nextStep}
					style={{
						height:45,
						marginTop: 20,
						alignItems:'center',
						justifyContent:'center',
						backgroundColor:submitBtnColor
					}}>

					<Text style={{color:'#fff', fontSize:15, fontWeight:'700'}}>下一步</Text>
				</TouchableHighlight>

			</View>
		);
	}

}

module.exports = {	
	title: '购买',
	component: Purchase
};





