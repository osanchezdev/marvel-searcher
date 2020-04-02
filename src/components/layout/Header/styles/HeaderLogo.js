import styled from 'styled-components';

import { respondTo } from '../../../../styles/mixins';

const HeaderLogo = styled.img`
  display: none;
  height: 30px;
  flex-basis: 10%;
  position: relative;
  padding-right: 30px;
  border-right: 2px solid ${({ theme }) => theme.body};
  transition: border-right-color 300ms ease;

  ${respondTo.sm`
    display: block;
  `}
`;

export default HeaderLogo;
