/**
 * Created by mxr on 2017/7/26.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import px2px from '../Utils/px2dp'
import computeTime from '../Utils/computeTime'
import AllSubjectView from './all-subject/View'
import AllSubjectTableView from "./all-subject/View/index";
export default class MeView extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    componentWillMount() {
       console.log(computeTime('2017-07-25T18:56:33.904Z'));
    }

      render(){

          return (
              <AllSubjectTableView/>
          );
      };
}