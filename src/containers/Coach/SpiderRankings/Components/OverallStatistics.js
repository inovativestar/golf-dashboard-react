import React, { Component } from 'react';
import { Table } from "antd";
import { Radar } from "react-chartjs-2";
import { spiderData } from "../spiderconfig";
import ContentHolder from '../../../../components/utility/contentHolder';
import SpiderRadarChart from "./SpiderRadarChart";
export default class OverallStatistics extends Component {
    constructor(props) {
        super(props);
    }
    SpiderRadarChart = {
      componentName: 'SpiderRadarChart',
      key: 'SpiderRadarChart',
      title: '',
      width: 600,
      height: 500,
      colors:  ['#BAA6CA', '#B7DCFA', '#FFE69A', '#788195'],
      angle: 30,
      domain: [0, 150],
      cx: 300,
      cy: 250,
      outerRadius: 150,
      datas:[
        { subject: 'TOTAL', A: 120, B: 110, fullMark: 150 },
        { subject: 'OFF THE TEE', A: 98, B: 130, fullMark: 150 },
        { subject: 'LONG SHOT and LAT UPS', A: 86, B: 130, fullMark: 150 },
        { subject: 'APPROACH TO THE GREEN', A: 99, B: 100, fullMark: 150 },
        { subject: 'GREENSIDE', A: 85, B: 90, fullMark: 150 },
        { subject: 'PUTTING', A: 65, B: 85, fullMark: 150 },
      ],
    };
    studentColumns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "TOTAL",
          dataIndex: "total",
          key: "total"
        },
        {
          title: "OFF THE TEE ",
          dataIndex: "offTheTee",
          key: "offTheTee"
        },
        {
          title:"LONG SHOT and LAY UPS",
          dataIndex: "longShotAndLayUps",
          key: "longShotAndLayUps"
        },
        {
          title:"APPROACH TO THE GREEN",
          dataIndex: "approachToTheGreen",
          key: "approachToTheGreen"
        },
        {
          title:"GREENSIDE",
          dataIndex: "greenside",
          key: "greenside"
        },  
        {
          title:"PUTTING",
          dataIndex: "putting",
          key: "putting"
        }
    
      ];
    render() {
        
        return (
            <div>
            <h2> Spider Grid </h2> 
            <ContentHolder style={{marginBottom: 8}}>
            <SpiderRadarChart {...this.SpiderRadarChart} />
           </ContentHolder>
            <Table
                columns={this.studentColumns}
                bordered={true}
                pagination= {false}
            />
            </div>
        );

    }
}