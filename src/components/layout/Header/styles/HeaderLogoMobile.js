import styled from 'styled-components';

import { respondTo } from '../../../../styles/mixins';

const HeaderLogoMobile = styled.img`
  display: block;
  height: 30px;
  flex-basis: 10%;
  position: relative;
  padding-top: 5px;

  ${respondTo.sm`
    display: none;
  `}
`;

export default HeaderLogoMobile;
