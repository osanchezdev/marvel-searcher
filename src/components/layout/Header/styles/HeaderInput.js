import styled from 'styled-components';

const HeaderInput = styled.input`
  width: 100%;
  outline: none;
  padding: 5px;
  padding-left: ${({ active }) => (active ? '0' : '25px')};
  border: none;
  background: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  transition-property: background, color, padding-left;
  transition: all 300ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export default HeaderInput;
