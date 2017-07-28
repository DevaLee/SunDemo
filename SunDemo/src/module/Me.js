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

export default class MeView extends React.Component {

     static navigationOptions = ({ navigation }) => ({
         headerTitle: 'webstorm',
    });


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
      }

//{/*<AllSubject style={{marginTop : px2px(64)}} />*/}

    componentWillMount() {
       console.log(computeTime('2017-07-25T18:56:33.904Z'));
    }

      render(){
        const {navigate} = this.props.navigation;


          return (
            <View style={{backgroundColor : 'white'}}>
                <View style={{backgroundColor: 'rgb(246,246,246)',height :px2px(63.5)}}>
                    <View style={{backgroundColor :'rgb(100,100,100)',height : px2px(0.5),marginBottom : 0}}/>
                </View>
                <View>
                    <TouchableOpacity onPress={this._clickMe.bind(this)}>
                        <Text> 点我 </Text>
                    </TouchableOpacity>
                </View>

            </View>




          );
      };

      _clickMe(){
          this.props.navigation.navigate('AllSubjectTableView');
      }
}

