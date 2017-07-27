/**
 * Created by mxr on 2017/7/27.
 */
import {NativeModules} from 'react-native';
import 'es6-symbol/implement'

var native = NativeModules.MXRRNInterface;


export default class MXRNativeInterface{
    /**
     *  base 64 解码
     * @param decodeString
     * @returns {Promise}
     */
    async decodeBase64WithString(decodeString){
        return new Promise((resolve,reject)=>{
            native.decodeBase64WithString(decodeString,(value)=>{
                resolve(value);
            });
        });
    }

    /**
     *  base 64 编码
     * @param encodeString
     * @returns {Promise}
     */
    async encodeBase64WithString(encodeString){
        return new Promise((resolve,reject)=>{
            native.encodeBase64WithString(encodeString,(value)=>{
                resolve(value);
            })
        })
    }
}