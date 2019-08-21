import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { data, barSettings } from './barConfig';

export default class extends Component {
  state = {
    newData : {labels:[],datasets:[]}
  }
  constructor(props) {
    
    super(props);
    
  }
  render() {
    const newData = data[isNaN(parseInt(this.props.val))?0:parseInt(this.props.val)];
    return (
      <div>
        <Bar
          data={newData}
          width={barSettings.width}
          height={barSettings.height}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
