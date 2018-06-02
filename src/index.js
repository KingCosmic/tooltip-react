import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this.click = this.click.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  click() {
    const { delayHide } = this.props;
    this.show(() => {

      if (delayHide) setTimeout(this.hide, delayHide);

    })
  }

  hoverOn() {
    if (this.timeout) clearTimeout(this.timeout);
    this.show();
  }

  hoverOff() {
    const { delayHide } = this.props;
    if (!delayHide) return this.hide();

    this.timeout = setTimeout(this.hide, delayHide);
  }

  show(cb = () => {}) {
    this.setState({
      visible: true
    }, () => {
      cb();
    });
  }

  hide() {
    this.setState({
      visible: false
    })
  }

  render() {
    const { props, state, click, hoverOn, hoverOff } = this;
    const { type } = props;

    return (
      <div
        className='tooltip'
        onClick={(type === 'click') ? () => click() : null}
        onMouseEnter={(type === 'hover' ? () => hoverOn() : null)}
        onMouseLeave={(type === 'hover' ? () => hoverOff() : null)}
      >

        {props.children}

        {
          state.visible &&
          <span className={`tooltipText ${props.pos}`}>{props.content}</span>
        }
      </div>
    )
  }
}

Tooltip.propTypes = {
  /* required */
  content: PropTypes.string.isRequired,

  /* optional */
  theme: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf(['click', 'hover']),
  pos: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  arrows: PropTypes.oneOf([true, false]),
  delayHide: PropTypes.number, // ms to use for the setTimeout
}

Tooltip.defaultProps = {
  theme: 'dark',
  type: 'hover',
  pos: 'top',
  arrows: true
}

export default Tooltip;