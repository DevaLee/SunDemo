/**
 * Created by mxr on 2017/7/27.
 */
'use strict'
import MXRNetworkManager from '../../../lib/network-manager';
const singleton = Symbol();
const singletonEnforce = Symbol();

export default class SubjectController {
    //https://bs-core.mxrcorp.cn/home/recommend/all?page=1



    constructor(enforce){
        if (enforce !== singletonEnforce) throw "can not create singleton";
    }

    static get instance(){
        if (!this[singleton]){
            this[singleton] = new  SubjectController(singletonEnforce);
        }
        return this[singleton];
    }

    async _getSubjectData(index){
        let network = new MXRNetworkManager();
        let paramdict = {page : index};
        let url = 'https://bs-core.mxrcorp.cn/home/recommend/all';
        let {data} = await network.get(url ,paramdict);
        console.log({data});





    }



}