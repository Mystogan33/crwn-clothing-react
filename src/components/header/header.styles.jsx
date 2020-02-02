import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  &.scrolled {
    position: sticky;
    top: 0;
    opacity: 0.96;
    background-color: white;
    z-index: 1;
    transition: .75s ease-in-out;
  }
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 18px 25px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
`;

export {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
}
