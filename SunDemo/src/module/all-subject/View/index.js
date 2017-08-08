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
