import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionItem } from '../../components';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const mapStateToProps = (state, { match: { params: { collectionId } } }) => ({
  collection: selectCollection(collectionId)(state)
});

export const CollectionPage = connect(mapStateToProps)(
  ({ collection }) => {
    const { title, items } = collection;
    return (
      <CollectionPageContainer>
        <CollectionTitle>{ title }</CollectionTitle>
        <CollectionItemsContainer>
          {items.map(item => (
              <CollectionItem key={item.id} item={item} />
            ))
          }
        </CollectionItemsContainer>
      </CollectionPageContainer>
    )
  }
);
