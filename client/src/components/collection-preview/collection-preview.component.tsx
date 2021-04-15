import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

import { CollectionItem } from '../collection-item/collection-item.component';
import { ICollection } from '../../interfaces/interfaces';

type CollectionPreviewProps = RouteComponentProps & ICollection;

export const CollectionPreviewComponent: FC<CollectionPreviewProps> = ({ title, items, routeName, match: { path } }) => {
  const renderedfilteredItems = items
    .filter((_, idx) => idx < 4)
    .map(item => <CollectionItem key={item.id} item={item} />);
  
  return (
    <CollectionPreviewContainer>
      <TitleContainer to={`${path}/${routeName}`}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        { renderedfilteredItems }
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export const CollectionPreview = withRouter(CollectionPreviewComponent);
