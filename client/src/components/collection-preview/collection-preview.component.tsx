import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

import { CollectionItem } from '../collection-item/collection-item.component';
import { ICollection } from '../../interfaces/interfaces';

type CollectionPreviewProps = RouteComponentProps & ICollection;

export const CollectionPreviewComponent = ({ title, items, routeName, match }: CollectionPreviewProps) => (
  <CollectionPreviewContainer>
    <TitleContainer to={`${match.path}/${routeName}`}>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      { items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export const CollectionPreview = withRouter(CollectionPreviewComponent);