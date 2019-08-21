import React, { Component } from "react";
import { Row, Col } from 'antd';
import { RadioGroup, RadioButton } from '../../components/uielements/radio';


class Adminspiderrankings extends Component   {

  render() {
    return( 
       <Row>
         
         <RadioGroup>
        <RadioButton onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/scoring')}>
          Scoring
        </RadioButton>
        <RadioButton onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/tff')}>
          TFF
        </RadioButton>
        <RadioButton onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/togreen')}>
          TO GREEN
        </RadioButton>
        <RadioButton onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/grs')}>
          GRS
        </RadioButton>
        <RadioButton onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/putting')}>
          PUTTING
        </RadioButton>
        <RadioButton onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/sg')}>
          SG
        </RadioButton>
        <RadioButton onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/proximity')}>
          PROXIMITY
        </RadioButton>
        <RadioButton onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/impact')}>
          IMPACT
        </RadioButton>
        <RadioButton onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/wasted')}>
          WASTED
        </RadioButton>
        </RadioGroup>
        
     
      </Row>)
  }

} 

export default Adminspiderrankings;
