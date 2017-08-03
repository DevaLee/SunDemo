/**
 * Created by ritamashin on 2017/8/2.
 */
import React ,{PureComponent} from 'react';
import {View , Image, Text,TouchableOpacity, StyleSheet} from 'react-native';
import px2dp from '../../Utils/px2dp'

export default class HomePageBookItem extends PureComponent {

    render(){
        let bookItem = this.props.bookItem;

        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPressBookItem(bookItem)}>
                <Image style={styles.book_Image} source={{uri : bookItem.itemIcon}} resizeMode={'cover'}/>
                <Text style={styles.book_Name} numberOfLines={2}> {bookItem.itemName} </Text>
                <View style={{flex : 1}}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
   book_Image :{

       width : px2dp(375) * 0.37,
       height : px2dp(375) * 0.37 * 1.4,

   },

     book_Name : {
       color : '#666666',
         fontSize : 10,
         marginTop : px2dp(5),
         marginBottom : px2dp(5),
         alignSelf :'center',
         width : px2dp(375) * 0.37,
         textAlign : 'center'
     },

     container :{
        justifyContent : 'center',
         marginRight : 10,
         borderWidth : px2dp(1),
         borderColor : '#e0e0e0',
         height : px2dp(375) * 0.37 * 1.4 + px2dp(33)
   }


});