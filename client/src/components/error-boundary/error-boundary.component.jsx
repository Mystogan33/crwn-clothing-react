import React from 'react';

import { ErrorImageText, ErrorImageContainer, ErrorImageOverlay } from './error-boundary.styles';

export class ErrorBoundary extends React.Component {

  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  };

  componentDidCatch(error) {
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
