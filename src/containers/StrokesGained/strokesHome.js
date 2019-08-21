import React, { Component } from "react";
import FrappeChart from "frappe-charts/dist/frappe-charts.min.esm";
import "frappe-charts/dist/frappe-charts.min.css";
import ContentHolder from "../../components/utility/contentHolder";
import basicStyle from '../../settings/basicStyle';
import Button, { ButtonGroup } from '../../components/uielements/button';
//import RoundDT from "./roundDatatable.js";
import Box from '../../components/utility/box';
import BarChart  from './barchart/bar'
import { Table } from "antd";
import Dropdown, {
  DropdownButtons,
  DropdownMenu,
  MenuItem,
  SubMenu,
} from '../../components/uielements/dropdown';
import Select, { SelectOption } from '../../components/uielements/select';
import tableData  from './data'
import * as configs from "./config";

import { connect } from "react-redux";
import actions from '../../redux/StrokesGained/actions';


class StrokesGained extends Component {
  componentDidMount()
  {
		this.props.getDataStrokesGained();
		new FrappeChart(configs.barChart);
		
  }
	state={
		    index:0,
			firstGraphVal:"firstgraph"
		}
	handleFirstChange = e => {
		this.setState({ index: e });
		this.setState({ firstGraphVal: e });

		const index=e;
    	let data=configs.data[index]
    	configs.barChart.data=data;
  		new FrappeChart(configs.barChart);
	};
		render(){


			const {
				Overview:
				{
					recollectionData:
					{
						data_recollection
				
					} = []
				} = []
			} = this.props;
	
			console.log("this data from redux", data_recollection)
	


			const firstGraphVal= this.state.firstGraphVal;
			const gutter = 10;
		// const antTable = AntTable.renderTable('sortView');

		const iconImg = {height:'25px','margin':'0 5px'}
		const mt0 = {'margin':"0",'display':'flow-root'}
		const { rowStyle, colStyle } = basicStyle;
		const firstGraphDD = (
			<Select
				defaultValue={firstGraphVal}
				onChange={this.handleFirstChange}
				style={{ width: '100%' }}
			>
				<SelectOption value="firstgraph" disabled={true}>Strokes Gained Categories</SelectOption>
				<SelectOption value="0">Total 1.284</SelectOption>
				<SelectOption value="1">Tee To Green 0.588</SelectOption>
				<SelectOption value="2">Sur le Tee 0.384</SelectOption>
				<SelectOption value="4">Coups Longs -0.206</SelectOption>
				<SelectOption value="5">Vers le Green -0.226</SelectOption>
				<SelectOption value="6">Autour du Green 0.636</SelectOption>
				<SelectOption value="7">Putting 0.696</SelectOption>
			</Select>
							)
			return(
		        <div>
    				<Box title="">
								{firstGraphDD}
		
                <h2>SG distances:</h2>
                <Box title={configs.barChart.header}>
                  <ContentHolder>
                    <div id={configs.barChart.parentId} />
                  </ContentHolder>
                </Box>
                <Table
                  columns={tableData.columns.table1}
                  dataSource={tableData.dataSource.table1}
                  pagination={false}
                />
      			</Box>
        </div>


          )
		}
}
const mapStateToProps = state => {
  return state;
};


export default connect(mapStateToProps, actions)(StrokesGained);

