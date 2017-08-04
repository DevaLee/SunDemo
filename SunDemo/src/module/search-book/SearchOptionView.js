/**
 * Created by ritamashin on 2017/8/4.
 */
import React ,{PureComponent} from 'react';
import {View , Text , TouchableOpacity,Image ,StyleSheet} from 'react-native';
import {px2dp} from "../../Utils"

export default class SearchOptionView extends PureComponent {


    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <View style={styles.search_container}>
                    <Image style={styles.search_Option_Image}
                           source={require('../../res/search-book/search_option.png')}/>
                    <Text style={styles.search_Option_Text}> 图书分类 </Text>
                    <Image style={styles.search_Option_rightArrow}
                           source={require('../../res/search-book/search_arrow_right.png')}
                           />
                </View>
            </TouchableOpacity>
        )

    }

}

const styles = StyleSheet.create({
   container :{
       backgroundColor : 'rgb(249,249,249)',
       justifyContent : 'space-around',
       alignItems : 'center',
       height : px2dp(50),

   },
    search_container :{
       flexDirection : 'row',
    },
    search_Option_Image :{
        width : px2dp(24),
        height: px2dp(20)
    },
    search_Option_Text :{
        marginLeft : px2dp(8),
        marginRight : px2dp(8),
        color : 'rgb(148,148,148)',
        fontSize :17
    },
    search_Option_rightArrow :{
        width:px2dp(8),
        height : px2dp(16)
    }

});

