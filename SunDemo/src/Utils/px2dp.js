/**
 * Created by mxr on 2017/7/26.
 */

'use strict'
import React, {Component} from 'react';
import { Dimensions } from 'react-native';

const  deviceHeightDp = Dimensions.get('window').height;
const  uiHeightPx = 640;


export default function  px2dp(uiElementPx) {
    return uiElementPx * deviceHeightDp / uiHeightPx;
}