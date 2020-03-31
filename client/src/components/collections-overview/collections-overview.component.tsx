import React from 'react';

import { CollectionPreview } from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { ICollection } from '../../interfaces/interfaces';

type CollectionOverviewProps = {
  collections: ICollection[]
};

export const CollectionsOverview = ({ collections }: CollectionOverviewProps) => (
  <CollectionsOverviewContainer>
    { collections.map(({id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))
    }
  </CollectionsOverviewContainer>
);