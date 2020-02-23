import styled from 'styled-components';

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CollectionTitle = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  margin: 0 auto 30px;
`;

const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

    & > div {
      margin-bottom: 0;
    }
  }
`;

export {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
};
