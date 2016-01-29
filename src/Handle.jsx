import React from 'react';
import Tooltip from 'rc-tooltip';


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

export default class Handle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTooltipVisible: false,
    };
  }

  showTooltip() {
    this.setState({
      isTooltipVisible: true,
    });
  }

  hideTooltip() {
    this.setState({
      isTooltipVisible: false,
    });
  }

  render() {
    const props = this.props;
    const {className, tipTransitionName, tipFormatter, offset, value} = props;
    const {dragging, noTip, additionalHandleStyles} = props;
    const noTooltipStyle = { left: offset + '%' };
    const tooltipStyle = mergeOptions(noTooltipStyle, additionalHandleStyles);
    const handle = (<div className={className} style={noTip ? noTooltipStyle : tooltipStyle}
                      onMouseUp={this.showTooltip.bind(this)}
                      onMouseEnter={this.showTooltip.bind(this)}
                      onMouseLeave={this.hideTooltip.bind(this)}/>);

    if (noTip) {
      return handle;
    }

    const isTooltipVisible = dragging || this.state.isTooltipVisible;
    return (<Tooltip
              prefixCls={className.replace('slider-handle', 'tooltip')}
              placement="top"
              visible={isTooltipVisible}
              overlay={<span>{tipFormatter(value)}</span>}
              delay={0}
              transitionName={tipTransitionName}>
              {handle}
            </Tooltip>);
  }
}

Handle.propTypes = {
  className: React.PropTypes.string,
  offset: React.PropTypes.number,
  tipTransitionName: React.PropTypes.string,
  tipFormatter: React.PropTypes.func,
  value: React.PropTypes.number,
  dragging: React.PropTypes.bool,
  noTip: React.PropTypes.bool,
  additionalHandleStyles: React.PropTypes.object,
};
