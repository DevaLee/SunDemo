/**
 * Created by mxr on 2017/7/27.
 */
import React,{Component} from 'react';
import {
    View, Text, FlatList
} from 'react-native';
import SubjectController from '../Controller'
import px2dp from '../../../Utils/px2dp'
import SubjectItem from './subject-item'

export default class AllSubjectTableView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataArray : [],
        };
      }

    componentDidMount() {
      this._fetchData(1);
    }

      render (){
          return (
              <FlatList
                  style={{ backgroundColor :'#eee' }}
                  data={this.state.dataArray}
                  renderItem={({item}) => <SubjectItem data = {item}></SubjectItem>}
              />
          );
      }
    async _fetchData(index){
          let data = await new SubjectController.instance._getSubjectData(index);
          if(data.length > 0){
              this.setState(
                  {dataArray: data}
              );
          }
    }
}