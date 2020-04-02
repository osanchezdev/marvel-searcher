import styled from 'styled-components';

const HeaderActions = styled.div`
  flex-basis: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    color: inherit;
    text-decoration: none;
    font-weight: 300;
    position: relative;
    flex-basis: 40%;

    border-right: 1px solid ${({ theme }) => theme.body};

    transition: border-right-color 300ms ease;
  }
`;

export default HeaderActions;
