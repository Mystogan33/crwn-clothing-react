import React, { FC } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

export const Spinner: FC<any> = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);
