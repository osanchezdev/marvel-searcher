import styled from 'styled-components';

const StarWrapper = styled.div`
  background: transparent;
  margin: 0 auto;
  color: ${({ theme }) => theme.text};
  text-rendering: auto;
  font-weight: 700;
  cursor: pointer;
  font-size: 30px;
  transition: color 300ms ease;
`;

export default StarWrapper;
