import React from "react";
import PropTypes from "prop-types";
import { ScreenSpaceEventHandler as CesiumScreenSpaceEventHandler } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { ViewerContext, SceneContext, ScreenSpaceEventHandlerContext } from "./context";

class ScreenSpaceEventHandler extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    useDefault: PropTypes.bool,
  };

  _useDefault = false;

  get parent() {
    const { scene } = this.props;
    if (scene && !scene.isDestroyed()) {
      return scene;
    }
    return null;
  }

  createCesiumElement() {
    if (this.props.useDefault) {
      this._useDefault = true;
      return this.props.cesiumWidget.screenSpaceEventHandler;
    }
    return new CesiumScreenSpaceEventHandler(this.parent.canvas);
  }

  destroyCesiumElement(cesiumElement) {
    if (!this._useDefault) {
      cesiumElement.destroy();
    }
  }

  render() {
    return (
      <ScreenSpaceEventHandlerContext.Provider value={this.cesiumElement}>
        {this.props.children}
      </ScreenSpaceEventHandlerContext.Provider>
    );
  }
}

const ScreenSpaceEventHandlerContainer = props => (
  <ViewerContext.Consumer>
    {viewer => (
      <SceneContext.Consumer>
        {scene => <ScreenSpaceEventHandler {...props} scene={scene} cesiumWidget={viewer.cesiumWidget} />}}
      </SceneContext.Consumer>
    )}
  </ViewerContext.Consumer>
);

export default ScreenSpaceEventHandlerContainer;
