import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionItem } from '../../components';

import './collection.styles.scss';

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export const CollectionPage = connect(mapStateToProps)(
  ({ collection }) => {
    const { title, items } = collection;
    return (
      <div className="collection-page">
        <h2 className="title">{ title }</h2>
        <div className="items">
          {
            items.map(item => (
              <CollectionItem key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    )
  }
);
