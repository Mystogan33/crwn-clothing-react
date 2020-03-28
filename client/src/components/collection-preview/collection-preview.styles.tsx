import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

const TitleContainer = styled(Link)`
  font-size: 28px;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;

export {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
};
