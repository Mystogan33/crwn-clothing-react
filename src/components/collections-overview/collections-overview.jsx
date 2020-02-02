import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionPreview } from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

export const CollectionsOverview = connect(mapStateToProps)(
  ({collections}) => (
    <CollectionsOverviewContainer>
      { collections.map(({id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))
      }
    </CollectionsOverviewContainer>
  )
);
