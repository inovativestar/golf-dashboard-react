import React, { Component } from 'react';
import ContentHolder from '../../../components/utility/contentHolder';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../../components/uielements/input';
import Box from '../../../components/utility/box';
import { Table } from "antd";
import { Link } from 'react-router-dom';
import Button from '../../../components/uielements/button';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import Select, {
  SelectOption as Option,
} from '../../../components/uielements/select';
import clone from 'clone';


export default class extends Component {
    
  componentDidMount() {
    setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
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

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {},
    };
    return (
              <LayoutContentWrapper>
                <Box>
                  <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
                  <Table
                    columns={this.studentColumns}
                    rowSelection={[]}
                    dataSource={[]}
                    pagination={true}
  	              />
                  </ContentHolder>
                  <div style={{display:'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 8}}>
                    <Button
                        style={{marginLeft: 8}} 
                        onClick={()=>{
                            this.props.onCancel();
                        }}
                    >
                    Cancel</Button>
                    <Button type="primary" 
                        style={{marginLeft: 8}} 
                           onClick={()=>{
                            this.props.onOk();
                        }}
                    >
                    Add New</Button>
                  </div>

                </Box>
                </LayoutContentWrapper>
      
    );
  }
}
