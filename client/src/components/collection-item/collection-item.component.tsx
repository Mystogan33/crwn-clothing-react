import React, { FC } from 'react';
import { ICollectionItem } from '../../interfaces/interfaces';
import { addItem } from '../../redux/cart/cartSlice';
import { useAppDispatch } from '../../redux/hooks';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

type CollectionItemProps = {
  item: ICollectionItem
};

export const CollectionItem: FC<CollectionItemProps> = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useAppDispatch();
  const addItemCart = () => dispatch(addItem(item));

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={addItemCart} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};
