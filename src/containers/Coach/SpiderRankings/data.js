import React, { Component } from "react";
import Checkbox, {
  CheckboxGroup
} from '../../../components/uielements/checkbox';
  let dataSource = [
    {
      Name: 'Ding Golfer',
      Score: "3",
    },
    {
      Name: 'Charles Rostating',
      Score: "8",
    },
    {
      Name: 'Cedric Denis',
      Score: "6",
    },
    {
      Name: 'Ding Rostating',
      Score: "10",
    },
    {
      Name: 'Charles Golfer',
      Score: "4",
    },
    {
      Name: 'Rostating Denis',
      Score: "19",
    },
  ];
  let columns = [
    {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
    render: text =><Checkbox>{text}</Checkbox>,
  },
  {
    title: 'Score',
    dataIndex: 'Score',
    key: 'Score',
  },

 ];
  let data = {};
export default data = {
    dataSource:dataSource,columns:columns
};
