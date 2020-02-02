import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export const CollectionItem = connect(null, mapDispatchToProps)(
  ({item, addItem}) => {
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
    )
  }
);
