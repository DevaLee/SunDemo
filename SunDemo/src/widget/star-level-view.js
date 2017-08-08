/**
 * Created by ritamashin on 2017/8/4.
 */

import React,{PureComponent} from 'react';
import {View ,Image,StyleSheet} from 'react-native';
import px2dp from '../Utils/px2dp'

export default class StarLevelView extends PureComponent {
    static propTypes={
        starCount : React.PropTypes.number
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

     render (){

         let star = this.props.starCount;
         var halfStar = star % 2;
         var fullStar = (star - halfStar) / 2;
         var noStar = 5 - fullStar - halfStar;

         var fullStarArray = [];
         var halfStarArray = [];
         var noStarArray = [];

         for (var j = 0; j < fullStar; j++) {
             fullStarArray.push(1);
         };

         for (var j = 0; j < halfStar; j++) {
             halfStarArray.push(1);
         }

         for (var j = 0; j < noStar; j++) {
             noStarArray.push(1);
         }
          return (
              <View style={{flexDirection : 'row'}}>
                  {fullStarArray.map((item,i) => (<Image source={require('../res/book-sns/book_SNS_icon_heart_fill.png')}
                                                         style={styles.bookStar} key = {i}/>))}
                  {halfStarArray.map((item,i) => (<Image source={require('../res/book-sns/book_SNS_icon_heart_half.png')}
                                                         style={styles.bookStar} key = {i}/>))}
                  {noStarArray.map((item,i) => (<Image source={require('../res/book-sns/book_SNS_icon_heart_empty.png')}
                                                       style={styles.bookStar} key = {i}/>))}
              </View>
          )
     }
}
const styles = StyleSheet.create({
    bookStar :{
        width : px2dp(12),
        height : px2dp(12),
        marginLeft: px2dp(2),
    }
});