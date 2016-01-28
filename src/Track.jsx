import React from 'react';

const Track = ({className, included, offset, length, additionalTrackStyles}) => {
  const style = Object.assign({
    left: offset + '%',
    width: length + '%',
    visibility: included ? 'visible' : 'hidden',
  }, additionalTrackStyles);

  return <div className={className} style={style} />;
};

export default Track;
