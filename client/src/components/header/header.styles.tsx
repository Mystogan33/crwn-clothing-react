import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const hoverOrActiveLink = css`
  color: grey;
  &:before,
  &:after {
    width: 50%;
    opacity: 1;
  }
`;

// Components

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 40px;
  transition: all .5s ease-in-out, box-shadow 0s;

  &.scrolled {
    padding: 0 20px;
    position: sticky;
    top: 0;
    opacity: 0.96;
    background-color: white;
    z-index: 1;
    box-shadow: 0px 7px 24px 4px rgba(0,0,0,0.2);
  }

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

const LogoContainer = styled(Link)`
  height: 100%;
  padding: 14px 5px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-shadow: 1px 1px 2px pink;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const isActive = ({ to, active }: { to?: string, active?: string}) => {
  if(to && (to === active))
    return hoverOrActiveLink;
};

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 0px;
    height: 2px;
    margin: 2px 0 0;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    background-color: black;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }

  ${isActive}

  &:hover {
    ${hoverOrActiveLink}
  }
`;

export {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
}
