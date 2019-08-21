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
import Checkbox, {
  CheckboxGroup
} from '../../../components/uielements/checkbox';
import Input from '../../../components/uielements/input';
import StatisticsTypeMenu from './Components/StatisticsTypeMenu';
import ScoringStatistics from './Components/ScoringStatistics';

export default class SpiderRankings extends Component {

  state = {
		loading: false,
		iconLoading: false,
    hide:false,
    showReferenceFilter: false,
    showCompareToFilter: false,
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
      case 'SCORING':
      return <ScoringStatistics/>;
      default:
      return <ScoringStatistics/>;
    }

  }
  showReferenceFilter = show=> {
    this.setState({showReferenceFilter: show})
  }
  showCompareToFilter = show => {
    this.setState({showCompareToFilter: show})
  }
  render() {
    const { rowStyle, colStyle } = basicStyle;

    const {selectedMenu } = this.state;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {},
    };

    return (
      <Box >  
        
        <StatisticsTypeMenu onSelect={(item)=>{
          this.setState({selectedMenu: item})
        }}/>
        {
          this.state.showReferenceFilter ? 
          (
            <div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: 8, marginBottom: 8}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{width: 80, marginRight: 8}}>
                        Referenece: 
                        </div>
                        <div style={{width: 200}}>
                        Ding Ling
                        </div>      
                    </div>         
                </div>
          
            <Filters dataChange={this.dataChange} showFilter={this.showReferenceFilter.bind(this)}  tabledataSource={this.tabledataSource}/>
            </div>
          )
          : 
          <div style={{display:'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: 8}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{width: 80, marginRight: 8}}>
                        Referenece: 
                        </div>
                        <div style={{width: 200}}>
                        Ding Ling
                        </div>
                    </div>
                    <Button
                        style={{marginLeft: 8}} 
                        onClick={()=>{
                          this.showReferenceFilter(true);
                        }}
                    >
                    Show Filter</Button>
          </div>
        }
        {
          this.state.showCompareToFilter ? (
            <div>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: 8, marginBottom: 8}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{width: 80, marginRight: 8}}>
                        Compare To:
                        </div>
                        <Input
                        style={{width: 200}}
                        placeholder="Player Name"
                        value={this.state.groupName}
                        onChange={event => {
                        this.setState({groupName: event.target.value});
                        }}
                        className="GroupNameInput"
                        />
                    </div>           
                  
                </div>
          
            <Filters dataChange={this.dataChange} showFilter={this.showCompareToFilter.bind(this)}  tabledataSource={this.tabledataSource}/>
            </div>
          )
          : 
          <div style={{display:'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: 8}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{width: 80, marginRight: 8}}>
                        Compare To:
                        </div>
                        <Input
                        style={{width: 200}}
                        placeholder="Player Name"
                        value={this.state.groupName}
                        onChange={event => {
                        this.setState({groupName: event.target.value});
                        }}
                        className="GroupNameInput"
                        />
                    </div>
                    <Button
                        style={{marginLeft: 8}} 
                        onClick={()=>{
                          this.showCompareToFilter(true);
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
