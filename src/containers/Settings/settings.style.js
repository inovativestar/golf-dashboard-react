import styled from "styled-components";
import { palette } from "styled-theme";
import { transition, borderRadius } from "../../settings/style-util";
import WithDirection from "../../settings/withDirection";

const WDContactsWrapper = styled.div`
  padding: 50px 35px;
  display: flex;
  ${"" /* max-height: calc(100vh - 130px); */} @media only screen and (max-width: 767px) {
    padding: 50px 20px;
    flex-direction: column;
    height: auto;
  }

  @media only screen and (min-width: 767px) and (max-width: 990px) {
    padding: 40px 30px;
  }

  .isoContactListBar {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background: #ffffff;
    border: 1px solid ${palette("border", 0)};
    width: 320px;
    overflow: hidden;
    overflow-y: auto;

    @media only screen and (max-width: 767px) {
      width: auto !important;
      margin-bottom: 20px;
      min-width: 0 !important;
      max-width: 100% !important;
      flex: 0 !important;
    }

    @media only screen and (min-width: 767px) and (max-width: 990px) {
      width: 270px !important;
      flex: 0 0 270px !important;
    }
  }

  .isoContactBoxWrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    background-color: #ffffff;
    border: 1px solid ${palette("border", 0)};
    border-left: ${props => (props["data-rtl"] === "rtl" ? "inherit" : "0")};
    border-right: ${props => (props["data-rtl"] === "rtl" ? "0" : "inherit")};
    position: relative;

    .isoContactBox {
      width: 100%;
      height: 100%;
    }

    .contactBoxScrollbar {
      height: calc(100vh - 225px);
    }

    .isoContactControl {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-shrink: 0;
      padding: 30px;
      background-color: #ffffff;

      @media only screen and (max-width: 767px) {
        padding: 30px 20px;
      }

      button:not(.isoAddContactBtn) {
        font-size: 16px;
        color: ${palette("secondary", 0)};
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-color: #ffffff;
        outline: 0;
        padding: 0;
        border: 1px solid ${palette("border", 0)};
        margin-left: ${props =>
          props["data-rtl"] === "rtl" ? "inherit" : "-1px"};
        margin-right: ${props =>
          props["data-rtl"] === "rtl" ? "-1px" : "inherit"};
        cursor: pointer;
        ${borderRadius()};
        ${transition()};

        i {
          width: 100%;
        }

        span {
          display: none;
        }

        &:first-child {
          margin-left: ${props =>
            props["data-rtl"] === "rtl" ? "inherit" : "0"};
          margin-right: ${props =>
            props["data-rtl"] === "rtl" ? "0" : "inherit"};
        }

        &:hover {
          color: ${palette("primary", 0)};
          background-color: ${palette("grayscale", 7)};
        }
      }

      .isoAddContactBtn {
        background-color: ${palette("primary", 0)};
        border: 0;
        height: 30px;
        padding: 0 15px;
        margin-left: ${props =>
          props["data-rtl"] === "rtl" ? "inherit" : "auto"};
        margin-right: ${props =>
          props["data-rtl"] === "rtl" ? "auto" : "inherit"};
        ${borderRadius("3px")};
        ${transition()};

        span {
          font-size: 12px;
          font-weight: 400;
          padding: 0;
          text-transform: uppercase;
          color: #ffffff;
        }

        &:hover {
          background-color: ${palette("primary", 1)};
        }
      }
    }
    .jaMgbw .isoContactInfoWrapper .isoContactCardInfos {
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -webkit-align-items: baseline;
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      margin-bottom: 15px;
  }

  .jaMgbw {
    width: 100%;
    height: calc(100% - 145px);
    padding: 0 35px;
    display: -webkit-flex;
    display: -ms-flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

    .edit-contact-wrapper {
      padding:20px;
      width: 100%;
    }
    .editcontact-field  {
      margin-bottom: 20px;
    }
  
    .editcontact-field  input[type="radio"]{
      margin-right: 20px;
      margin-left:10px;
      vertical-align: middle;
    }
    .editcontact-field label {
      width: 20%;
      margin-right: 20px;
      min-width: 80px;
      margin-right: 20px;
      display: inline-block;
    }

    .editcontact-field input[type="text"], select{
      font-size: 14px;
      font-weight: 400;
      color: #979797;
      line-height: inherit;
      height: 36px;
      padding: 0 15px;
      margin: 0;
      border: 1px solid #e9e9e9;
      outline: 0 !important;
      overflow: hidden;
      background-color: #ffffff;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-transition: 3px;
      -o-border-radius: 3px;
      border-radius: 3px;
      -webkit-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
      -moz-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
      -ms-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
      -o-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
      -webkit-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
      transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
      box-sizing: content-box;
      width: 62%;
    }

  }
`;

const ContactsWrapper = WithDirection(WDContactsWrapper);

export { ContactsWrapper };
