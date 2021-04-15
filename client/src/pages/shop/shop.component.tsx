import React, { useEffect, lazy, Suspense, useCallback, FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { fetchCollectionsStart } from '../../redux/shop/shopSlice';

// Components
import { Spinner } from '../../components';
import { ShopPageContainer } from './shop.styles';
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.component'))
const CollectionPageContainer = lazy(() => import('../collection/collection.component'));

export const ShopPage: FC<RouteComponentProps> = ({ match: { path } }) => {
  const dispatch = useAppDispatch();
  const startCollectionsFetch = useCallback(() => dispatch(fetchCollectionsStart()), [dispatch]);

  useEffect(() => {
    startCollectionsFetch();
  }, [startCollectionsFetch]);

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

export default ShopPage;
