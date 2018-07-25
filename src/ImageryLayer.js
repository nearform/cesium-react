import PropTypes from "prop-types";
import { ImageryLayer as CesiumImageryLayer } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { SceneContext } from "./context";

class ImageryLayer extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    availability: PropTypes.any,
    billboard: PropTypes.any,
    box: PropTypes.any,
    corridor: PropTypes.any,
    cylinder: PropTypes.any,
    description: PropTypes.any,
    ellipse: PropTypes.any,
    ellipsoid: PropTypes.any,
    id: PropTypes.string,
    label: PropTypes.any,
    model: PropTypes.any,
    name: PropTypes.any,
    onDefinitionChanged: PropTypes.func,
    orientation: PropTypes.any,
    parent: PropTypes.any,
    path: PropTypes.any,
    plane: PropTypes.any,
    point: PropTypes.any,
    polygon: PropTypes.any,
    polyline: PropTypes.any,
    polylineVolume: PropTypes.any,
    position: PropTypes.any,
    properties: PropTypes.any,
    rectangle: PropTypes.any,
    show: PropTypes.any,
    viewFrom: PropTypes.any,
    wall: PropTypes.any,
  };

  static cesiumProps = [
    "alpha",
    "brightness",
    "contrast",
    "hue",
    "saturation",
    "gamma",
    "splitDirection",
    "minificationFilter",
    "magnificationFilter",
    "show",
  ];

  static cesiumReadOnlyProps = [
    "imageryProvider",
    "rectangle",
    "maximumAnisotropy",
    "minimumTerrainLevel",
    "maximumTerrainLevel",
  ];

  static cesiumEvents = ["definitionChanged"];

  get parent() {
    const { scene } = this.props;
    if (scene && !scene.isDestroyed()) {
      return scene.imageryLayers;
    }
    return null;
  }

  createCesiumElement(options) {
    const { imageryProvider, ...opts } = options;
    return new CesiumImageryLayer(imageryProvider, opts);
  }

  mountCesiumElement(layer) {
    this.parent.add(layer);
  }

  destroyCesiumElement(layer) {
    const p = this.parent;
    if (p) {
      p.remove(layer);
    }
  }
}

const ImageryLayerContainer = props => (
  <SceneContext.Consumer>
    {scene => <ImageryLayer {...props} scene={scene} />}
  </SceneContext.Consumer>
);

export default ImageryLayerContainer;
