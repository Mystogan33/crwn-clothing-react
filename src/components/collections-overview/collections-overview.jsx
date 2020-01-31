import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import { CollectionPreview } from '../index';
import './collections-overview.styles.scss';

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export const CollectionsOverview = connect(mapStateToProps)(
  ({collections}) => (
    <div className="collections-overview">
      {
        collections.map(({id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))
      }
    </div>
  )
);
