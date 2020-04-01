import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { MenuItem } from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';
import { ICategories } from '../../interfaces/interfaces';
import { RootState } from '../../redux/root-reducer';

const mapStateToProps = createStructuredSelector<RootState, {sections: ICategories}>({
  sections: selectDirectorySections
});

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type DirectoryProps = ReduxProps;

export const DirectoryComponent = ({sections}: DirectoryProps) => (
  <DirectoryMenuContainer>
    { sections.map(({id, ...othersProps}) => (
        <MenuItem key={id} {...othersProps} />
      ))
    }
  </DirectoryMenuContainer>
);

export const Directory = connector(DirectoryComponent);
