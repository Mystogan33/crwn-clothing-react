import React from 'react';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { CustomButton } from '../index';
import { addItem } from '../../redux/cart/cart.actions';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export const CollectionItem = connect(null, mapDispatchToProps)(
  ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }} />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
      </div>
    )
  }
);
