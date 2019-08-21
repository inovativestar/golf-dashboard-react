import styled from 'styled-components';
import { palette } from 'styled-theme';
import BoxComponent from '../../../components/utility/box';
import WithDirection from '../../../settings/withDirection';
import Modal from '../../../components/feedback/modal';

const BoxWrapper = styled(BoxComponent)`
  .isoGroupTableBtn {
    display: flex;
    margin-bottom: 20px;
    a {
      margin-left: auto;
    }
  }
`;

const TopbarSearchModalWrapper = styled(Modal)`
&.ant-modal {
  top: 150px;
  padding-bottom: 0;
}

.ant-modal-close-x {
  width: 28px;
  height: 28px;
  line-height: 28px;
  display: none;
}

.ant-modal-content {
  overflow: hidden;
  border-radius: 5px;

  .ant-modal-header {
    display: none;
  }

  .ant-modal-body {
    padding: 0px;

    .isoSearchContainer {
      .ant-input-search {
        .ant-input {
          border: 0;
          border-radius: 0;
          padding-left: ${props =>
            props['data-rtl'] === 'rtl' ? '15px' : '55px'};
          padding-right: ${props =>
            props['data-rtl'] === 'rtl' ? '55px' : '15px'};
          height: 60px;
          font-size: 14px;

          &::-webkit-input-placeholder {
            color: ${palette('grayscale', 0)};
          }

          &:-moz-placeholder {
            color: ${palette('grayscale', 0)};
          }

          &::-moz-placeholder {
            color: ${palette('grayscale', 0)};
          }
          &:-ms-input-placeholder {
            color: ${palette('grayscale', 0)};
          }

          &:focus {
            outline: 0;
            box-shadow: none;
          }
        }
      }

      .ant-input-suffix {
        right: ${props => (props['data-rtl'] === 'rtl' ? '20px' : 'auto')};
        left: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '20px')};
        height: 0;

        &:before {
          content: '\f4a4';
          font-family: 'ionicons';
          font-size: 24px;
          color: ${palette('text', 2)};
        }

        .ant-input-search-icon {
          display: none;
        }
      }
    }
  }
}
`;
const GroupPageWrapper = styled.div`
.PageHeader {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  -webkit-box-pack: justify;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: justify;
  justify-content: flex-end;
  margin-bottom: 30px;

  a {
    text-decoration: none;
  }
  .isoGoInvoBtn {
    margin-right: 15px;
  }
  .isoInvoPrint {
    background: ${palette('blue', 14)};
    margin: ${props =>
      props['data-rtl'] === 'rtl' ? '0 15px 0 0' : '0 0 0 15px'};
    @media (max-width: 500px) {
      margin-top: 15px;
    }

    @media (max-width: 485px) {
      margin: 0;
      margin-top: 15px;
    }
  }
  .saveBtn {
    background: ${palette('blue', 14)};
    margin: ${props =>
      props['data-rtl'] === 'rtl' ? '0 15px 0 0' : '0 0 0 15px'};
  }

}
.Title {
  font-size: 16px;
  font-weight: 500;
  color: ${palette('grey', 8)};
  margin: 0 0 20px;
  line-height: 1;
}
.GroupNameInput {
  width: 200px;
  margin-top: 8px;
  margin-bottom: 8px;
}
.studentActionBtnContainer {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  -webkit-box-pack: justify;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: justify;
  justify-content: flex-end;
  margin-bottom: 30px;
}
`; 

const CardWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;
  .isoGroupTable {
    table {
      tbody {
        tr {
          td {
            .isoGroupBtnView {
              display: flex;
              flex-direction: row;
              > a {
                margin: ${props =>
                  props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0'};
              }
            }
          }
          &:hover {
            .isoGroupBtnView {
              ${'' /* opacity: 1; */};
            }
          }
        }
      }
    }
  }

  .groupListTable {
    .ant-dropdown-menu-item,
    .ant-dropdown-menu-submenu-title {
      &:hover {
        background-color: ${palette('secondary', 1)};
      }
    }

    .actionView {
      color: ${palette('text', 3)};

      &:hover {
        color: ${palette('primary', 0)};
      }
    }
    .actionOpen {
      font-size: 18px;
      border: 0;
      margin: 3px;
      color: ${palette('primary', 0)};

      &:hover {
        border: 0;
        margin: 3px;
        color: ${palette('primary', 2)};
      }
    }
    .actionEdit {
      font-size: 18px;
      border: 0;
      margin: 3px;
      color: ${palette('secondary', 0)};

      &:hover {
        border: 0;
        margin: 3px;
        color: ${palette('secondary', 2)};
      }
    }
    .actionDelete {
      font-size: 18px;
      border: 0;
      margin: 3px;
      color: ${palette('error', 0)};

      &:hover {
        border: 0;
        margin: 3px;
        color: ${palette('error', 2)};
      }
    }
  }
`;
const GroupPage = WithDirection(GroupPageWrapper)
const Box = WithDirection(BoxWrapper);
const Card = WithDirection(CardWrapper);
const TopbarSearchModal = WithDirection(TopbarSearchModalWrapper);
export { Box, Card, GroupPage, TopbarSearchModal };

