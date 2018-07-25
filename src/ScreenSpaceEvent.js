import React from "react";
import PropTypes from "prop-types";

import { ScreenSpaceEventHandlerContext } from "./context";

class ScreenSpaceEvent extends React.PureComponent {
  static propTypes = {
    action: PropTypes.func,
    modifier: PropTypes.number,
    type: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { screenSpaceEventHandler, action, modifier, type } = this.props;
    if (action) {
      screenSpaceEventHandler.setInputAction(action, type, modifier);
    } else {
      // just remove default events
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  }

  componentDidUpdate(prevProps) {
    const { screenSpaceEventHandler } = this.props;
    screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
    this.componentDidMount();
  }

  componentWillUnmount() {
    const { screenSpaceEventHandler, action, modifier, type } = this.props;
    if (screenSpaceEventHandler && !screenSpaceEventHandler.isDestroyed() && action) {
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  }

  render() {
    return null;
  }
}

const ScreenSpaceEventContainer = props => (
  <ScreenSpaceEventHandlerContext.Consumer>
    {screenSpaceEventHandler => <ScreenSpaceEvent {...props} screenSpaceEventHandler={screenSpaceEventHandler} />}
  </ScreenSpaceEventHandlerContext.Consumer>
);

export default ScreenSpaceEventContainer;
