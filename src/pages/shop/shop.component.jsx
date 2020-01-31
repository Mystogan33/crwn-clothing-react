import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import { CollectionPreview } from '../../components';


const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export const ShopPage = connect(mapStateToProps)(
  ({collections}) => (
    <div className="shop-page">
    {
      collections.map(({id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))
    }
    </div>
  )
);
