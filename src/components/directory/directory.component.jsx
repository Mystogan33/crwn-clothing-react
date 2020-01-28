import React from 'react';
import './directory.styles.scss';
import { MenuItem } from '../index';
import SECTIONS_DATA from './sections.data.js';

export class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA
    }
  }

  render() {
    return (
      <div className="directory-menu">
        { this.state.sections.map(({id, ...othersProps}) => (
            <MenuItem
              key={id}
              {...othersProps} />
          ))
        }
      </div>
    )
  }
}
