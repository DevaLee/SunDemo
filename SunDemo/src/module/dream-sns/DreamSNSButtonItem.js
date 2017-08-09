/**
 * Created by ritamashin on 2017/8/6.
 */
import React,{PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {computerTime ,px2dp,SNSTime} from '../../Utils'

export default class DreamSNSButtonItem extends PureComponent {
    static propTypes :{
        icon : React.PropTypes.source,
        normalImage : React.PropTypes.source,
        title : React.PropTypes.string,
        iconStyle : React.PropTypes.style,
        titleStyle : React.PropTypes.style,
       // info : React.PropTypes.object,
        type : React.PropTypes.string,  // ADD_PRAISE ,ADD_COMMENT , TRANSMIT
    };
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selected : false,
            praiseNum : '',
            title : ''
        };
      };

    componentDidMount() {
        if (this.props.type === 'ADD_PRAISE'){
            this.setState({
                title : this.props.title,
                praiseNum : this.props.info.praiseNum,
            });
        }else if(this.props.type === 'ADD_COMMENT'){
            // alert('评论');
        }else if(this.props.type === 'TRANSMIT'){
            // alert('转发');
        }
    }


    render (){
        let normalImage = this.props.normalImage && <Image source={this.props.normalImage}
                                             style={[styles.imageIcon , this.props.iconStyle]}/>
        let selectedImage = this.props.selectedImage && <Image source={this.props.selectedImage}
                                                           style={[styles.imageIcon , this.props.iconStyle]}/>

        let title =  <Text style={[styles.title ,this.props.titleStyle]} >
                {this.state.title}</Text>
        let icon = ()=>{
            if (this.state.selected){
                return selectedImage;
            }else {
                return normalImage
            }
        }

        return (

            <View style={styles.container}>
                <TouchableOpacity style={styles.container} onPress={ ()=> this._btnClick()}>
                    {icon()}
                </TouchableOpacity>
                {title}
            </View>

        )
    }

    _btnClick= ()=>{
        if (this.props.type === 'ADD_PRAISE'){
            if (this.state.selected){
                if(this.state.praiseNum === 1){
                    this.setState({
                        title : '点赞',
                        selected : false,
                        praiseNum : 0,
                    })
                }else {
                    this.setState({
                        title : this.state.praiseNum - 1,
                        selected : false,
                        praiseNum: this.state.praiseNum -1,

                    })
                }
            }else {
                this.setState({
                    title : this.state.praiseNum + 1,
                    selected : true,
                    praiseNum : this.state.praiseNum + 1
                })
            }
        }else if(this.props.type === 'ADD_COMMENT'){
            alert('评论');
        }else if(this.props.type === 'TRANSMIT'){
            alert('转发');
        }
    }

}

const styles = StyleSheet.create({
    container :{
        flexDirection : 'row',

        justifyContent :'center',
        alignItems : 'center'
    },
    imageIcon :{
        width : px2dp(20),
        height : px2dp(20),
    },
    title :{
        color : '#777777',
        fontSize : 12,
        width: px2dp(50),
    }

});