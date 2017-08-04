/**
 * Created by ritamashin on 2017/8/4.
 */
import React, {PureComponent} from 'react';
import {StyleSheet , View, TouchableOpacity, Text} from 'react-native';
import {color } from '../../widget'

class SearchBookHotKeyView extends  PureComponent {

    render (){
        let titles = this.props.titles;
        return (
            <View style={[styles.container ,this.props.style ]}>
                {titles.map((title , i) =>
                    <TouchableOpacity
                        style={[styles.TouchOP,{backgroundColor : this.props.selectedIndex === i ? '#dddddd' : 'white'}
                            ,titles.length === 0 ? {height: 0} :{height : 30}
                        ]} key = {i}
                        onPress= {() => this.props.onSelected && this.props.onSelected(i) }>
                        <Text style={{color :'#777777'}}> {title}</Text>
                    </TouchableOpacity>
                )
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: 'white',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'flex-start'
    },
    TouchOP :{
        borderRadius:15,
        height : 30,
        alignItems :'center',
        justifyContent: 'center',
        padding:10,
        marginTop : 5,
        marginBottom : 5,
        borderWidth : 0.5,
        borderColor : color.borderColor,
        marginRight : 8
    }
});

export default SearchBookHotKeyView;