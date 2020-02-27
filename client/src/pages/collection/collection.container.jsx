import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionLoaded, selectCollection } from '../../redux/shop/shop.selectors';
import { WithSpinner } from '../../components';
import { CollectionPage } from './collection.component';

const mapStateToProps = (state, { match: { params: { collectionId } } }) => ({
  isLoading: !selectIsCollectionLoaded(state),
  collection: selectCollection(collectionId)(state)
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
