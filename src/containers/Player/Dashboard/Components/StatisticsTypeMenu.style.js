import styled from 'styled-components';
import WithDirection from '../../../../settings/withDirection';


const ScrollMenuStyleWrapper = styled.div`
  .menu-item {
    padding: 0 40px;
    margin: 5px 10px;
    user-select: none;
    cursor: pointer;
    border: none;
  }
  .menu-item-wrapper.active {
    color: red;
  }
  .menu-item.active {
    border: 1px green solid;
  }
  
  .scroll-menu-arrow {
    padding: 20px;
    cursor: pointer;
  }
  `;

const ScrollMenuStyle = WithDirection(ScrollMenuStyleWrapper);

export { ScrollMenuStyle };