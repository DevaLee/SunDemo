/**
 * Created by mxr on 2017/7/26.
 */
import React, {Component} from 'react';
import {
    View,
    Text,TouchableOpacity,FlatList,SectionList
} from 'react-native';
import px2px from '../../Utils/px2dp'
import computeTime from '../../Utils/computeTime'
import AllSubjectTableView from '../all-subject/View'
import {StackNavigator} from 'react-navigation'
import MeHeaderView from './MeHeaderView'
import MeInfoItem from './MeInfoItem'
import api from '../../api'


export default class MeView extends React.Component {

     static navigationOptions = ({ navigation }) => ({
         headerTitle: '我',
         headerStyle:{backgroundColor : 'white'}
    });
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            personInfoArray : [],
        };
      }

//{/*<AllSubject style={{marginTop : px2px(64)}} />*/}

    componentWillMount() {
       this._fetchPersonListData();
    }


    _renderItem(itemInfo){
        return(
            <MeInfoItem itemInfo ={itemInfo.item.data}/>
        )
    }

    _renderHeader(){
        return (
            <MeHeaderView/>
        )
    }
    _renderSectionHeader(){
        return (
            <View style={{backgroundColor : 'rgb(243,244,246)',height : px2px(10)}}/>
        )
    }

    _keyExtractor (item: Item, index: number){
        return item
    }
      render(){
        const {navigate} = this.props.navigation;
          return (
              <View style={{backgroundColor :'rgb(242,243,245)'}}>
                  <SectionList renderItem = {(itemInfo) => this._renderItem(itemInfo)}
                               renderSectionHeader={() => this._renderSectionHeader()}
                               sections={this.state.personInfoArray}
                               ListHeaderComponent={() => this._renderHeader()}


                  />
              </View>
          );
      };

    _fetchPersonListData(){
        let personArray = api.MeData;
        if (Array.isArray(personArray)) {
            let sectionListData = personArray.map((itemsArray, i) => {
                let listData = itemsArray.map((item , i) =>{
                    return {
                        data : item,
                        key : i +'l'
                    }
                });
                return {
                    data: listData,
                    key: i+'s',
                }
            });

            this.setState({
                personInfoArray: sectionListData
            });
        }
    }

    /**
     *  点击事件
     * @private
     */
      _clickMe(){
          this.props.navigation.navigate('AllSubjectTableView');
      }
}

