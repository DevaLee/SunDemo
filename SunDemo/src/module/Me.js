/**
 * Created by mxr on 2017/7/26.
 */
import React, {Component} from 'react';
import {
    View,
    Text,TouchableOpacity
} from 'react-native';
import px2px from '../Utils/px2dp'
import computeTime from '../Utils/computeTime'
import AllSubjectTableView from './all-subject/View'
import {StackNavigator} from 'react-navigation'
import NewsPage  from './News'
import AllSubject from './all-subject/View'

export default class MeView extends Component {
    //
    // static  = ({ navigation }) => ({
    //         title: '专题',
    // });


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
      }

    componentWillMount() {
       console.log(computeTime('2017-07-25T18:56:33.904Z'));
    }

      render(){
          return (
             <AllSubject/>
          );
      };


}

