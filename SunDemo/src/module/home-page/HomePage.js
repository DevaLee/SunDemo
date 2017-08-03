/**
 * Created by mxr on 2017/7/26.
 */
import React,{Component} from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet,SectionList,FlatList
} from 'react-native';
import px2px from '../../Utils/px2dp'

import theme from '../../config/theme'
import News from '../News'
import NavigationItem from '../../widget/NavigationItem'
import HomePageHeaderView from './HomePageHeaderView'
import px2dp,{Screen} from '../../Utils/px2dp'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'
import HomePageSectionHeader from './HomePageSectionHeader'
import HoemPageBookItem from './HoemPageBookItem'
import HomePageZoneItem from './HomePageZoneItem'

export default class HomePageView extends React.Component {

    static navigationOptions  = ({navigation}) =>({
        headerRight : <NavigationItem icon={require('../../res/home-page/search_green.png')}/> ,
        headerTitle : <NavigationItem icon={require('../../res/book-detail/down_arrow.png')}
                                      title='为你推荐' containerStyle={{flexDirection : 'row-reverse'}}
                                      iconStyle ={{width : 10, height : 7.5}}
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
                                          onPressZoneItem= {(this._onPressZoneItem)}

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

    keyExtractorFlatList = (item : Object, index : number) =>{
        return index;
    }

    keyExtractor = (item: Object, index: number) => {
        return item
    }
    _renderSectionHeader = (module) => {
        return ( <HomePageSectionHeader module={module.section.module} />)
    }
    _renderListHeader = () => {
        return (<HomePageHeaderView imageArray = {this.state.bannerDataArray}
                                    onPressBanner={(this._onPressBanner)} />)
    }
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

        //alert(bookItem.itemId)
    }

    /**
     *  专区点击
     * @param zoneItem
     * @private
     */
    _onPressZoneItem (zoneItem : Object){
        alert(zoneItem.itemId)
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
        margin : 5
    },
    flatListStyle : {
        paddingTop : 15,
        paddingBottom : 15,
        backgroundColor :'white'
    },
});