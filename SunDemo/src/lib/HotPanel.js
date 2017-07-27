/**
 * Created by mxr on 2017/7/26.
 */
import  React,{Component ,PropTypes} from 'react';
import {StyleSheet , View, Text, Image, Dimensions, TouchableOpacity, Platform, TouchableNativeFeedback, PixelRatio} from 'react-native';
import px2dp from '../Utils/px2dp';
import Icon from 'react-native-vector-icons/Octicons';
import theme from '../config/theme';

export default class HotPanel extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isHotPanelShow : true,
            data : [],
        };
      }

      static propTypes = {
          title : PropTypes.string.isRequired,
          contents : PropTypes.array
      };

    componentWillMount() {
        for (let i in this.props.contents){
            this.state.data.push(this.props.contents[i]);
        }
        this.state.data.sort((item1 , item2)=>{
            if (item1.collectionCount < item2.collectionCount ){
                return 1;
            }
            if (item1.collectionCount > item2.collectionCount) {
                return -1;
            }
            return 0;
        });
        this.state.data.length = 3;
    }

    render(){
        <View>
            <Text> 面板 </Text>
        </View>
    };
};