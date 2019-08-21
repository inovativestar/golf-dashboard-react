import React, { Component } from "react";
import { Row, Col } from "antd";
import FrappeChart from "frappe-charts/dist/frappe-charts.min.esm";
import PageHeader from "../../../components/utility/pageHeader";
import Box from "../../../components/utility/box";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import ContentHolder from "../../../components/utility/contentHolder";
import Button from "../../../components/uielements/button";
import basicStyle from "../../../settings/basicStyle";
import * as configs from "./config";
import "frappe-charts/dist/frappe-charts.min.css";

export default class extends Component {
  state = {
    currentIndex: 2
  };
  componentDidMount() {
    new FrappeChart(configs.barChart);
   
    this.updatedChart = new FrappeChart(configs.updatedChart);
  }
  addData = () => {
    let { currentIndex } = this.state;
    currentIndex += 1;
    const data = configs.basicData.datasets[currentIndex % 3];
    this.updatedChart.add_data_point(data.values, data.title);
    this.setState({ currentIndex });
  };
  removeData = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.updatedChart.remove_data_point(currentIndex);
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper className="isoMapPage">
            <Box title="Main Graph">
              <ContentHolder>
                <div id={configs.updatedChart.parentId} />
              </ContentHolder>
            </Box>
      </LayoutWrapper>
    );
  }
}
export { FrappeChart };
