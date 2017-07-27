/**
 * Created by mxr on 2017/7/27.
 */
'use strict';

const singleton = Symbol();
const singletonEnforce = Symbol();

export default class SubjectProxy {
   constructor (enforce) {
       if (enforce !== singletonEnforce) throw 'can not construct singleton';
       this.subjectDataArray = [];
   }
   static get instance (){
       if(!this[singleton]){
           this[singleton] = new SubjectProxy(singletonEnforce);
       }
       return this[singleton];
   }

    /**
     *  添加专题数据
     */

   _addSubject(subject){
       this.subjectDataArray.push(subject);
   }
   
    
}
