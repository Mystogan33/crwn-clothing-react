import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { addItem } from '../../redux/cart/cart.actions';
import { ICollectionItem } from '../../interfaces/interfaces';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: ICollectionItem) => dispatch(addItem(item))
});

const connector = connect(null, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type CollectionItemProps = ReduxProps & {
  item: ICollectionItem
};

export const CollectionItemComponent = ({item, addItem}: CollectionItemProps) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

export const CollectionItem = connector(CollectionItemComponent);
