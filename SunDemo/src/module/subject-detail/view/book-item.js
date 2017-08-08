/**
 * Created by ritamashin on 2017/7/29.
 */
import React,{Component} from 'react';
import {
    View,Text,TouchableOpacity,Image,StyleSheet
}from 'react-native';
import {px2dp} from '../../../Utils'

export default class BookItem extends Component {
    static propTypes :{
        bookItemStyle : React.PropTypes.style,
        width : React.PropTypes.number,
        height : React.PropTypes.number,
    }

    render(){
        let bookItem = this.props.bookItem;
        // let bookItem = {"bookGUID": "28E7C31499C64170B2BFE3D195880ABA",
        //     "bookCoverURL": "http://books.mxrcorp.cn/28E7C31499C64170B2BFE3D195880ABA/UserPicture/bookIcon.png?t=1482491784000",
        //     "bookName": "儿童探索百科—浩瀚的宇宙",
        //     "bookDESC": "本书从大爆炸理论谈起，介绍了有关银河系、太阳系、太阳、地球、月球、水星、金星、木星、火星及彗星等知识，还介绍了黑洞是怎么回事，还有宇宙空间站等。书中每一页都配上清晰的照片或是精美的插图，并设有小贴士和你知道吗等栏目，带你一起去探索浩瀚宇宙的无穷奥秘。",
        //     "bookSize": 14440983,
        //     "bookPublisherID": 2702,
        //     "bookType": 0,
        //     "bookFileList": "http://books.mxrcorp.cn/28E7C31499C64170B2BFE3D195880ABA/filelist.dat",
        //     "bookUnlockType": 1,
        //     "bookLockedPage": "P11",
        //     "bookStar": 8,
        //     "bookReadTimes": 339793,
        //     "bookPrice": 6000,
        //     "bookSeries": 69,
        //     "bookCategory": 5}
        return (
            <TouchableOpacity style={[styles.container,this.props.style]} onPress={() => this.props.onPressBookItem && this.props.onPressBookItem(bookItem)}>
                <Image style={styles.book_Image} source={{uri : bookItem.bookCoverURL}} resizeMode={'cover'}/>
                <Text style={styles.book_Name} numberOfLines={2}> {bookItem.bookName} </Text>
                <View style={{flex : 1}}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    book_Image :{
        width : px2dp(100),
        height : px2dp(100 )* 1.4,

    },

    book_Name : {
        color : '#666666',
        fontSize : 10,
        marginTop : px2dp(5),
        marginBottom : px2dp(5),
        alignSelf :'center',
        width : px2dp(100),
        textAlign : 'center'
    },

    container :{
        justifyContent : 'center',
        borderWidth : px2dp(1),
        borderColor : '#e0e0e0',
        height : px2dp(100) * 1.4 + px2dp(34)
    }

});
