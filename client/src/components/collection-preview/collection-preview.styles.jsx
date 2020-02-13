import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TitleContainer = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
};
