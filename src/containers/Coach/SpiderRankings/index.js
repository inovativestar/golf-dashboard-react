import { Table } from "antd";
import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import Box from '../../../components/utility/box';
import { Row, Col, Icon } from 'antd';
import Dropdown, {
  DropdownButtons,
  DropdownMenu,
  MenuItem,
  SubMenu,
} from '../../../components/uielements/dropdown';
import Button from '../../../components/uielements/button';
import { rtl } from '../../../settings/withDirection';

import basicStyle from '../../../settings/basicStyle';
import Filters from './filters'
import DATA from './data';
import Checkbox, {
  CheckboxGroup
} from '../../../components/uielements/checkbox';

import StatisticsTypeMenu from './Components/StatisticsTypeMenu';
import OverallStatistics from './Components/OverallStatistics';
import ScoringStatistics from './Components/ScoringStatistics';

export default class SpiderRankings extends Component {

  state = {
		loading: false,
		iconLoading: false,
    dataSource:DATA.dataSource,
    hide:false,
    showFilter: false,
    selectedMenu : 'OVERVIEW'
	};


  dataChange=data=>{
    console.log("dataChange",data);
    this.setState({dataSource:data});
  }
  tabledataSource=data=>{
    console.log("dataChange",data);
    this.setState({dataSource:data});
  }
  handleOnCheckChange = checkedValues => {
    this.setState({hide:checkedValues.target.checked});
  };

  getStatisticComponent = (type) => {
    switch(type) {
      case 'OVERVIEW':
      return <OverallStatistics/>;
      case 'SCORING':
      return <ScoringStatistics/>;
      default:
      return <OverallStatistics/>;
    }

  }
  showFilter = show=> {
    this.setState({showFilter: show})
  }

  render() {
    const { rowStyle, colStyle } = basicStyle;

    const {selectedMenu } = this.state;
    const {columns, dataSource} = DATA;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {},
    };

    return (
      <Box >  
        
        <StatisticsTypeMenu onSelect={(item)=>{
          this.setState({selectedMenu: item})
        }}/>
        {
          this.state.showFilter ? 
          <Filters dataChange={this.dataChange} showFilter={this.showFilter.bind(this)}  tabledataSource={this.tabledataSource}/>
          : 
          <div style={{display:'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 8}}>
                    <Button
                        style={{marginLeft: 8, marginBottom: 8}} 
                        onClick={()=>{
                          this.showFilter(true);
                        }}
                    >
                    Show Filter</Button>
          </div>
        }
        {
          this.getStatisticComponent(selectedMenu)
        }
        
     
      </Box>
    );
  }
}
