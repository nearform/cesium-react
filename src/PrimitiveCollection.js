import PropTypes from "prop-types";
import { PrimitiveCollection as CesiumPrimitiveCollection } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { PrimitiveCollectionContext, SceneContext } from "./context";

class PrimitiveCollection extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    show: PropTypes.bool,
    destroyPrimitives: PropTypes.bool,
  };

  static cesiumProps = ["show", "destroyPrimitives"];

  createCesiumElement(options) {
    return new CesiumPrimitiveCollection(options);
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
      <PrimitiveCollectionContext.Provider value={this.cesiumElement}>
        {this.props.children}
      </PrimitiveCollectionContext.Provider>
    );
  }
}

const PrimitiveCollectionContainer = props => (
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

export default PrimitiveCollectionContainer;
