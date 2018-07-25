import PropTypes from "prop-types";

import CesiumComponent from "./CesiumComponent";
import { SceneContext, CameraContext } from "./context";

class Camera extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    constrainedAxis: PropTypes.func,
    defaultLookAmount: PropTypes.any,
    defaultMoveAmount: PropTypes.any,
    defaultRotateAmount: PropTypes.any,
    defaultZoomAmount: PropTypes.any,
    direction: PropTypes.any,
    frustum: PropTypes.any,
    maximumZoomFactor: PropTypes.any,
    onChanged: PropTypes.func,
    onMoveEnd: PropTypes.func,
    onMoveStart: PropTypes.func,
    percentageChanged: PropTypes.any,
    position: PropTypes.any,
    right: PropTypes.any,
    up: PropTypes.any,
    view: PropTypes.object,
    viewBoundingSphere: PropTypes.shape({
      boundingSphere: PropTypes.any,
      offset: PropTypes.any,
    }),
  };

  static cesiumProps = [
    "constrainedAxis",
    "defaultLookAmount",
    "defaultMoveAmount",
    "defaultRotateAmount",
    "defaultZoomAmount",
    "direction",
    "frustum",
    "maximumZoomFactor",
    "percentageChanged",
    "position",
    "right",
    "up",
  ];

  static cesiumEvents = ["changed", "moveEnd", "moveStart"];

  static setCesiumOptionsAfterCreate = true;

  createCesiumElement() {
    const { camera } = this.props.scene;
    if (typeof this.props.viewBoundingSphere === "object") {
      camera.viewBoundingSphere(
        this.props.viewBoundingSphere.boundingSphere,
        this.props.viewBoundingSphere.offset,
      );
    } else if (typeof this.props.view === "object") {
      camera.setView(this.props.view);
    }
    return camera;
  }

  updateCesiumElement(camera, prev) {
    if (
      this.props.view !== prev.viewBoundingSphere &&
      typeof this.props.viewBoundingSphere === "object"
    ) {
      camera.viewBoundingSphere(
        this.props.viewBoundingSphere.boundingSphere,
        this.props.viewBoundingSphere.offset,
      );
    } else if (this.props.view !== prev.view && typeof this.props.view === "object") {
      camera.setView(this.props.view);
    }
  }

  render() {
    return (
      <CameraContext.Provider value={this.cesiumElement}>
        {this.props.children}
      </CameraContext.Provider>
    );
  }
}

const CameraContainer = props => (
  <SceneContext.Consumer>
    {scene => <Camera {...props} scene={scene} />}
  </SceneContext.Consumer>
);

export default CameraContainer;
