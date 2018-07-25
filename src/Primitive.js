import PropTypes from "prop-types";
import { Primitive as CesiumPrimitive } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { PrimitiveCollectionContext, SceneContext } from "./context";

class Primitive extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    allowPicking: PropTypes.any,
    appearance: PropTypes.any,
    asynchronous: PropTypes.bool,
    compressVertices: PropTypes.bool,
    cull: PropTypes.bool,
    debugShowBoundingVolume: PropTypes.bool,
    depthFailAppearance: PropTypes.any,
    geometryInstances: PropTypes.any,
    interleave: PropTypes.bool,
    modelMatrix: PropTypes.any,
    releaseGeometryInstances: PropTypes.bool,
    shadows: PropTypes.any,
    show: PropTypes.bool,
  };

  static cesiumProps = [
    "allowPicking",
    "appearance",
    "cull",
    "debugShowBoundingVolume",
    "depthFailAppearance",
    "modelMatrix",
    "shadows",
    "show",
  ];

  static cesiumReadOnlyProps = [
    "asynchronous",
    "compressVertices",
    "geometryInstances",
    "interleave",
    "releaseGeometryInstances",
  ];

  createCesiumElement(options) {
    return new CesiumPrimitive(options);
  }

  mountCesiumElement(premitive) {
    this.props.primitiveCollection.add(premitive);
  }

  destroyCesiumElement(premitive) {
    const { primitiveCollection } = this.props;
    if (primitiveCollection) {
      primitiveCollection.remove(premitive);
    }
  }
}

const PrimitiveContainer = props => (
  <SceneContext.Consumer>
    {scene => (
      <PrimitiveCollectionContext.Consumer>
        {primitiveCollection => (
          <Primitive {...props} primitiveCollection={primitiveCollection || scene.primitives} />
        )}
      </PrimitiveCollectionContext.Consumer>
    )}
  </SceneContext.Consumer>
);

export default PrimitiveContainer;