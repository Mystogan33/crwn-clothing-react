import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionsLoaded, selectCollection } from '../../redux/shop/shop.selectors';
import { WithSpinner } from '../../components';
import CollectionPage from './collection.component';
import { FC } from 'react';

const mapStateToProps = (state: any, { match: { params: { collectionId } } }: any) => ({
  isLoading: !selectIsCollectionsLoaded(state),
  collection: selectCollection(collectionId)(state)
});

const connectedComponent = connect(mapStateToProps)(CollectionPage);
const CollectionPageContainer: FC<any> = WithSpinner(connectedComponent);

export default CollectionPageContainer;
