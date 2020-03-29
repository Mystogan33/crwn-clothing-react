import styled from 'styled-components';
import { CustomButton }  from '../custom-button/custom-button.component';

const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  transition: opacity .5s ease-in-out, box-shadow .4 ease-in-out;

  &:hover {
    .image {
      opacity: 0.8;
      box-shadow: 0 1px 10px rgba(10, 10, 10, 0.7);
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image, button {
        opacity: unset;
      }
    }
  }
`;

const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  border-radius: 0.2rem;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.85;
    min-width: unset;
    padding: 0 10px;
  }
`;

 const BackgroundImage = styled.div<{ imageUrl? : string}>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 0.3rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: all .3s ease-in-out;
  box-shadow: 0 1px 5px rgba(10, 10, 10, 0.35);
`;

 const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

 const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

export {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
};
