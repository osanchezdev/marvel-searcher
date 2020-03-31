import styled from 'styled-components';

const HeaderInput = styled.input`
  width: 100%;
  outline: none;
  padding: 5px;
  padding-left: ${({ active }) => (active ? '0' : '25px')};
  border: none;
  background: #fff;
  color: ${({ theme }) => theme.text};
  transition: padding-left 0.3s ease;
`;

export default HeaderInput;
