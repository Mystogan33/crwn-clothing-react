import React from 'react';
import './collection-preview.styles.scss';

import { CollectionItem } from '../index';

export const CollectionPreview = ({title, items}) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
);
