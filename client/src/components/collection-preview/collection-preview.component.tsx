import React, { FC } from 'react';
import { withRouter, match, RouteComponentProps } from 'react-router-dom';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

import { CollectionItem } from '../collection-item/collection-item.component';
import { ICollectionItem } from '../../interfaces/interfaces';

interface ICollectionPreviewProps extends RouteComponentProps<any> {
  title: string,
  items: ICollectionItem[],
  routeName: string,
  match: any
};

export const CollectionPreviewComponent: FC<ICollectionPreviewProps> = ({ title, items, routeName, match }) => (  <CollectionPreviewContainer>
    <TitleContainer to={`${match.path}/${routeName}`}>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      { items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export const CollectionPreview = withRouter(CollectionPreviewComponent);