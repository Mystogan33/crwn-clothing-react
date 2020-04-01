import React from 'react';

import { CollectionItem } from '../../components';
import { ICollection } from '../../interfaces/interfaces';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

interface CollectionPageProps {
  collection: ICollection
}

export const CollectionPage = ({ collection }: CollectionPageProps) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{ title }</CollectionTitle>
      <CollectionItemsContainer>
        { items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
};

export default CollectionPage;