import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionsLoaded, selectCollection } from '../../redux/shop/shop.selectors';
import { WithSpinner } from '../../components';
import CollectionPage from './collection.component';

const mapStateToProps = (state, { match: { params: { collectionId } } }) => ({
  isLoading: !selectIsCollectionsLoaded(state),
  collection: selectCollection(collectionId)(state)
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
