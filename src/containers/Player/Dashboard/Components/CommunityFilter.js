import React, { Component } from 'react';
import { Table } from "antd";
import Box from '../../../../components/utility/box';
import Button from '../../../../components/uielements/button';
import Select, { SelectOption } from '../../../../components/uielements/select';
import LayoutContentWrapper from '../../../../components/utility/layoutWrapper';
import ContentHolder from '../../../../components/utility/contentHolder';
import TableWrapper from '../../../Tables/antTables/antTable.style';

import { Row, Col, Icon } from 'antd';
export default class extends Component {
    state = {
        selectedGroup: "all",
    }
    studentColumns = [
        {
          title: "Ranking",
          dataIndex: "ranking",
          key: "ranking"
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Group Name",
          dataIndex: "groupName",
          key: "groupName"
        },
        {
          title: "NBR Rounds",
          dataIndex: "nbrRounds",
          key: "nbrRounds"
        },
        {
          title:"Spider HCP",
          dataIndex: "handicap",
          key: "handicap"
        }
      ];
      render() {
        const { selectedGroup }= this.state;
        const groupDropDown = (
            <Select
                      defaultValue={selectedGroup}
                      onChange={this.handleQualifyingChange}
                      style={{ width: '100%' }}
                  >
              <SelectOption value="all" >All</SelectOption>
              <SelectOption value="1"> Spider Group1 </SelectOption>
              <SelectOption value="2"> Spider Group2 </SelectOption>
              <SelectOption value="3"> Spider Group3 </SelectOption>
              <SelectOption value="4"> Spider Group4 </SelectOption>
            </Select>
          );
        const rowSelection = {
          onChange: (selectedRowKeys, selectedRows) => {}
        };
        return (

               <div>
                   <ContentHolder style={{'margin':0,'display':'flow-root'}}>
                   <Row md={24} sm={24} xs={24} x1={24}>
                    <Col md={6} sm={12} xs={12} xl={6} >
                        {groupDropDown}
                    </Col>
                   </Row>
                   
                   </ContentHolder>
                   <Table
                    columns={this.studentColumns}
                    rowSelection={[]}
                    dataSource={[]}
                    bordered={true}
                    pagination= {false}
                />
             </div>
          
        );
      }
}
