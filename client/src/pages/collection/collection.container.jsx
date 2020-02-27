import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { WithSpinner } from '../../components';
import { CollectionPage } from './collection.component';

const mapStateToProps = (state, { match: { params: { collectionId } } }) => ({
  isLoading: !selectIsCollectionLoaded(state),
  collection: selectCollection(collectionId)
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
