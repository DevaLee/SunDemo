/**
 * Created by mxr on 2017/7/31.
 */
'use strict'
export default function snsTime (time) {
    let timeStamp = parseInt(time);

    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var halfmoth = day * 15;
    var month = halfmoth * 2;
    var now = new Date().getTime();
    var diffValue = now - timeStamp;
    if (diffValue < 0) {
        return;
    }
    var monthD = diffValue / month;
    var weekD = diffValue / week;
    var dayD = diffValue / day;
    var hourD = diffValue / hour;
    var minD = diffValue / minute;
    if (monthD >= 1 ){
        return '' + parseInt(monthD) + '月前';
    }else if (weekD >= 1) {
        return '' + parseInt(weekD) + '周前';
    }else if (dayD >= 1){
        return '' + parseInt(dayD) + '天前';
    }else if (hourD >= 1) {
        return '' + parseInt(hourD) + '小时前';
    }else if (minD >= 1) {
        return '' + parseInt(minD) + '分钟前';
    }else {
        return '刚刚';
    }

}

