/**
 * Created by ritamashin on 2017/7/29.
 */
import React,{Component} from 'react';
import {
    View,Text
}from 'react-native';

export default class Book extends Component {
    static propTypes = {
      item : React.PropTypes.object
    };

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){
          return (
              <View >
                  <Text> {this.props.item.bookGuid} </Text>
              </View>
          );
    }
}