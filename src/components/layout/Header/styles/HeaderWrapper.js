import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.header};
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
`;

export default HeaderWrapper;
