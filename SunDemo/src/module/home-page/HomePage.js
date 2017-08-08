/**
 * Created by mxr on 2017/7/26.
 */
import React,{Component} from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet,SectionList,FlatList
} from 'react-native';
import px2px from '../../Utils/px2dp'

import theme from '../../config/theme'
import NavigationItem from '../../widget/NavigationItem'
import HomePageHeaderView from './HomePageHeaderView'
import px2dp,{Screen} from '../../Utils/px2dp'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'
import HomePageSectionHeader from './HomePageSectionHeader'
import HoemPageBookItem from './HoemPageBookItem'
import HomePageZoneItem from './HomePageZoneItem'

import RNFetchBlob from 'react-native-fetch-blob'


export default class HomePageView extends React.Component {

    static navigationOptions  = ({navigation}) =>({
        headerRight : <NavigationItem icon={require('../../res/home-page/search_green.png')}
                             onPress={() =>(navigation.navigate('SearchBookView'))}/> ,
        headerTitle : <NavigationItem icon={require('../../res/book-detail/down_arrow.png')}
                                      title='为你推荐' containerStyle={{flexDirection : 'row-reverse'}}
                                      iconStyle ={{width : px2dp(10), height : px2dp(7.5)}}
                               />,
        headerStyle : {backgroundColor : 'white'}
    });


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tabName :['第一','第二','第三'],
            bannerDataArray : [],
            HomePageDataArray : [],
            listDataArray : []
        };
      }

    componentDidMount() {
        this.requestHomePageData()
        this.requestBannerData()
    }

    /**
     *  SectionList Item
     * @param item
     * @returns {XML}
     * @private
     */
    _renderItem = (item) => {
        if (item.section.module.type === 1) {
           return (
               <FlatList
                   style={styles.flatListStyle}
                   data={item.item}
                   renderItem={(bookItem) =>
                       <HoemPageBookItem bookItem = {bookItem.item}
                                         key = {bookItem.item}
                                         onPressBookItem= {(this._onPressBookItem.bind(this))}
                       />}
                   horizontal={true}
                   keyExtractor = {this.keyExtractorFlatList}
                   showsHorizontalScrollIndicator={false}
               />
           )
        } else if(item.section.module.type === 3) {

            return (
                <FlatList
                    style={styles.flatListStyle}
                    data={item.item}
                    renderItem={(zoneItem) =>
                        <HomePageZoneItem zoneItem = {zoneItem.item}
                                          key = {zoneItem.item}
                                          onPressZoneItem= {(this._onPressZoneItem.bind(this))}

                        />}
                    horizontal={true}
                    keyExtractor = {this.keyExtractorFlatList}
                    showsHorizontalScrollIndicator={false}
                    />
            )
        }else {
            return <View/>
        }
    };
    /**
     *  FlatList key
     * @param item
     * @param index
     * @returns {number}
     */
    keyExtractorFlatList = (item : Object, index : number) =>{
        return index;
    }
    /**
     *  SectionList key
     * @param item
     * @param index
     * @returns {Object}
     */
    keyExtractor = (item: Object, index: number) => {
        return item
    }
    /**
     *  每一个 Section的头视图
     * @param module
     * @returns {XML}
     * @private
     */
    _renderSectionHeader = (module) => {
        return ( <HomePageSectionHeader module={module.section.module} />)
    }
    /**
     * SectionList 的头视图 banner条
     * @returns {XML}
     * @private
     */
    _renderListHeader = () => {
        return (<HomePageHeaderView imageArray = {this.state.bannerDataArray}
                                    onPressBanner={(this._onPressBanner)} />)
    }

    /**
     *  渲染 书城首页
     * @returns {XML}
     */
    render(){

        return (
            <View style={{flex :1}}>
                <SectionList
                    sections = {this.state.HomePageDataArray}
                    renderItem = {this._renderItem}
                    renderSectionHeader = {this._renderSectionHeader}
                    style={{backgroundColor : 'white'}}
                    stickySectionHeadersEnabled ={false}
                    keyExtractor = {this.keyExtractor}
                    ListHeaderComponent= {this._renderListHeader}
                    extraData = {this.state.listDataArray}

                />
            </View>
        );

      };

    /**
     * 请求 banner数据
     * @returns {Promise.<void>}
     */
    async requestBannerData(){
           let {data} = await new MXRNetworkManager().get(api.bannerUrl);
           // console.log(data);
           let bannerArray = JSON.parse(data);

          if (bannerArray){
              this.setState({
                 bannerDataArray: bannerArray
              });
          }
       }

    /**
     * 请求书城首页数据
     * @returns {Promise.<void>}
     */
    async requestHomePageData(){
           let {data} = await new MXRNetworkManager().get(api.HomePageUrl);
           let HomePageDict = JSON.parse(data);
            let listArray = HomePageDict['list'];
            if (listArray){
                var  newListArray = [];
                listArray.forEach((module , i) => {
                    let itemsArray = module['items'];
                    newListArray.push({key :i ,data : [itemsArray],module : module});
                });

                this.setState({
                    HomePageDataArray:newListArray
                });
            }
       }

    /**
     *  banner 点击
     *
     */
    _onPressBanner(bannerItem : Object){
        alert(bannerItem.bannerUrl)
    }

    /**
     *  图书 点击
     * @param bookItem
     * @private
     */
    _onPressBookItem (bookItem : Object){
        this.props.navigation.navigate('BookDetailView',{'bookItem' : bookItem})
    }

    /**
     *  专区点击
     * @param zoneItem
     * @private
     */
    _onPressZoneItem (zoneItem : Object){
        /*
        * itemDesc = "\U5c0f\U68a6\U59d0\U59d0\U6709\U5f88\U591a\U5f88\U591a\U6709\U8da3\U7684\U4e66\Uff0c\U6050\U9f99\U3001\U52a8\U690d\U7269\U3001\U6d77\U6d0b\U3001\U8349\U539f\U3001\U5929\U6587\U5730\U7406\U3001\U4eba\U6587\U5386\U53f2\Uff0c\"\U60a6\U8bfb\U9986\"\U91cc\U90fd\U80fd\U770b\U5230\U54e6\U3002";
         itemIcon = "http://img.mxrcorp.cn/mxroms/20170517110015682_ht1cm2wm3x.png";
         itemId = 54;
         itemKey = special;
         itemName = "\U5c0f\U68a6\U59d0\U59d0\U60a6\U8bfb\U9986";
        *
        * */
        this.props.navigation.navigate('SubjectDetailView',{"item" : zoneItem})
    }

    /**
     * 点击搜索
     * @private
     */
    _onPressSearch (){
        alert(1)
    }


};
const styles =  StyleSheet.create({
    wrapper :{
        width: Screen.width,
        height: Screen.width * 0.6,
        backgroundColor: 'red'
    },

    list: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        margin : px2dp(5)
    },
    flatListStyle : {
        paddingTop : px2dp(15),
        paddingBottom : px2dp(15),
        backgroundColor :'white'
    },
});