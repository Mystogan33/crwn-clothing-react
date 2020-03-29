import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { addItem } from '../../redux/cart/cart.actions';
import { ICartItem } from '../../interfaces/interfaces';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: ICartItem) => dispatch(addItem(item))
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ICollectionItemProps = PropsFromRedux & {
  item: ICartItem
}

export const CollectionItemComponent: FC<ICollectionItemProps> = ({item, addItem}) => {
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

export const CollectionItem = connect(null, mapDispatchToProps)(CollectionItemComponent);
