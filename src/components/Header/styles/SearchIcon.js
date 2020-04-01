import styled from 'styled-components';

const SearchIcon = styled.img`
  width: ${({ active }) => (active ? '0' : '20px')};
  height: 20px;
  position: absolute;
  transition: width 0.3s ease;
`;

export default SearchIcon;
