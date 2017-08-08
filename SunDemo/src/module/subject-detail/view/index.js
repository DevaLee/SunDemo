/**
 * Created by ritamashin on 2017/7/29.
 */
import React,{Component} from 'react';
import {View ,Text,FlatList,Image,StyleSheet} from 'react-native'
import  {px2dp} from '../../../Utils'
import {color} from '../../../widget'
import Book from  './book-item'
import BookModel from '../model/book-model'
import MXRNetWorkManager from '../../../lib/network-manager/'
import BookItem from './book-item'
export default class SubjectDetailView extends Component{
    static propTypes ={
        id : React.PropTypes.number
    };
    static navigationOptions = ({navigation})=>{
        const {state} = navigation;
        const {item} = state.params;


        return {
            title : item.itemName,
            headerBackTitle : '返回',
            headerStyle : {backgroundColor: 'white'},
            headerTintColor : color.themeColor,
            headerTitleStyle : {color : '#333333'}
        }
    };


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            haveNoMoreData : false,
            item : '',
            dataSource : [],
            originalDataArray :[],
            pageNum : 1,
            isBusy : true,
        };

      }

    componentDidMount() {
        this._fetchData()
    }
    /**
     *  行分割线
     * @returns {XML}
     * @private
     */
    _renderSeperatorview = () => {
        return <View style={{backgroundColor:'white', height:px2dp(17)}}/>
    };
    /**
     *  数据为空界面
     * @returns {XML}
     * @private
     */
    _renderEmptyView = () => {
        return <Text> 没有数据 </Text>
    };
    /**
     *  尾部界面
     * @returns {*}
     * @private
     */
    _renderFooterView = () => {
        return (
            this.state.haveNoMoreData ? this._renderNoMoreData() :  this._renderNullView()
        );
    };

    /**
     * 渲染没有更多数据
     * @returns {XML}
     * @private
     */
    _renderNoMoreData (){
         return (<View style={{justifyContent : 'center',alignItems :'center', height:px2dp(40)}}>
                        <Text style={{color:'#333333'}}>~~没有更多数据了~~</Text>
                </View>)
        //return (<Text>没有更多数据了</Text>)
    };

    /**
     * 渲染空的视图
     * @returns {XML}
     * @private
     */
    _renderNullView ()  {
        return <View/>
    };

    /**
     * 渲染专题介绍
     * @returns {XML}
     * @private
     */
    _renderHeaderView = ()=> {
        const zoneItem = this.props.navigation.state.params.item;
        return (
            <View style={headerStyles.headerContainer}>
                {/*专题图片*/}
                <View>
                    <Image style={[headerStyles.headerImage]} source={{uri : zoneItem.itemIcon}} />
                </View>
                {/*专题描述*/}
                <Text style={headerStyles.headerText}>{zoneItem.itemDesc}</Text>
                {/*分割线*/}
                <View style={headerStyles.headerBottomSep}/>

            </View>
        );
    }
    /**
     * key 生成器
     * @param item
     * @param index
     * @returns {*}
     */
    keyExtractor = (item ,index) =>{
        return index
    }

    /**
     * 渲染
     * @param rowInfo
     * @private
     */
    _renderBookItem = (rowInfo ,rowNum) =>{
        if (rowInfo.item.length !== 2){
            return (
                <View style={{flexDirection :'row',justifyContent : 'space-between',paddingLeft:px2dp(10),paddingRight:px2dp(10)}}>
                    {rowInfo.item.map((bookItem , column) =>(
                        <BookItem bookItem = {bookItem} key={bookItem.bookGUID}
                                  onPressBookItem = {(bookItem) => this._onPressBookItem(bookItem)}/>
                    ))}
                </View>
            )
        }else {
            let marRig = (px2dp(375) - px2dp(300)- px2dp(20)) / 2.0;
            return (
                <View style={{flexDirection :'row',justifyContent : 'flex-start',paddingLeft :px2dp(10)}}>
                    {rowInfo.item.map((bookItem , column) =>(
                        <BookItem bookItem={bookItem} key={bookItem.bookGUID}
                                  style={{marginRight : marRig}}/>
                    ))}

                </View>
            )
        }
    }

    /**
     * 渲染总视图
     * @returns {XML}
     */
    render(){
        return(
            <FlatList
                ItemSeparatorComponent={this._renderSeperatorview}
                ListEmptyComponent = {this._renderEmptyView}
                ListFooterComponent= {this._renderFooterView}
                ListHeaderComponent = {this._renderHeaderView}
                data ={this.state.dataSource}
                renderItem ={this._renderBookItem}
                keyExtractor = {this.keyExtractor}
                style={headerStyles.flatStyle}
                onEndReachedThreshold ={0.1}
                onEndReached={() => this._fetchNextPageData()}
            />
        );
    }

    /**
     * 获取数据
     * @returns {Promise.<void>}
     * @private
     */
    async _fetchData (){
        const item = this.props.navigation.state.params.item;
        let url = `https://bs-core.mxrcorp.cn/home/recommend/${item.itemId}/books?rows=9&page=${this.state.pageNum}`;
         console.log('专区URL' + url);
        let {data} = await new MXRNetWorkManager().get(url);
         console.log('专区详情' + data);
        if (data){
            let dataDict = await JSON.parse(data);
            let listArray = dataDict['list'];
            if (Array.isArray(listArray)){

                if (listArray.length === 0){
                    this.setState({
                        haveNoMoreData : true,
                        isBusy : false,
                    })
                    return
                }

                let newDataArray = this.state.originalDataArray;
                newDataArray.push.apply(newDataArray,listArray);

                let dataSourceArray = [];
                for (let i = 0; i < newDataArray.length / 3 ; i++){
                    let subArray = [];
                    for (let j = 0; j < 3; j++){
                        if ((i * 3 + j) <newDataArray.length ){
                            let bookItem = newDataArray[i * 3 + j];
                            subArray.push(bookItem);
                        }
                    }
                    dataSourceArray.push(subArray);
                }
                this.setState({
                    dataSource:dataSourceArray,
                    originalDataArray: newDataArray,
                    isBusy:false,
                    haveNoMoreData :false,
                });
            }
        }else {
            this.setState({
                haveNoMoreData:true,
                isBusy :false,
            })
        }
    }

    /**
     * 下拉刷新
     * @returns {Promise.<void>}
     * @private
     */
    async _fetchNextPageData(){
        if (this.state.isBusy === true) return;
        this.setState({
            isBusy : true,
            pageNum: this.state.pageNum + 1,
        })
        await this._fetchData();

    }

    // 点击回调事件

    /**
     *  点击图书
     * @param bookItem
     * @private
     */
    _onPressBookItem(bookItem){
        //对类型进行转换
        bookItem.itemId = bookItem.bookGUID;
        this.props.navigation.navigate('BookDetailView',{'bookItem' : bookItem});
    }

}

const headerStyles = StyleSheet.create({
   headerContainer :{
       backgroundColor : 'white'
   },
   headerImageContainer :{

   },
   headerImage : {
       width: px2dp(375),
       height: px2dp(375) * 0.6 * 0.6
   },
   headerTextContainer:{

   },
   headerText:{
       fontSize : px2dp(14),
       color :'#cccccc',
       margin :px2dp(15)
   },
   headerBottomSep :{
       backgroundColor : '#eee',

   },
   flatStyle:{
       backgroundColor : 'white',
   }

});