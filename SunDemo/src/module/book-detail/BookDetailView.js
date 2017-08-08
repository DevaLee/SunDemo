/**
 * Created by ritamashin on 2017/8/3.
 */
import React, {PureComponent} from 'react';
import {View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import px2dp  from '../../Utils/px2dp'
import {color ,StarLevelView} from '../../widget'
import NavigationItem from '../../widget/NavigationItem'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'

export default class BookDetailView extends  PureComponent {
    static navigationOptions = ({navigation}) =>({
        headerStyle : {backgroundColor : 'white'},
        title : '图书详情',
        headerTintColor : color.themeColor,
        headerTitleStyle : {color : '#333333'}

    });

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            bookInfo : {},
            expand : false
        };
      }

    componentDidMount() {
          let {bookItem} = this.props.navigation.state.params;

        this.requestBookInfo(bookItem.itemId);
    }

      render(){
          let bookInfo = this.state.bookInfo;
          let star = bookInfo.bookStar;
          return(
              <View style={styles.container}>
                  {/*图书信息*/}
                  <View style={styles.headerContainer}>
                      <Image style={styles.bookCover} source={{uri : bookInfo.bookCoverURL}}/>
                      <View style={{flex : 1 ,justifyContent :'flex-end',paddingLeft : 10,}}>
                          <Text style={styles.bookName}> {bookInfo.bookName}  </Text>
                          <StarLevelView starCount = {star}/>
                          <View style={{flex : 1}}/>
                          <Text style={styles.bookPublish}> {bookInfo.bookDownloadTimes}  </Text>
                          <Text style={styles.bookPublish}> {bookInfo.bookReadTimes} </Text>
                          <Text style={styles.bookPublish}> {bookInfo.bookPublisherName} </Text>
                      </View>
                  </View>
                  <View style={{backgroundColor:'rgb(236,236,236)',height : px2dp(10)}}/>
                  {/*图书简介*/}
                  <View style={styles.bookIntroContainer}>
                      <View style={styles.bookIntroduceHeader}>
                          <View style={styles.greenBlock} />
                          <Text style={{fontWeight:'bold'}}> 图书简介 </Text>
                      </View>
                      <View>
                          <Text style={{color :'#aaaaaa',fontSize:13}}
                                numberOfLines={this.state.expand ? 0 : 3 }> {bookInfo.bookDESC} </Text>
                          <TouchableOpacity onPress={this.onPressExpand.bind(this)} >
                              <View style={{flexDirection: "row", alignItems:'center'}}>
                                  <View style={{flex : 1}}/>
                                  <Image style={{width :px2dp(10),height:px2dp(7.5)}}
                                    source={!this.state.expand ? require('../../res/book-detail/down_arrow.png') : require('../../res/book-detail/up_arrow.png')}
                                  />
                                  <Text style={styles.expandText}
                                  >{this.state.expand ? '收起':'展开'}  </Text>
                              </View>

                          </TouchableOpacity>
                      </View>
                      <View >
                          <Image style={{width : px2dp(375) * 0.5 , height : px2dp(64) * 4, alignSelf :'center'}}
                                 source={{uri : bookInfo.bookCoverURL}}
                          />
                      </View>
                      <View style={{alignItems : 'center', justifyContent:'center',marginTop: px2dp(10)}}>
                          <Text style={{color : '#cccccc' ,fontSize : 12}}> {bookInfo.desclaim}</Text>
                      </View>


                  </View>
              </View>
          );
      }

    /**
     * 点击 展开
     */
    onPressExpand = () =>{
        this.setState({
            expand: !this.state.expand
        })
    };

    /**
     *  图书详情
     * @param bookGuid
     * @returns {Promise.<void>}
     */
    async requestBookInfo(bookGuid){
        let url = api.bookDetailUrl + bookGuid;
        let {data , code, } = await new MXRNetworkManager().get(url);
        console.log(data);
        let bookInfo = JSON.parse(data);
        if(bookInfo){
            if(bookInfo.bookDownloadTimes >= 10000){
                let downCount = (bookInfo.bookDownloadTimes / 10000).toFixed(1);
                bookInfo.bookDownloadTimes = `下 载：${downCount}万`}
                else {
                bookInfo.bookDownloadTimes = `下 载：${bookInfo.bookDownloadTimes}`;
            }
            if(bookInfo.bookReadTimes >= 10000){
                let downCount = (bookInfo.bookReadTimes / 10000).toFixed(1);
                bookInfo.bookReadTimes = `阅 读：${downCount}万`}
            else {
                bookInfo.bookReadTimes = `阅 读：${bookInfo.bookReadTimes}`;
            }
            bookInfo.bookPublisherName = `发布人：${bookInfo.bookPublisherName}`
            bookInfo.desclaim = "我公司无歪曲或虚饰申报资料的事情，所有提交资料的真实性、合法性、完整性由我公司负责，并接受有关审核部门为审核此项资金而进行的必要核查，承担相关法律责任"
            this.setState({
                bookInfo:bookInfo
            });
        }else {

        }

    }
}

const styles = StyleSheet.create({
   container :{
       flex : 1,
       backgroundColor :'white'
   },
   headerContainer :{
       padding : 10,
       height: px2dp(64) * 1.5 + 20,
       flexDirection : 'row',
       backgroundColor :'white'
   },

    bookCover :{
       width : px2dp(64) *1.2,
        height : px2dp(64) * 1.2 / 0.73,
    },
    bookName :{
      color : '#333333',
        fontSize : 14,
        fontWeight : 'bold',
    },
    bookPublish :{
      color: '#999999',
        fontSize: 12,
        marginTop :4
    },
    bookIntroContainer :{
       padding:px2dp(10),
        backgroundColor :'white'
    },
    bookIntroduceHeader :{
       flexDirection:'row',

    },
    greenBlock :{
       width:px2dp(5),
        backgroundColor : color.themeColor,
        marginRight : px2dp(10),
    },
    introduceText:{

    },
    expandText :{
        marginRight:px2dp(10),
        marginLeft: px2dp(10),

        color : '#777777'
    },
});