import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionPreview } from '../collection-preview/collection-preview.component';
import { WithSpinner } from '../with-spinner/with-spinner.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  collections: selectShopCollectionsForPreview
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ICollectionsOverviewProps = PropsFromRedux;

export const CollectionsOverviewCmp: FC<ICollectionsOverviewProps> = ({ collections }) => (
  <CollectionsOverviewContainer>
    { collections.map(({id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))
    }
  </CollectionsOverviewContainer>
);

const connectedComponent = connector(CollectionsOverviewCmp);
const CollectionsOverview = WithSpinner(connectedComponent);
export default CollectionsOverview;
