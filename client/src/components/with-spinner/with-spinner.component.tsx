import React, { ComponentType } from 'react';
import { Spinner } from '../spinner/spinner.component';

type WithSpinnerProps = {
  isLoading: boolean,
  [x: string]: any
};

export const WithSpinner = <T extends WithSpinnerProps = WithSpinnerProps>(WrappedComponent: ComponentType<T>) => {
  return ({ isLoading, ...otherProps}: T) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps as T} />
  };
};
