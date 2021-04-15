import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import { fetchCollectionsAsync, onFetchCollectionsStart } from './shop.sagas';
import { fetchCollectionsStart } from './shopSlice';

describe('fetch collections start saga', () => {
  it('should trigger on FETCH_COLLECTIONS_START', () => {
    const generator = onFetchCollectionsStart();
    expect(generator.next().value)
      .toEqual(takeLatest(fetchCollectionsStart.type,fetchCollectionsAsync));
  });
});

describe('fetch collections async saga', () => {

  const generator = fetchCollectionsAsync();

  it('should call firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshot saga', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value)
      .toEqual(call(convertCollectionsSnapshotToMap, mockSnapshot));
  });

  it('should fire fetchCollectionsSuccess if collectionsMap is succesful', () => {
    const mockCollectionsMap = {
      hats: { id: 1 }
    };

    expect(generator.next(mockCollectionsMap).value)
      .toEqual(put(fetchCollectionsSuccess(mockCollectionsMap)));
  });

  it('should fire fetchCollectionsFailure on error', () => {
    const newGenerator = fetchCollectionsAsync();
    newGenerator.next();
    expect(newGenerator.throw({ message: 'error'}).value)
      .toEqual(put(fetchCollectionsFailure('error')))
  });
});

