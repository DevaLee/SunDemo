/**
 * Created by mxr on 2017/7/27.
 */
import React,{PureComponent} from 'react';
import {Text, Image,View,StyleSheet,TouchableOpacity} from 'react-native'
import px2dp from '../../../Utils/px2dp'
export default class SubjectItem extends PureComponent{

    static propTypes ={
        item:React.PropTypes.object,
        pressHandleFunc : React.PropTypes.func
    };

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            item : this.props.item,
        };
      }

      render(){
          return (

          <TouchableOpacity onPress={()=>{
             this.props.pressHandleFunc && this.props.pressHandleFunc(this.props.item);
          }}>
              <View style={styles.containerStyle}>
                  <View style={{flex : 20 }}>
                      <Text style={styles.news_text}>{ this.state.item.title}  </Text>
                      <Image style={[styles.news_image]} source={{uri : this.state.item.cover}}
                             resizeMode='stretch'
                      />
                  </View>
              </View>
          </TouchableOpacity>
          );
      }
}
const styles = StyleSheet.create({
   containerStyle :{
       marginTop : px2dp(5),
       backgroundColor :'white'
   },
    news_text :{
       color : '#888',
        height : px2dp(30),
        lineHeight : px2dp(30),
        fontSize : px2dp(17),
        marginLeft : px2dp(10),
        marginRight :px2dp(10)

    },
    news_image :{
        height: px2dp(375) / 16.0 * 6,
        marginLeft:px2dp(10),
        marginRight:px2dp(10),
        marginBottom : px2dp(10)

    }
});