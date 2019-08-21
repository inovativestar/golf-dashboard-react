import { Table } from "antd";
import React, { Component } from "react";
import Button, { ButtonGroup } from '../../../components/uielements/button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { tableData } from './config';
import { Col, Row, Icon } from 'antd';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import PageHeader from '../../../components/utility/pageHeader';
import IntlMessages from '../../../components/utility/intlMessages';
import coachCommunityActions from '../../../redux/coachCommunity/actions';
import {Card, Box, TopbarSearchModal} from './community.style';
import Tabs, { TabPane } from '../../../components/uielements/tabs';

class CoachCommunity extends Component {
  componentDidMount() {
    const { getStudent, getGroup } = this.props;
    getStudent();
    getGroup();
  }
  onChangeTab(key) {}

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
  groupColumns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Students Count",
        dataIndex: "scount",
        key: "scount"
      },
      {
        title: "Actions",
        dataIndex: "action",
        key: "action",
        render: (text, record) => {
          return (
            <div>
            <Button className="actionOpen"> GO </Button>
            <Button className="actionEdit" onClick={()=>this.props.history.push('coachcommunity/group')}><i className="ion-edit" /></Button>
            <Button className="actionDelete"><i className="ion-android-delete" /></Button>
            </div>
          );
        }
      },
  ];
  render() {
    const { match, groups, deleteGroup,students } = this.props;
    return (
 
        <LayoutWrapper>
          <Box>
            <Tabs onChange={this.onChangeTab}>
              <TabPane tab="Community" key="1">
                <PageHeader>
                  <IntlMessages id="coachcommunity.community" />
                </PageHeader>
                <Box>
                  <Card title="Community">
                    <Table
                      columns={this.studentColumns}
                      dataSource={students}
                      pagination={true}
                      className="studentListTable"
                    />
                  </Card>
                </Box>

              </TabPane>
              <TabPane tab="Groups" key="2">
                <PageHeader>
                  <IntlMessages id="coachcommunity.groups" />
                </PageHeader>
                <Box>
                    <div className="isoGroupTableBtn">
                        <Button type="primary" onClick={()=>this.props.history.push('coachcommunity/group')}>New Group</Button>
                    </div>
                    <Card title="Groups">
                        <Table
                            columns={this.groupColumns}
                            dataSource={groups}
                            pagination={true}
                            className="groupListTable"
                        />
                    </Card>
                </Box>
              </TabPane>
            </Tabs>
          </Box>
        </LayoutWrapper>
    );
  }
}
function mapStateToProps(state) {
    return {
      ...state.CoachCommunity,
    };
  }
export default connect(
    mapStateToProps,
    coachCommunityActions
  )(CoachCommunity);
  