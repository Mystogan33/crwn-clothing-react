import React from 'react';

import { Spinner } from '../spinner/spinner.component';

export const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
};
