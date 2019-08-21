import React, { Component } from 'react';
import { Table } from "antd";
import Box from '../../../../components/utility/box';
import ContentHolder from '../../../../components/utility/contentHolder';
import { Row, Col, Icon } from 'antd';
import TableWrapper from '../../../Tables/antTables/antTable.style';
import { ExpandableTableStyle } from './SpiderStatistics.style';
import Button from '../../../../components/uielements/button';
import Tabs, { TabPane } from '../../../../components/uielements/tabs';
export default class SpiderStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedName : ''}
    }

    setRenderInColumns = (columnsData) => {
        let that = this;
        columnsData.forEach(item => {
          item.render = function(record, text) {
            console.log("record,texst",record,text,item);
            if(record == text.name)  {
               return <span onClick={()=>{ that.setState({ selectedName : record})}} className={that.state.selectedName == record ? 'active' : ''}>{record}</span> 
            } 
            return record
          }
        })
        return columnsData
       }
       
    getLayoutComponent = (layout, partTableData) => {
        if(layout.type == "list") {
            return <Tabs >
                    {
                        layout.sections.map( section => {
                            return ( <TabPane tab={section.name} key={section.name}>
                                 <ContentHolder style={{'margin':0,'display':'flow-root'}}>
                                    {
                                        section.tables.map(item => {
                                            let tableData = partTableData[item.dataIndex];
                                            console.log(tableData);
                                            return this.getExtendableTableComponent(tableData);
                                        })
                                    }
                                 </ContentHolder>
                             </TabPane>
                            );
                         })
                    }
                   </Tabs>
            
        } else {
            return <div/>
        }
    }

    getExtendableTableComponent = (tableData) => {
        return(
            <Col md={24} sm={8} xl={8} xs={24} key={tableData.title} style={{padding: 5}}>
            <div style={{display:'flex', alignItems: 'flex-end', justifyContent: 'flex-end', }}>
                    <Button
                        style={{marginLeft: 8}} 
                        onClick={()=>{
                          
                        }}
                    >
                    +</Button>
            </div>
            <ExpandableTableStyle>
                <TableWrapper
                columns={this.setRenderInColumns(tableData.columns)}
                bordered={true}
                dataSource={tableData.datasource}
                loading={this.props.isLoading}
                className="isoSimpleTable"
                pagination={{
                    hideOnSinglePage: true,           
                }}
                />
            </ExpandableTableStyle>

        </Col>
        );      

    }
   
    render() {
        const { columns, datasource, partTableData, layout } = this.props;
        return this.getLayoutComponent(layout, partTableData)
    }
}