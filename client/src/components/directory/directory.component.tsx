import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MenuItem } from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { DirectoryMenuContainer } from './directory.styles';

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type IDirectoryComponentProps = PropsFromRedux;

/* Remove the interface when selectors are defined */

export const DirectoryComponent: FC<IDirectoryComponentProps> = ({sections}) => (
  <DirectoryMenuContainer>
    { sections.map(({id, ...othersProps}: any) => (
        <MenuItem key={id} {...othersProps} />
      ))
    }
  </DirectoryMenuContainer>
);

export const Directory = connector(DirectoryComponent);
