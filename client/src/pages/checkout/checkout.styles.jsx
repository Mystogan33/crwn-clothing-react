import styled from 'styled-components';

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

/* padding: 10px 0; */
const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

export {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
};
