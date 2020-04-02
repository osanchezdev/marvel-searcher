import styled from 'styled-components';

const HeaderLogo = styled.img`
  height: 30px;
  flex-basis: 10%;
  position: relative;
  padding-right: 30px;
  border-right: 2px solid ${({ theme }) => theme.body};

  transition: border-right-color 300ms ease;
`;

export default HeaderLogo;
