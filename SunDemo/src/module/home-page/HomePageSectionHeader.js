/**
 * Created by ritamashin on 2017/8/2.
 */
import React,{PureComponent} from 'react';
import {View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import ImageButton from "../../lib/ImageButtonWithText";
import px2dp from '../../Utils/px2dp'

class HomePageSectionHeader extends PureComponent {


    render (){
        let module = this.props.module;

        return(
            <View style={styles.container}>
                <Text> {module.moduleName} </Text>
                <View style={{flex: 1}}/>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.scan_Text}>查看全部</Text>
                        <Image/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container : {
       flex : 1,
       backgroundColor : 'white',
       padding : 8,
       flexDirection : 'row',
       height : px2dp(38),
       alignItems : 'center',
       borderBottomWidth : px2dp(1),
       borderColor: 'rgba(126,201,134,0.5)'
   },
    left_Text :{
        color: '#333333',
        fontSize : 17
    },
    scan_All :{

    },
    scan_Text :{
       color : 'rgb(128,201,133)',
        fontSize: 12
    }
});

export  default HomePageSectionHeader