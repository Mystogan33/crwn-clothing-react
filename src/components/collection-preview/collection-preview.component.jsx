import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

import { CollectionItem } from '../collection-item/collection-item.component';

export const CollectionPreview = withRouter(
  ({title, items}) => (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        { items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
);
