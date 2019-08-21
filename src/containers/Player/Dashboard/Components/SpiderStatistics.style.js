import styled from 'styled-components';
import WithDirection from '../../../../settings/withDirection';


const ExpandableTableStyleWrapper = styled.div`
    h2
    {
        margin-top:50px;
        padding-left: 15px;
    }
    li{
        font-size: 18px;
        margin-top: 10px;
        padding-left: 25px;
    }

    .isoSimpleTable .active {
        background: green;
        color: #fdfdfd;
}
  `;

const ExpandableTableStyle = WithDirection(ExpandableTableStyleWrapper);

export { ExpandableTableStyle };