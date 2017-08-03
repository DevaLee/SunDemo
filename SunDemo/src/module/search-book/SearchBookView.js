/**
 * Created by ritamashin on 2017/8/4.
 */
import React, {PureComponent} from 'react';
import {View, Text,Image,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import px2dp  from '../../Utils/px2dp'
import {color ,StarLevelView} from '../../widget'
import NavigationItem from '../../widget/NavigationItem'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'

export default class SearchBookView extends PureComponent {

    static navigationOptions = ({navigation}) =>({

        headerLeft : <SearchInputView/>,
        headerRight : <TouchableOpacity style={styles.cancelButton} onPress={() =>navigation.goBack()}>
                        <View>
                            <Text style={styles.cancelText}>取消</Text>
                        </View>
                    </TouchableOpacity>,
        headerStyle : {backgroundColor: 'white'}
    });


        // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    componentDidMount() {

    }

    render(){
          return (
              <Text> 搜索图书 </Text>
          );
    }
}

class SearchInputView extends PureComponent {

    render (){
        return (

            <TouchableOpacity style={styles.container} onPress={() => (this.resignerResponder.bind(this))}>
                <Image style={styles.searchImage} source={require('../../res/search-book/search.png')}/>
                <TextInput style={styles.searchInput} autoFocus={true}
                           placeholder="请输入名字或关键词搜索" placeholderTextColor="#cccccc"
                           ref ={ (c) => this._input = c }/>
            </TouchableOpacity>
        )
    }

    resignerResponder(){
        this._input.blur();
    }
}

const styles = StyleSheet.create({
   container :{
       backgroundColor : '#eeeeee',
       flexDirection : 'row',
       height: px2dp(30),
       padding : px2dp(5),
       alignItems : 'center',
       marginLeft: px2dp(25)
   },
   searchImage :{
       width : px2dp(15),
       height : px2dp(15),
   },
   searchInput :{
     width: px2dp(270),
     marginLeft : px2dp(5),
       fontSize : 14,
   },
    cancelButton :{
       justifyContent :'center',
        alignItems: 'center',
        flex : 1,
        marginRight :px2dp(10)

    },
    cancelText : {
       fontSize: px2dp(17),
        color : '#777777'
    }


});