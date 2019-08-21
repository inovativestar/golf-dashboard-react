import React, { Component } from 'react';
import { Table } from "antd";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {ScrollMenuStyle} from './StatisticsTypeMenu.style';
// list of items
const list = [
  { name: 'OVERVIEW' },
  { name: 'SCORING' },
  { name: 'OFF THE TEE' },
  { name: 'TO THE GREEN' },
  { name: 'GREENSIDE' },
  { name: 'PUTTING' },
  { name: 'STROKES GAINED' },
  { name: 'PROXIMITY' },
  { name: 'IMPACT' },
  { name: 'WASTED' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
export default class StatisticsTypeMenu extends Component {
    constructor(props) {
        super(props);
    }
      state = {
        selected: 'item1'
      };
      
      onSelect = key => {
        
        if(this.props.onSelect)
            this.props.onSelect(key);
        this.setState({ selected: key });
      }
    
      
      render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = Menu(list, selected);
    
        return (
          <ScrollMenuStyle>
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={this.onSelect}
            />
          </ScrollMenuStyle>
        );
      }
}