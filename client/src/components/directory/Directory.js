import React from 'react';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import MenuItem from '../menuItem/MenuItem';
import './Directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
