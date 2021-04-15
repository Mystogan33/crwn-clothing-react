import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { ICollections } from '../../interfaces/interfaces';
import { fetchCollectionsFailure, fetchCollectionsStart, fetchCollectionsSuccess } from './shopSlice';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot: firebase.firestore.QuerySnapshot = yield collectionRef.get();
    const collectionsMap: ICollections = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch(error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(fetchCollectionsStart.type, fetchCollectionsAsync);
};

export function* shopSagas() {
  yield all([
    call(onFetchCollectionsStart)
  ]);
}