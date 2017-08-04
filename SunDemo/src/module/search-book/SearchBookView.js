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
import SearchOptionView from './SearchOptionView'
import SearchBookHotKeyView from './SearchBookHotKeyView'


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
        this.state = {
            hotKeyArray : []
        };
      }

    componentDidMount() {
        this._requestHotKeyData();
    }

    render(){
          return (

            <View style={{flex : 1,backgroundColor : 'white'}}>
                <SearchOptionView onPress={() => this._onPressSearchOption()}/>
                <View style={styles.search_Hot_Key_Container}>
                    <Text style={{color : '#aaaaaa', fontSize : 14,marginBottom : 8}}>为你推荐</Text>
                    <SearchBookHotKeyView titles= {this.state.hotKeyArray}
                                          onSelected = {(i) => this._onPressHotKey(i)}
                                          style={styles.search_Hot_Key_List}/>
                </View>

            </View>

          );
    }
    _onPressSearchOption(){
        alert('图书分类')
    }
    _onPressHotKey(i){
        alert (i)

    }

    _requestHotKeyData (){
        let hotKeyArray = api.hotKeyArray;
        this.setState({
            hotKeyArray: hotKeyArray
        })

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
    },
    search_Hot_Key_Container :{
       backgroundColor :'white',
        padding: px2dp(10),
    },
    search_Hot_Key_List :{
      backgroundColor : 'white',
    }


});