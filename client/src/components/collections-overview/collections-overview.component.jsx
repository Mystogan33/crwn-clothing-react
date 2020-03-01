import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionPreview } from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';

export const CollectionsOverviewComponent = ({collections}) => (
  <CollectionsOverviewContainer>
    { collections.map(({id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))
    }
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

export const CollectionOverview = connect(mapStateToProps)(CollectionsOverviewComponent);
