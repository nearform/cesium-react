import React from "react";
import PropTypes from "prop-types";

import { SceneContext, CameraContext } from "./context";

// abstract
class CameraOperation extends React.PureComponent {
  static propTypes = {
    cancelCameraFlight: PropTypes.bool,
  };

  componentDidMount() {
    this.cameraOperationStart(this.camera);
  }

  componentDidUpdate() {
    this.camera.cancelFlight();
    this.cameraOperationStart(this.camera);
  }

  componentWillUnmount() {
    const { cancelCameraFlight } = this.props;
    if (cancelCameraFlight) {
      this.camera.cancelFlight();
    }
  }

  render() {
    return null;
  }
}

const CameraOperationContainer = props => (
  <SceneContext.Consumer>
    {scene => (
      <CameraContext.Consumer>
        {camera => (
          <CameraOperation {...props} camera={camera || scene.camera} />
        )}
      </CameraContext.Consumer>
    )}
  </SceneContext.Consumer>
);

export default CameraOperationContainer;
