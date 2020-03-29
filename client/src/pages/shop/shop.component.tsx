import React, { useEffect, lazy, Suspense, FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { Spinner } from '../../components';

import { ShopPageContainer } from './shop.styles';
import { Dispatch } from 'redux';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type IShopPageProps = PropsFromRedux & RouteComponentProps;

export const ShopPage: FC<IShopPageProps> = ({ fetchCollectionsStart, match: { path } }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={path}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

export default connector(ShopPage);
