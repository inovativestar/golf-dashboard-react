import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Box from '../../../components/utility/box';
import Select, { SelectOption } from '../../../components/uielements/select';
import basicStyle from '../../../settings/basicStyle';
import { RadioGroup, RadioButton } from '../../../components/uielements/radio';
import ContentHolder from '../../../components/utility/contentHolder';
import Button from '../../../components/uielements/button';
import Collapses from '../../../components/uielements/collapse';
import {CollapseStyle} from './dashboard.style';
import { Table } from "antd";
import { ReactDatesStyleWrapper, ReactDatesWrapper } from "./reactDates.style";
import {
  DateRangePicker
} from "../../../components/uielements/reactDates";
const Panel = Collapses.Panel;
const Collapse = props => (
  <CollapseStyle>
    <Collapses {...props}>{props.children}</Collapses>
  </CollapseStyle>
);
export default class extends Component {
  constructor(props) {
    super(props);
  }

  roundColumns = [
    {
      title: "Score",
      dataIndex: "score",
      key: "score"
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Golf Club",
      dataIndex: "golfClub",
      key: "golfClub"
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course"
    },
    {
      title:"Tees",
      dataIndex: "tees",
      key: "tees"
    },
    {
        title:"Type of play",
        dataIndex: "typeOfPlay",
        key: "typeOfPlay"
      },
      {
        title:"Slope%",
        dataIndex: "slop",
        key: "slop"
      }
  ];

  state = {
    roundFilterType:"all",
    lastRounds:"1",
    selectedGroup: "all",
    slope: 'all',
		weather: 'all',
    airspeed: 'all',
    holeType: '18',
    flashRound: 'all',
    focusedInput: "startDate",
  }
  handleRoundFilterTypeChange = value => {
    this.setState({ roundFilterType: value });
  };
  handleLastRoundsChange = value => {
    this.setState({ lastRounds: value });
  }
  handleSlopeChange = e => {
    this.setState({ slope: e.target.value });
  };
  handleWeatherChange = e => {
    this.setState({ weather: e.target.value });
  };
  handleAirspeedChange = e => {
    this.setState({ airspeed: e.target.value });
  };
  handleHoleTypeChange = e => {
    this.setState({ holeType: e.target.value });
  };
  handleFlashRoundChange = e =>{
    this.setState({ flashRound: e.target.value });
  }
  render() {
    const {roundFilterType, lastRounds, selectedGroup }= this.state;
    const { rowStyle, colStyle } = basicStyle;
    const iconImg = {height:'25px','margin':'0 5px'}
    const mt0 = {'margin':0,'display':'flow-root'}
    const {slope, weather, airspeed, flashRound, holeType} = this.state;
    const gutter = 0;

    const selectDropDown = (
      <Select
				defaultValue={roundFilterType}
				onChange={this.handleRoundFilterTypeChange}
				style={{ width: '100%' }}
			>
      <SelectOption value="all" >All Round</SelectOption>
				<SelectOption value="selectRound" >Select Round</SelectOption>
				<SelectOption value="bestFive"> Best 5 </SelectOption>
				<SelectOption value="worstFive"> Worst 5</SelectOption>
				<SelectOption value="competitionRounds"> Competition Rounds</SelectOption>
				<SelectOption value="practiveRounds"> Practice Rounds</SelectOption>
        <SelectOption value="qualifyingRounds"> Qualifying Rounds</SelectOption>
			</Select>
    );
    const selectRoundDropDown = (
      <Select
				defaultValue={lastRounds}
				onChange={this.handleLastRoundsChange}
				style={{ width: '100%' }}
			>
				<SelectOption value="1" >Last 1 Round </SelectOption>
				<SelectOption value="2"> Last 2 Rounds </SelectOption>
        <SelectOption value="3"> Last 3 Rounds </SelectOption>
        <SelectOption value="4"> Last 4 Rounds </SelectOption>
        <SelectOption value="5"> Last 5 Rounds </SelectOption>
        <SelectOption value="10"> Last 10 Rounds </SelectOption>
        <SelectOption value="15"> Last 15 Rounds </SelectOption>
        <SelectOption value="20"> Last 20 Rounds </SelectOption>
        <SelectOption value="25"> Last 25 Rounds </SelectOption>
        <SelectOption value="30"> Last 30 Rounds </SelectOption>
        <SelectOption value="35"> Last 35 Rounds </SelectOption>
        <SelectOption value="40"> Last 40 Rounds </SelectOption>
			</Select>
    );


    return (
      <Box title="Filter">
          <div style={{display:'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 8}}>
                    <Button
                        style={{marginLeft: 8, marginBottom: 8}} 
                        onClick={()=>{
                          this.props.showFilter(false);
                        }}
                    >
                    Hide</Button>
          </div>
          <Collapse bordered={true} defaultActiveKey={['1']}>
                  <Panel
                    header={"Options"}
                    key="1"
                  >
                    <ContentHolder style={mt0}>
                     
                          <Col md={24} sm={8} xl={8} xs={24}>
                          <img src="/images/icons/golf.svg" style={iconImg} />
                          <RadioGroup value={slope} onChange={this.handleSlopeChange}>
                            <RadioButton value="all">All</RadioButton>
                            <RadioButton value="slow">Slow</RadioButton>
                            <RadioButton value="med">Med</RadioButton>
                            <RadioButton value="fast">Fast</RadioButton>
                          </RadioGroup>
                          </Col>
                          <Col md={24} sm={6} xl={6} xs={24}>
                          <img src="/images/icons/wind.svg" style={iconImg} />
                          <RadioGroup value={weather} onChange={this.handleWeatherChange}>
                            <RadioButton value="all">All</RadioButton>
                            <RadioButton value="norain">No Rain</RadioButton>
                            <RadioButton value="rain">Rain</RadioButton>
                          </RadioGroup>
                            </Col>
                          <Col md={24} sm={8} xl={8} xs={24}>
                          <img src="/images/icons/air-sock.svg" style={iconImg} />
                          <RadioGroup value={airspeed} onChange={this.handleAirspeedChange}>
                            <RadioButton value="all">All</RadioButton>
                            <RadioButton value="low">Low</RadioButton>
                            <RadioButton value="med">Med</RadioButton>
                            <RadioButton value="strong">Strong</RadioButton>
                          </RadioGroup>
                            </Col>
         

                        
  
                </ContentHolder>
                  </Panel>
                  <Panel
                    header={"Rounds"} 
                    key="2"
                  >

                  <ContentHolder style={mt0}>
                        <Row>
                        <Col md={24} sm={8} xl={8} xs={24}>
                          <RadioGroup value={holeType} onChange={this.handleHoleTypeChange}>
                            <RadioButton value="18">18 Holes</RadioButton>
                            <RadioButton value="9">9 Holes</RadioButton>
                          </RadioGroup>
                            </Col>
                          <Col md={24} sm={8} xl={8} xs={24}>
                          <RadioGroup value={flashRound} onChange={this.handleFlashRoundChange}>
                            <RadioButton value="all">All</RadioButton>
                            <RadioButton value="low">Flash Rounds</RadioButton>
                            <RadioButton value="med">Full Rounds</RadioButton>
                          </RadioGroup>
                            </Col>
                        </Row>                  
   
                  

                  </ContentHolder>
                  <ContentHolder style={[mt0, {marginTop:8}]}>
                  <Row >
                          <Col md={6} sm={12} xs={12} xl={6} style={colStyle}>
                              {selectDropDown}
                          </Col>
                          {
                            this.state.roundFilterType == 'selectRound' &&
                            <Col md={6} sm={12} xs={12} xl={6} style={{ paddingLeft: 8}}>
                              {selectRoundDropDown}
                            </Col>
                          }
                        </Row>
                    </ContentHolder>
                    <Table
                        columns={this.roundColumns}
                        rowSelection={[]}
                        dataSource={[]}
                        bordered={true}
                        pagination= {false}/>
                  </Panel>
                  
                  <Panel
                    header={"Date Range"} 
                    key="4"
                  >
                  <ReactDatesWrapper>
                  <div className="isoReactDate">
                    <DateRangePicker 
                      isOutsideRange={() => false}
                      showDefaultInputIcon={true}
                      onDatesChange={({ startDate, endDate }) =>
                      this.setState({ startDate, endDate })} 
                      focusedInput={this.state.focusedInput}
                      onFocusChange= { focusedInput => {
                        this.setState({ focusedInput });
                      }}
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                       />
                       </div>
                  </ReactDatesWrapper>
                  </Panel>
          </Collapse>




          <div style={{display:'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 8}}>
                    <Button
                        style={{marginLeft: 8}} 
                    >
                    Cancel</Button>
                    <Button type="primary" 
                        style={{marginLeft: 8}} 
                    >
                    Apply </Button>
          </div>
      </Box>
    );
  }
}
