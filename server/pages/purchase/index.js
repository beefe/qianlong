let React = require('react-native');

let {
	View, Text, TextInput, Image,
	TouchableHighlight
} = React;

class Purchase extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
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
					<View
						style={{
							flex:1,
							alignItems:'center',
							flexDirection:'row',
							height:20
						}}>
						<TextInput keyboardType="numeric" placeholder="最低100" placeholderTextColor="#ccc" style={{flex:1}} />
						<Image style={{width:14, height:14}} source={require('image!btn_delete_28x28')} />
					</View>
				</View>

				<TouchableHighlight
					activeOpacity={1}
					underlayColor="#ec4c4a"
					style={{
						height:45,
						marginTop: 20,
						alignItems:'center',
						justifyContent:'center',
						backgroundColor:'#ff6160'
					}}>

					<Text style={{color:'#fff', fontSize:15, fontWeight:'700'}}>下一步</Text>
				</TouchableHighlight>

			</View>
		);
	}

}

module.exports = Purchase;