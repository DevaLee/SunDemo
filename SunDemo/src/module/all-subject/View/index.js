/**
 * Created by mxr on 2017/7/27.
 */
import React,{Component} from 'react';
import {
    View, Text, FlatList
} from 'react-native';
import SubjectController from '../Controller'

export default class AllSubjectTableView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    componentDidMount() {
      this._fetchData(1);
    }

      render (){
          return (
              <FlatList
                  data={[{key: 'a'}, {key: 'b'}]}
                  renderItem={({item}) => <Text>{item.key}</Text>}
              />
          );
      }
    async _fetchData(index){
          await new SubjectController.instance._getSubjectData(index);
    }
}