/**
 * Created by ritamashin on 2017/8/5.
 */
import React,{PureComponent} from 'react';
import {View, Text ,Image ,TouchableOpacity,FlatList,StyleSheet} from 'react-native';
import px2dp  from '../../Utils/px2dp'
import {color ,StarLevelView} from '../../widget'
import NavigationItem from '../../widget/NavigationItem'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'
import DreamSNSHeaderTopicItem from './DreamSNSHeaderTopicItem'

export default class DreamSNSHeaderView extends PureComponent{


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    _keyExtractor = (item,i) =>{
        return i;
    };

    _renderItem(item){
        return (<DreamSNSHeaderTopicItem topicItem = {item.item}/>)
    };

    ItemSeparatorComponent (){
        //249
        return <View style={{height : px2dp(70) ,width : px2dp(11),backgroundColor: 'red'}}/>
    }
      render() {
          let dataArray = this.props.topicDataArray;

          return (

              <View style={styles.container}>
                  <FlatList renderItem = {(item)=> this._renderItem(item)}
                            data={dataArray}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor = {this._keyExtractor}
                            //ItemSeparatorComponent = {() => this.ItemSeparatorComponent()}
                            style={{marginTop : px2dp(10),marginBottom : px2dp(10)}}/>
              </View>
          )
      }


}
const styles = StyleSheet.create({
   container : {
       backgroundColor : 'rgb(247,247,247)',
   }
});
