import { Table } from "antd";
import React, { Component } from "react";
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

export default class SpiderRankings extends Component {

  state = {
		loading: false,
		iconLoading: false,
    hide:false,
    showFilter: false,
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

  showFilter = show=> {
    this.setState({showFilter: show})
  }

  render() {
    const { rowStyle, colStyle } = basicStyle;

    const {selectedMenu } = this.state;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {},
    };

    return (
      <Box >  
        
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
      </Box>
    );
  }
}
