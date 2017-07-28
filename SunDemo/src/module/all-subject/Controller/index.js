/**
 * Created by mxr on 2017/7/27.
 */
'use strict'
import MXRNetworkManager from '../../../lib/network-manager';
import SubjectModel from  '../Mode/subject-model';
import SubjectProxy from  '../Mode/subject-proxy';
 const singleton = Symbol();
const singletonEnforce = Symbol();

export default class SubjectController {
    //https://bs-core.mxrcorp.cn/home/recommend/all?page=1


    constructor(enforce) {
        if (enforce !== singletonEnforce) throw "can not create singleton";
    }

    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new SubjectController(singletonEnforce);
        }
        return this[singleton];
    }

    async _getSubjectData(index) {
        let network = new MXRNetworkManager();
        let url = 'https://bs-core.mxrcorp.cn/home/recommend/all?index=' + index;
        let result = await network.get(url, null);
        let dataDict = JSON.parse(result.data);
        console.log(dataDict);
        let listArray = dataDict['list'];
        let number = SubjectProxy.instance.subjectDataArray.length;
        console.log('listArray' + listArray);
        listArray.forEach((item , index, array)=>{
            item.title = item.name;
            item.key = number + index;
            SubjectProxy.instance._addSubject(item);
        });
        return SubjectProxy.instance.subjectDataArray;
    }
}





