import PropTypes from "prop-types";
import { PointPrimitiveCollection as CesiumPointPrimitiveCollection } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { PointPrimitiveCollectionContext, PrimitiveCollectionContext, SceneContext } from "./context";

class PointPrimitiveCollection extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    blendOption: PropTypes.any,
    debugShowBoundingVolume: PropTypes.bool,
    modelMatrix: PropTypes.any,
  };

  static cesiumProps = ["blendOption", "debugShowBoundingVolume", "modelMatrix"];

  createCesiumElement(options) {
    return new CesiumPointPrimitiveCollection(options);
  }

  mountCesiumElement(col) {
    this.props.primitiveCollection.add(col);
  }

  destroyCesiumElement(col) {
    const { primitiveCollection } = this.props;
    if (primitives && !primitives.isDestroyed()) {
      p.remove(col);
    }
    if (!col.isDestroyed()) {
      col.destroy();
    }
  }

  render() {
    return (
      <PointPrimitiveCollectionContext.Provider value={this.cesiumElement}>
        {this.props.children}
      </PointPrimitiveCollectionContext.Provider>
    );
  }
}

const PointPrimitiveCollectionContainer = props => (
  <SceneContext.Consumer>
    {scene => (
      <PrimitiveCollectionContext.Consumer>
        {primitiveCollection => (
          <PointPrimitiveCollection {...props} primitiveCollection={primitiveCollection || scene.primitives} />
        )}
      </PrimitiveCollectionContext.Consumer>
    )}
  </SceneContext.Consumer>
);

export default PointPrimitiveCollectionContainer;
