/**
 * Created by mxr on 2017/7/31.
 */
'use strict'
import React,{PureComponent} from 'react';
import {StyleSheet , Text, Dimensions, ReactElement } from 'react-native';
import color from './color'

export function headingTitle({style, ...props} : Object) : ReactElement {
    return <Text style={[styles.barTitle,style]}{...props}/>
}

export function heading1 ({style,...props} : Object) : ReactElement {
    return <Text style={[styles.h1 , style]} {...props} />
}

export function heading2({style,...props} : Object) : ReactElement {
    return <Text style={[styles.h2 , style]} {...props}/>
}

export function heading3({style,...props} : Object) : ReactElement{
    return <Text style={[styles.h3 , style]} {...props}/>
}
export function paragraphText({style,...props} : Object) : ReactElement {
    return <Text style={[styles.paragraph ,style]} {...props}/>
}

const styles = StyleSheet.create({
    barTitle :{
        fontSize : 24,
        color : color.topicColor,
    },
    h1 :{
        fontSize: 17,
        color : color.paragraphColor,
    },
    h2 :{
        fontSize : 15,
        color : color.timeColor,
    },
    h3 : {
        fontSize : 13,
        color : color.timeColor,
    },
    paragraph :{
        fontSize : 17,
        color : color.paragraphColor
    }
});


