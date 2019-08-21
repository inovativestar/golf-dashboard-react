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
import {Card, Box, GroupPage, TopbarSearchModal} from './community.style';
import Input from '../../../components/uielements/input';
import Searchbar from "./addStudents";
class EditGroup extends Component {
    state= {
      studentsInGroup : [],
      groupName: "",
      isNew: true,
      visible: false
    }
    componentDidMount() {
      const { getStudentInGroup } = this.props;
      if(this.state.isNew) {
        this.setState({studentsInGroup : []})
      }else {
        let groupId = 1;
        getStudentInGroup(groupId);
      }
    }
    handleOk = () => {
      this.setState({
        visible: false
      });
    };
    handleCancel = () => {
      this.setState({
        visible: false
      });
    };
    handleBlur = () => {
      setTimeout(() => {
        this.setState({
          visible: false
        });
      }, 200);
    };
    onAddStudents = () => {
      this.showModal();
    }
    showModal = () => {
      this.setState({
        visible: true
      });
    };
  
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
      const { match, groups, deleteGroup, students } = this.props;
      const { visible } = this.state;
      return (
   
          <LayoutWrapper>
            <Box>
              <GroupPage className="InvoicePageWrapper"> 
                <div className="PageHeader">
                  {this.state.isNew ? (
                      <Button  onClick={()=>this.props.history.goBack()} color="primary">
                        <span>Cancel</span>
                      </Button>
                  ) : (
                    <Button onClick={()=>this.props.history.goBack()}>
                      <span>Cancel</span>
                    </Button>
                  )}

                  <Button type="primary" onClick={this.onSave} className="saveBtn">
                    <span>Save</span>
                  </Button>
                </div>
                <h3 className="Title">Group</h3>
                <Input
                  placeholder="Group Name"
                  value={this.state.groupName}
                  onChange={event => {
                  this.setState({groupName: event.target.value});
                  }}
                  className="GroupNameInput"
                />
                <Box>
                  <Card title="Community">
                    <Table
                      columns={this.studentColumns}
                      dataSource={this.state.studentsInGroup}
                      pagination={true}
                      className="studentListTable"
                    />
                  </Card>
                </Box>
                <div className="studentActionBtnContainer">
                  <Button type="primary" onClick={this.onAddStudents} className="addStudentBtn">
                      <span>Add Students</span>
                  </Button>
                </div>
                <TopbarSearchModal
                  visible={visible}
                  onOk={this.handleCancel}
                  onCancel={this.handleCancel}
                  wrapClassName="isoSearchModal"
                  width="60%"
                  footer={null}
                >
                  <div >
                    {visible ? <Searchbar 
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    /> : ""}
                  </div>
                </TopbarSearchModal>
                
              </GroupPage>
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
    )(EditGroup);
    