import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MenuItem } from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { DirectoryMenuContainer } from './directory.styles';

export const DirectoryComponent = ({sections}) => (
  <DirectoryMenuContainer>
    { sections.map(({id, ...othersProps}) => (
        <MenuItem key={id} {...othersProps} />
      ))
    }
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export const Directory = connect(mapStateToProps)(DirectoryComponent);
