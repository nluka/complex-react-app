import React from 'react';
import PropTypes from 'prop-types';

export default function Container(props) {
  return <div className={'container py-md-5' + (props.wide ? '' : ' container--narrow')}>{props.children}</div>;
}

Container.propTypes = {
  children: PropTypes.any,
};
