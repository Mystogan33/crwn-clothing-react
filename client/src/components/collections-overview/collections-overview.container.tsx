import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching, selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { WithSpinner } from '../with-spinner/with-spinner.component';
import { CollectionsOverview } from './collections-overview.component';
import { RootState } from '../../redux/root-reducer';
import { ICollection } from '../../interfaces/interfaces';

interface selectors {
  isLoading: boolean,
  collections: ICollection[]
};

const mapStateToProps = createStructuredSelector<RootState, selectors>({
  isLoading: selectIsCollectionFetching,
  collections: selectShopCollectionsForPreview
});

const connectedComponent = connect(mapStateToProps)(CollectionsOverview);

export const CollectionsOverviewContainer = WithSpinner(connectedComponent);
export default CollectionsOverviewContainer;
