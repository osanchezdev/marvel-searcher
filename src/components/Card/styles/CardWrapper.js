import styled from 'styled-components';

const CardWrapper = styled.div`
  cursor: pointer;
  flex-basis: 23%;
  min-height: 380px;
  background: gray;
  border-radius: 0.3rem;
  margin-bottom: 20px;
  margin: 5px;
  position: relative;
  overflow: hidden;

  /* &:nth-child(6n):last-child {
    margin-right: auto;
    margin-left: 3%;
  } */
`;

export default CardWrapper;
