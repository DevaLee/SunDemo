/**
 * Created by ritamashin on 2017/7/29.
 */
import React,{Component} from 'react';
import {View ,Text,FlatList,Image,StyleSheet} from 'react-native'
import px2dp, {Screen} from '../../../Utils/px2dp'
import Book from  './book-item'
import BookModel from '../model/book-model'

export default class SubjectDetailView extends Component{
    static propTypes ={
        id : React.PropTypes.number
    };
    static navigationOptions = ({navigation})=>{
        const {state} = navigation;
        const {item} = state.params;
        return {
            title : item.name,
            headerBackTitle : '返回'
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
        };

      }

    componentDidMount() {
          this.setState({
             item : this.props.navigation.state.params.item
          });

        // this._fetchData();
    }
    render(){
        return(
            <FlatList
                ItemSeparatorComponent={this._renderSeperatorview()}
                ListEmptyComponent = {this._renderEmptyView()}
                ListFooterComponent= {this._renderFooterView()}
                ListHeaderComponent = {this._renderHeaderView()}
                numColumns = {3}
                columnWrapperStyle={{borderWidth : 1 ,borderColor:'red'}}
                data ={this.state.dataSource}
                extraData = {this.state.item}
                renderItem ={({item}) => <Book item={item}/>}
            />


            //                     <FlatList
//                         ref={(flatList) => this._flatList = flatList}
//                         ListHeaderComponent={this._header}
//                         ListFooterComponent={this._footer}
//                         ItemSeparatorComponent={this._separator}
//                         renderItem={this._renderItem}
//
//
//                         numColumns ={2}
//                         columnWrapperStyle={{ borderWidth: 2, borderColor: 'black' }}
//                         refreshing={this.state.refreshing}
//                         getItemLayout={(data, index) => (
//                             { length: ITEM_HEIGHT, offset: (ITEM_HEIGHT + 2) * index, index }
//                         ) }
//                         onRefresh={this._onRefresh}
//                         onEndReachedThreshold={0.1}
//                         onEndReached={(info) => {
//                             alert("滑动到底部了");
//                         } }
//
//                         onViewableItemsChanged={(info) => {
//                             //    alert("可见不可见触发");
//                         } }
//                         data={data}>
//                     </FlatList>

        );
    }
    _fetchData (){
        let dataArray = [];
        for (var i = 0;i < 20; i++){
            let book = new BookModel();
            book.bookGuid = '`${i}`';
            dataArray.push(book);
        }
       this.setState({
           dataSource : dataArray
       });
    }



    /**
     *  行分割线
     * @returns {XML}
     * @private
     */
    _renderSeperatorview = () => {
        return <View/>
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

    _renderNoMoreData = () => {
        return <View style={{justifyContent : 'center',alignItems :'center'}}><Text>没有更多数据了</Text> </View>
    };
    _renderNullView = () => {
        return <View/>
    };

    _renderHeaderView = ()=> {
        let cover = this.state.item.cover;
        console.log('专区封面'+ `${this.state.item.cover}`)
      return (

          <View style={headerStyles.headerContainer}>
              <View>
                  <Image style={[headerStyles.headerImage]} source={{uri : this.state.item.cover}} />
              </View>
              <View style={headerStyles.headerTextContainer}>

                      <Text style={headerStyles.headerText}>{this.state.item.description}</Text>

              </View>
              <View style={headerStyles.headerBottomSep}>

              </View>

          </View>
      );
    }
}

const headerStyles = StyleSheet.create({
   headerContainer :{
       width : px2dp(375),
       height: px2dp(375) * 0.6,
   },
   headerImageContainer :{
       flex: 6,
   },
   headerImage : {
       width: px2dp(375),
       height: px2dp(375) * 0.6 * 0.6
   },
   headerTextContainer:{
       flex: 4,
       flexDirection :'row'
   },
   headerText:{
       fontSize : px2dp(16),
       position :'absolute',
       top :px2dp(10),left :px2dp(10),right :px2dp(20),bottom : px2dp(10),
       color :'#888'
   },
   headerBottomSep :{
       flex: 1,
       backgroundColor : '#eee',

   }

});