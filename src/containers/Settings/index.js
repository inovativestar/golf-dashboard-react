import React, { Component } from "react";
import { ContactsWrapper } from "./settings.style";
import { Layout, Icon } from "antd";
export default class Settings extends Component { 
    handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    render() {
        return(
            <ContactsWrapper
                className="isomorphicContacts"
                style={{ background: "none" }}
            >
           
            <Layout className="isoContactBoxWrapper">
            <div className="isoContactCard sc-jzJRlG jaMgbw ">

            <div className="isoContactInfoWrapper edit-contact-wrapper">
            
            <div className="editcontact-field">
                <label>Distance Measurement</label>
                <select >
                    <option value="yards">YARDS</option>
                    <option value="meters">METERS</option>
                </select>
            </div>
            <div className="editcontact-field">
                <label>Language</label>
                <select>
                    <option value="french">FRENCH</option>
                    <option value="english">ENGLISH</option>
                </select>
            </div>
            <div className="editcontact-field">
                <label>Collage Year</label>
                <select>
                    <option value="none">None</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                </select>
            </div>
            <div className="editcontact-field">
                <label>Tour</label>
                <select>
                    <option value="proMen">PRO-Men</option>
                    <option value="proWomen">PRO-Women</option>
                    <option value="proSenior">PRO-Senior</option>
                    <option value="amateurs">AMATEURS</option>
                    <option value="juniors">JUNIORS</option>
                </select>
            </div>
            <div className="editcontact-field">
                <label>Level</label>
                <select>
                    <option value="proMen">European Tour</option>
                    <option value="proWomen">Callenge Tour</option>
                    <option value="proSenior">Nordc Golf League</option>
                    <option value="amateurs">Apls Tour</option>
                    <option value="juniors">Pro Golf Tour</option>
                </select>
            </div>
            </div>
            </div>
            </Layout>
          </ContactsWrapper>
   
        )
    }
}