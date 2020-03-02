import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching, selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { WithSpinner } from '../with-spinner/with-spinner.component';
import { CollectionsOverview } from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  collections: selectShopCollectionsForPreview
});

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
