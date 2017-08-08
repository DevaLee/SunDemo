/**
 * Created by ritamashin on 2017/8/5.
 */
import React, {PureComponent} from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet,SectionList,FlatList,Image
} from 'react-native';
import px2px from '../../Utils/px2dp'

import theme from '../../config/theme'
import NavigationItem from '../../widget/NavigationItem'

import px2dp,{Screen} from '../../Utils/px2dp'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'
import {StarLevelView ,color} from '../../widget'

export default class DreamSNSBookView extends PureComponent {
       static propTypes :{
           bookInfo : React.PropTypes.object,
       }



        render(){
            // let bookInfo = {contentBookId : '75EF5A66CB93492E9653ABA4D25B7DA4',
            // contentBookLogo : "http://books.mxrcorp.cn/75EF5A66CB93492E9653ABA4D25B7DA4/UserPicture/bookIcon.png?t=20170728192334",
            // contentBookName : "我们爱科学",
            // contentBookStarlevel : 9};
            let bookInfo = this.props.bookInfo
            return (
                <TouchableOpacity style={[styles.container ,this.props.style]}
                                  activeOpacity={1}>
                    <Image source={{uri : bookInfo.contentBookLogo}}
                           defaultSource={require('../../res/book-sns/img_bookSNNS_book_defalt.png')}
                           style={styles.book_cover}/>
                    <View style={styles.book_detail_container}>
                        <Text style={styles.book_detail_name}> {bookInfo.contentBookName}</Text>
                        <View style={{flex : 1}}/>
                        <StarLevelView starCount={bookInfo.contentBookStarlevel}/>
                    </View>
                </TouchableOpacity>
            )
        }
}

DreamSNSBookView.defaultProps = {
    bookInfo : {contentBookId : '75EF5A66CB93492E9653ABA4D25B7DA4',
        contentBookLogo : "http://books.mxrcorp.cn/75EF5A66CB93492E9653ABA4D25B7DA4/UserPicture/bookIcon.png?t=20170728192334",
        contentBookName : "我们爱科学",
        contentBookStarlevel : 9}
}

const styles = StyleSheet.create({
   container :{
       backgroundColor : 'rgb(249,249,249)',
       padding : px2dp(10),
       flexDirection : 'row',
   },
   book_cover :{
       width : px2dp(40),
       height : px2dp(40),
       borderWidth : px2dp(0.5),
       borderColor : color.borderColor
   },
   book_detail_container :{
       marginLeft : px2dp(10),
       flexDirection: 'column',
   },
   book_detail_name :{
       color: '#333333',
       fontSize : 14,
   }

});
