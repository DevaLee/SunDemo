/**
 * Created by ritamashin on 2017/8/1.
 */
import React,{PureComponent} from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';
import Swiper from 'react-native-swiper'

import px2dp , {Screen} from '../../Utils/px2dp'

class HomePageHeaderView extends PureComponent {

    static defaultProps = {
        imageArray :[]
    }

    render (){
        let imageArray = this.props.imageArray;

        return (

        <View style={styles.wrapper}>
            <Swiper  autoplay={true}
                     height={px2dp(375) * 0.4}
                     autoplayTimeout = {2.5}
                     paginationStyle = {styles.paginationStyle}
                     dot = {<View style={{backgroundColor:'gray', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            >
                {imageArray.map((index,i) =>(
                    <View style={{flex :1}} key = {i}>
                        <Image source={{uri : index.bannerUrl}} style={{width : px2dp(375),height : px2dp(375) * 0.4}} />
                    </View>
                ))}
            </Swiper>
        </View>

        )

    }
}

const styles = StyleSheet.create({
    wrapper : {
        borderWidth : px2dp(0.5),
        borderColor : '#e0e0e0',


    },
    paginationStyle : {
        width : 100,height: 10,
        alignSelf : 'center',
        position : 'absolute',
        top : px2dp(375) * 0.4 - 18,
        left : px2dp(375) * 0.5 - 50
    }

});

export default HomePageHeaderView