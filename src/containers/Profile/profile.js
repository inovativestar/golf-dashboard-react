import React, { Component } from "react";

import { Layout, Icon } from "antd";
import Button from "../../components/uielements/button";
import ContactList from "../../components/contacts/contactList";
import SingleContactView from "../../components/contacts/singleView";
import EditContactView from "../../components/contacts/editView";
import DeleteButton from "../../components/contacts/deleteButton";
import { otherAttributes } from "./fakeData";
import IntlMessages from "../../components/utility/intlMessages";
import { ContactsWrapper } from "./contacts.style";
import Scrollbar from "../../components/utility/customScrollBar";
import EditProfile from "./editProfile";
import { connect } from "react-redux";
import actions from '../../redux/Profile/actions';

const { Content } = Layout;
class Profile extends Component {

   
  render() {

    const {
      contacts,
      seectedId,
      changeContact,
      addContact,
      editContact,
      deleteContact,
      viewChange
    } = this.props;
    let editView = true;
    const selectedContact = seectedId
      ? contacts.filter(contact => contact.id === seectedId)[0]
      : null;
    const onVIewChange = () => viewChange(!editView);
    console.log("selectedContact",selectedContact,editContact);
    const myContact = {
        firstName:"asdasd",
        lastName:"aaa",
        email:"abc@gmail.com",
    };
    return (


      <ContactsWrapper
        className="isomorphicContacts"
        style={{ background: "none" }}
      >
       
        <Layout className="isoContactBoxWrapper">
          <EditProfile/>
        </Layout>
      </ContactsWrapper>

      
    );
  }
}


 const mapStateToProps = state => {
   return state;
 };


 export default connect(mapStateToProps, actions)(Profile);
