import { Table } from "antd";
import React, { Component } from "react";
import Button, { ButtonGroup } from '../../../components/uielements/button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, Icon } from 'antd';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import PageHeader from '../../../components/utility/pageHeader';
import IntlMessages from '../../../components/utility/intlMessages';
import coachCommunityActions from '../../../redux/coachCommunity/actions';
import Box from '../../../components/utility/box';
export default class PlayerCommunity extends Component {
  componentDidMount() {
  }
  onChangeTab(key) {}

  getTestData() {
      return [
        {
            ranking:'1',
            name:'Ding',
            handicap: 12,
            nbrRounds:12,
            lastFive:'1'

        },
        {
            ranking:'2',
            name:'Jack',
            handicap: 12,
            nbrRounds:12,
            lastFive:'1'

        }
      ]
  }

  friendColumns = [
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
        title:"Spider HCP",
        dataIndex: "handicap",
        key: "handicap"
    },
    {
      title: "NBR Rounds",
      dataIndex: "nbrRounds",
      key: "nbrRounds"
    },
    {
        title: "Last 5 Rounds",
        dataIndex: "lastFive",
        key: "lastFive",
        render: (text, record) => {
            return (
              <div>
              <Button className="actionOpen"> Compare </Button>
              </div>
            );
          }
      },

  ];
  render() {
    let dataSource = this.getTestData();
    return (
 
        <LayoutWrapper>
          <Box>
          
                <PageHeader>
                  <IntlMessages id="coachcommunity.community" />
                </PageHeader>
                <Box>
  
                    <Table
                      columns={this.friendColumns}
                      dataSource={dataSource}
                      pagination={true}
                      className="studentListTable"
                    />
                  </Box>

       
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
