import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    const { type, delayHide } = this.props;

    this.setState({
      visible: true
    }, () => {
      if (type === 'click' && delayHide) {
        setTimeout(this.hide, delayHide)
      }
    });
  }

  hide() {
    const { type, delayHide } = this.props;

    if (type === 'hover' && delayHide) {
      setTimeout(() => {
        this.setState({
          visible: false
        })
      }, delayHide)
    } else {
      this.setState({
        visible: false
      })
    }
  }

  render() {
    const { props, state, show, hide } = this;
    const { type } = props;

    return (
      <div
        className={styles.tooltip}
        onClick={(type === 'click') ? () => show() : null}
        onMouseEnter={(type === 'hover' ? () => show() : null)}
        onMouseLeave={(type === 'hover' ? () => hide() : null)}
      >

        {props.children}

        {
          state.visible &&
          <span className={`${styles.tooltipText} ${styles.top}`}>{props.content}</span>
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