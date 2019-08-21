import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux/articles/actions';
import Input, { Textarea } from '../../../components/uielements/input';
import Select, {
  SelectOption as Option,
} from '../../../components/uielements/select';
import Modal from '../../../components/feedback/modal';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import Box from '../../../components/utility/box';
import ContentHolder from '../../../components/utility/contentHolder';
import Popconfirms from '../../../components/feedback/popconfirm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  ActionBtn,
  Fieldset,
  Form,
  Label,
  TitleWrapper,
  ButtonHolders,
  ActionWrapper,
  ComponentTitle,
  TableWrapper,
  StatusTag,
} from './articles.style';
import clone from 'clone';
import DATA from './data';

class Articles extends Component {
  componentDidMount() {
    this.props.loadFromFireStore();
  }
  handleRecord = (actionName, article) => {
    if (article.key && actionName !== 'delete') actionName = 'update';
    this.props.saveIntoFireStore(article, actionName);
  };
  resetRecords = () => {
    this.props.resetFireStoreDocuments();
  };

  handleModal = (article = null) => {
    this.props.toggleModal(article);
  };

  onRecordChange = (key, event) => {
    let { article } = clone(this.props);
    if (key) article[key] = event.target.value;
    this.props.update(article);
  };

  onSelectChange = (key, value) => {
    let { article } = clone(this.props);
    if (key) article[key] = value;
    this.props.update(article);
  };

  render() {
    const { modalActive, articles } = this.props;
    const { article } = clone(this.props);
    const {columns, dataSource} = DATA;
    // Object.keys(articles).map((article, index) => {
    //   return dataSource.push({
    //     ...articles[article],
    //     key: article,
    //   });
    // });
    console.log(dataSource,articles)
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {},
    };

   
    return (
      <LayoutContentWrapper>
        <Box>
          <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
            <TitleWrapper>
              <ComponentTitle>Articles</ComponentTitle>

              <ButtonHolders>
                <Link to="community">
                <ActionBtn type="danger" >Students</ActionBtn>
                </Link>
                <Label> </Label>
                <Link  to="communityFriends" >
                  <ActionBtn type="primary">Friends</ActionBtn>
                </Link>
              </ButtonHolders>
            </TitleWrapper>

          
            <TableWrapper
              rowKey="key"
              rowSelection={rowSelection}
              columns={columns}
              bordered={true}
              dataSource={dataSource}
              loading={this.props.isLoading}
              className="isoSimpleTable"
              pagination={{
                // defaultPageSize: 1,
                hideOnSinglePage: true,
                total: dataSource.length,
                showTotal: (total, range) => {
                  return `Showing ${range[0]}-${range[1]} of ${
                    dataSource.length
                  } Results`;
                },
              }}
            />
          </ContentHolder>
        </Box>
      </LayoutContentWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.Articles,
  }),
  actions
)(Articles);
