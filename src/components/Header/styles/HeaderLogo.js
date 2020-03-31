import styled from 'styled-components';

const HeaderLogo = styled.img`
  height: 30px;
  flex-basis: 10%;
  position: relative;
  border-right: 2px solid ${({ theme }) => theme.body};
`;

export default HeaderLogo;
