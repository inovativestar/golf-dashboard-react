import React, { Component } from "react/index.js";
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent.js";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <h1>Blank Page</h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
