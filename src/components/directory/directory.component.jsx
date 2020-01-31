import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MenuItem } from '../index';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export const Directory = connect(mapStateToProps)(
  ({sections}) => (
    <div className="directory-menu">
      { sections.map(({id, ...othersProps}) => (
          <MenuItem
            key={id}
            {...othersProps} />
        ))
      }
    </div>
  )
)
