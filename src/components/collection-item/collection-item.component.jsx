import React from 'react';
import './collection-item.styles.scss';

import { CustomButton } from '../index';

export const CollectionItem = ({id, name, price, imageUrl}) => (
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
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);
