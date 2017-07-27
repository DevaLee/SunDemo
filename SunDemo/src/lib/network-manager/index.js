/**
 * Created by weiqingtang on 2017/6/21.
 *
 * support basic function to network,like GET,POST,DELETE
 * auto create header
 * auto connect the prams to url or body
 * auto decode and encode use base64
 *
 */
import native from '../native-interface'
import Toast from 'react-native-root-toast';
import ErrorCode from './error-code'




export default class MXRNetworkManager{
    constructor(props){
    }

    /*
    根据method拼接处url
     */
    async makeUrl(method,url,params){
        const na = new native();
        let myUrl = url;
        if(method == 'GET' && params != null){
            myUrl += '?';
            for(var key in params){
                myUrl += key+"="+ (await na.encodeBase64WithString(params[key].toString()))+"&";
            }
        }
        return myUrl;
    }

    /*
    封装出包头
     */
    async makeClientHeader(){
        let header = {
            'osType':'1',
            'region':'0',
            'appId':'8J37OJ6HZI6G7LKV2H99CAS7PIEEUA5N',
            'userId':'123',
            'platformNo':'3as2d3sad54adsfds54f25sdf',
            'deviceUnique':'123',
            'deviceId':'456',
            'appVersion':'5.2.6',

        }
        let json = JSON.stringify(header);
        let value = await new native().encodeBase64WithString(json);
        return {'mxr-key':value};
    }

    /*根据Method方法分装出header和body
      在GET的时候不允许有body
    */
    async makeMethodHeadBody(method,parms){
        let myHeader = await  this.makeClientHeader();
        let object=
            {
                'method':method,
                'headers':myHeader,
            };
        if(method.toUpperCase() != "GET") {
            object['body'] = await new native().encodeBase64WithString(JSON.stringify(parms));
        }
        return new Promise((resolve,reject)=>{
            resolve(object);
        });

    }

    /*
    处理error信息
     */
    getErrorCode(json){
        if(json && json["Header"]){
            let errorCode =  json["Header"]['ErrCode'];
            return errorCode;
        }
        return -1;
    }
    /*
     处理errormsg
     */
    getErrorMsg(json){
        if(json && json["Header"]){
            return json["Header"]["ErrMsg"];
        }
        return -1;

    }

    /*
     @param     method      GET POST DELETE
                absoluteURL  完整的请求路径
                params      dictionary格式的参数，如果get则拼在url地址上，如果post则放在body中
     @return    {data,code,error} {String,Number,String} Body,错误码，错误信息
    */

    async request(method,absoluteURL,params){
        let value = null;
        let errorCode  = ErrorCode.CODE_500;
        let errorMsg   = null;
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let url = await this.makeUrl(method,absoluteURL,params);
            let headBody = await this.makeMethodHeadBody(method,params);
            let response = await fetch(url,headBody);
            let responseJson = await response.json();
            errorCode = this.getErrorCode(responseJson);
            errorMsg =  this.getErrorMsg(responseJson);
            if(errorCode == ErrorCode.CODE_0){
                if( responseJson['Body']!=''){
                    value = await new native().decodeBase64WithString(responseJson['Body']);//判断body
                }else{
                    value = null;
                }

            }else if(errorCode == ErrorCode.CODE_404){
                value = null;
            }else{
                value=null;
                console.log("Error request ="+url+",ErrorCode="+errorCode+",Error Msg="+this.getErrorMsg());
                Toast.show('网络出错', {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0
                });
            }
        } catch(error) {
            value     = null;
            errorMsg  = error;
            console.log("Catch Error="+error+",absoluteURL="+absoluteURL);
        }
        return  {data:value,code:errorCode,error:errorMsg};
    }

    /*
        @param
           url 相对url
           params 字典参数
     */
    async get(url,params=null){
        return new Promise((resolve,reject) =>{
            resolve(this.request('GET',url,params));
        });
    }

    async post(url,params=null){
        return new Promise((resolve,reject) =>{
            resolve(this.request('POST',url,params));
        });
    }

    async delete(url,params=null){
        return new Promise((resolve,reject) =>{
            resolve(this.request('DELETE',url,params));
        });
    }

}

export {ErrorCode}