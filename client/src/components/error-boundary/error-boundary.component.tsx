import React from 'react';

import { ErrorImageText, ErrorImageContainer, ErrorImageOverlay } from './error-boundary.styles';
import { ErrorMessage } from '../../interfaces/interfaces';

export class ErrorBoundary extends React.Component {

  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error: ErrorMessage) {
    return { hasErrored: true };
  };

  componentDidCatch(error: ErrorMessage) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
};
