import React from 'react';

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function mergeOptions(obj1, obj2) {
  const obj3 = {};
  for (const attrname in obj1) {
    if (obj1.hasOwnProperty(attrname)) {
      obj3[attrname] = obj1[attrname];
    }
  }
  for (const attrname in obj2) {
    if (obj2.hasOwnProperty(attrname)) {
      obj3[attrname] = obj2[attrname];
    }
  }
  return obj3;
}

const Track = ({className, included, offset, length, additionalTrackStyles}) => {
  const style = mergeOptions({
    left: offset + '%',
    width: length + '%',
    visibility: included ? 'visible' : 'hidden',
  }, additionalTrackStyles);

  return <div className={className} style={style} />;
};

export default Track;
