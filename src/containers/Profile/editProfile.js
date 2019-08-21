import React, { Component } from "react";

export default class EditProfile extends Component { 
    handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    render() {
        return(
           <div className="isoContactCard sc-jzJRlG jaMgbw ">
      <div className="isoContactCardHead"><div className="isoPersonImage"><img alt="#" src="https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg" /></div><h1 className="isoPersonName">Benjamin Jacobi</h1></div>
          <div className="isoContactInfoWrapper edit-contact-wrapper">
            
            <div className="editcontact-field">
                <label>First Name</label>
                <input type="text" value="shashank" onChange={this.handleChange}  />
            </div>
            <div className="editcontact-field">
                <label>Last Name</label>
                <input type="text" value="Jaiswal" onChange={this.handleChange}  />
            </div>
            <div className="editcontact-field">
                <label>First Name</label>
                <input type="text" value="shashank@gmail.com" onChange={this.handleChange}  />
            </div>
            <div className="editcontact-field">
                <label>First Name</label>
                MALE<input type="radio" name="gender" value="male"  onChange={this.handleChange} />
                Female<input type="radio" name="gender" value="female"  onChange={this.handleChange} />
            </div>
            <div className="editcontact-field">
                <label>SG Handicap</label>
                Yes<input type="radio" name="handicap" value="Yes"  onChange={this.handleChange}/>
                No<input type="radio" name="handicap" value="No"  onChange={this.handleChange}/>
            </div>
         
            <div className="editcontact-field">
                <label>Status </label>
               <select  onChange={this.handleChange}>
                    <option value="grapefruit">AMATEUR</option>
                    <option value="lime">PRO</option>
                    <option value="coconut">COACH</option>
                    <option value="mango">TEAM COACH</option>
                    <option value="mango">INSTITUTIONS</option>
                </select>
            </div>
        </div>
        </div>
        )
    }
}