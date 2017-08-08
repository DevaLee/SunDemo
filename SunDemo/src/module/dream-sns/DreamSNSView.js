/**
 * Created by ritamashin on 2017/8/3.
 */
import React, {PureComponent} from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet,SectionList,FlatList
} from 'react-native';

import px2px from '../../Utils/px2dp'
import theme from '../../config/theme'
import px2dp,{Screen} from '../../Utils/px2dp'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'
import DreamSNSHeaderView from './DreamSNSHeaderView'
import {color,NavigationItem} from '../../widget'
import DreamSNSTransmitDynamicCell from './DreamSNSTransmitDynamicCell'
import DreamSNSDefaultDynamicCell from './DreamSNSDefaultDynamicCell'
import DreamSNSEmptyView from './DreamSNSEmptyView'


export default class DreamSNSView extends PureComponent {
    /**
     *  导航信息
     * @param navigation
     */
    static navigationOptions = ({navigation})=>({
        headerTitle : <Text style={{fontSize : 17}}>梦想圈</Text>,
        headerRight : <NavigationItem icon={require('../../res/book-sns/btn_creatSNSStatus.png')}
                                      iconStyle = {{width : px2dp(20),height : px2dp(20)}}/>,
        headerStyle : {backgroundColor:'white'}
    });
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            topicDataArray :[],
            dynamicListArray : [],
            isBusy : false,
        };
      }

    componentDidMount() {
        this._fetchTopicData()
        this._fetchSNSData()
    }

    /**
     *  渲染头部 的热们话题列表
     * @private
     */
    _renderHeaderView(){
        return <DreamSNSHeaderView topicDataArray = {this.state.topicDataArray}/>
    }

    /**
     * 渲染每一个cell
     * @param rowInfo
     * @param index
     * @returns {XML}
     * @private
     */
    _renderDynamicItem (rowInfo ,index){
        //
        if (rowInfo.item.action === 1){
            // 源动态
             return <DreamSNSDefaultDynamicCell dynamicInfo={rowInfo.item}/>
        }else if(rowInfo.item.action === 2){
            // 转发动态
            return <DreamSNSTransmitDynamicCell transDynamicInfo={rowInfo.item}/>
        }else {
            return (<View/>)
        }
    }

    /**
     * 渲染分割线
     * @returns {XML}
     * @private
     */
    _renderSeperatorComponent (){
        return <View style={{backgroundColor:color.seperatorColor ,height:px2dp(0.5)}}/>
    }

    /**
     * 数据源为空的界面
     * @returns {XML}
     * @private
     */
    _renderEmptyListView (){
        return <DreamSNSEmptyView/>
    }

    /**
     *  key 生成器
     * @param rowInfo
     * @param index
     * @returns {*}
     * @private
     */
    _keyExtractor = (rowInfo,index) =>{
        return index
    }


      render(){
          return (
              <FlatList ListHeaderComponent={() => this._renderHeaderView()}
                        data={this.state.dynamicListArray}
                        ItemSeparatorComponent ={this._renderSeperatorComponent}
                        keyExtractor = {this._keyExtractor}
                        renderItem = {(rowInfo,index) => this._renderDynamicItem(rowInfo,index)}
                        style={{backgroundColor : 'white'}}
                        ListEmptyComponent = {this._renderEmptyListView()}
                        onEndReachedThreshold ={0.1}
                        onEndReached= {() =>this._fetchOldSNSData()}/>
          )
      }

      // 网络请求

    /**
     * 请求热门推荐话题列表
     * @returns {Promise.<void>}
     * @private
     */
    async _fetchTopicData(){
          let {data} = await new MXRNetworkManager().get(api.recommendTopicUrl);
          let dataArray = await JSON.parse(data);
          if (Array.isArray(dataArray)){
              this.setState({
                  topicDataArray: dataArray,
              });
          }
      }

    /**
     * 请求动态列表
     * @returns {Promise.<void>}
     * @private
     */
    async _fetchSNSData () {

        let {data} = await new MXRNetworkManager().get(api.SNSDynamicUrl)
        let dataDict = await  JSON.parse(data);
        let listArray = dataDict['list'];
        if (Array.isArray(listArray)) {
            this.setState({
                dynamicListArray: listArray,
            });
        }
    }

    /**
     * 下拉请求之前的动态
     * @returns {Promise.<void>}
     * @private
     */
    async _fetchOldSNSData () {

        if(this.state.isBusy === true){
            return ;
        }
        this.setState({
            isBusy:true,
        });

        let dataArray = this.state.dynamicListArray;
        if (dataArray.length === 0) return;
        let dynamicItem = dataArray[dataArray.length - 1];
        let timeStamp = dynamicItem.updateTime;
        let url = api.SNSDynamicNextUrl + '?rows=20&timestamp=' + timeStamp + '&uid=ZAkAAAD6+/ry'
        console.log('获取更多动态:'+ url);
        let {data} = await new MXRNetworkManager().get(url);
        if(data){
            let dataDict = await JSON.parse(data);
            let listArray = dataDict['list'];
            if (Array.isArray(listArray)) {
                dataArray.push.apply(dataArray,listArray);
                this.setState({
                    dynamicListArray : dataArray,
                    isBusy : false
                });
            }
        }
    }
}