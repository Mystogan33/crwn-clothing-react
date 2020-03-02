import React from 'react';

import { CollectionPreview } from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';

export const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    { collections.map(({id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))
    }
  </CollectionsOverviewContainer>
);