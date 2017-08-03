/**
 * Created by mxr on 2017/7/27.
 */
import React,{PureComponent} from 'react';
import {
    View, Text, FlatList,TouchableOpacity,Image,Button,ListView
} from 'react-native';
import SubjectController from '../Controller'
import SubjectProxy from '../Mode/subject-proxy'
import px2dp from '../../../Utils/px2dp'
import SubjectItem from './subject-item'
import SubjectDetail from '../../subject-detail/view'
import {RefreshState , RefreshListView} from '../../../widget'

export default class AllSubjectTableView extends PureComponent {



    static navigationOptions =({navigation})=>({
        headerLeft:<Button color={'black'} onPress={()=>( [SubjectProxy.instance._removeAllSubject(),navigation.goBack()
            ])} title={'返回'} />

    });

   defaultProps  = {
        indexNumber: 0
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataArray : [],
            refreshing : false,

            haveNoMoreData : false
        };
      }



    componentDidMount() {
        this._fetchData()
    }

      render (){
          return (
              <FlatList
                  style={{ backgroundColor :'#eee' }}
                  data={this.state.dataArray}
                  renderItem={({item}) => <SubjectItem item = {item} pressHandleFunc= {(item)=>{this._pressHandleFunc(item)}}/>}
                  onRefresh = { ()=>(this._fetchData())}
                  refreshing={this.state.refreshing}
                  ItemSeparatorComponent={this._renderSeperatorView}
                  ListFooterComponent = {this._renderFooterView}
                  ListEmptyComponent = {this._renderEmptyView}
                  getItemLayout={(data,index) =>({length :px2dp(375) / 16.0 * 6,offset:px2dp(375) / 16.0 * 6 *index,index})}
                   onEndReachedThreshold={0.01}
                   onEndReached = {()=>{this._fetchData()}}
              />
          );
      }

    async _fetchData(){
          if (this.state.refreshing === true) return;

          let number = this.props.indexNumber;
          let newNumber = number + 1;

          this.props.indexNumber = newNumber;
          // this.setState({indexNumber : newNumber});
          let data = await new SubjectController.instance._getSubjectData(this.props.indexNumber);
          this.setState({refreshing : false});
          if(data.length > 0){
              this.setState(
                  {dataArray: data , haveNoMoreData:false}

              );
          }
    }
    _renderSeperatorView = () => {return <View style={{backgroundColor: 'yellow',height :px2dp(0)}}/>}
    _renderFooterView = ()=> {
        if (this.state.haveNoMoreData){
            return <View style={{justifyContent : 'center',alignItems : 'center',height:px2dp(40)}}><Text> 没有更过数据了 </Text></View>

        }else {
            return <View/>
        }
    };

    _renderEmptyView = () =>{
        return (
            <View style={{justifyContent:'center',alignItems:'center',flex :1}}>
                <Text>oh,NO,没有数据 </Text>
            </View>
        );
    };
    _pressHandleFunc= (item)=>{
        this.props.navigation.navigate('SubjectDetail',{item :item})
    };
}

AllSubjectTableView.defaultProps = {
    index: 0,
};



// import  React, {Component} from 'react';
// import {
//     StyleSheet,
//     View,
//     FlatList,
//     Text,
//     Button,
//     Dimensions,
//     TouchableOpacity
// } from 'react-native';
// const { height, width } = Dimensions.get('window');
// var ITEM_HEIGHT = 100;
//
//
// export default class AllSubjectTableView extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             refreshing: false
//         };
//     }
//     _renderItem = (item) => {
//         let item1 = item;
//         var txt = '第' + item1.index + '个' + ' title=' + item1.item.title;
//         var bgColor = item1.index % 2 == 0 ? 'red' : 'blue';
//         return (
//             <TouchableOpacity onPress={() => {
//                 alert(txt);
//             } }>
//                 <Text style={[{ flex: 1, height: ITEM_HEIGHT, backgroundColor: bgColor, width: width / 2 }, styles.txt]}>{txt}</Text>
//             </TouchableOpacity>
//         )
//     }
//
//     _header = () => {
//         return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是头部</Text>;
//     }
//
//     _footer = () => {
//         return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是尾部</Text>;
//     }
//     _separator = () => {
//         return <View style={{ height: 2, backgroundColor: 'yellow' }}/>;
//     }
//     _onRefresh() {
//         alert('正在刷新中.... ');
//     }
//     render() {
//         var data = [];
//         for (var i = 0; i < 31; i++) {
//             data.push({ key: i, title: i + '' });
//         }
//         return (
//             <View style={{ flex: 1 }}>
//                 <Button title='滚动到指定位置' onPress={() => {
//                     //this._flatList.scrollToEnd();
//                     //this._flatList.scrollToIndex({viewPosition:0,index:8});
//                     this._flatList.scrollToOffset({ animated: true, offset: 2000 });
//                 } }/>
//                 <View style={{ flex: 1 }}>
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
//                 </View>
//
//
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     txt: {
//         textAlign: 'center',
//         textAlignVertical: 'center',
//         color: 'white',
//         fontSize: 30,
//     }
// });
