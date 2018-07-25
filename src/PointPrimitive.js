import PropTypes from "prop-types";

import CesiumComponent from "./CesiumComponent";
import { PointPrimitiveCollectionContext } from "./context";

class PointPrimitive extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    color: PropTypes.any,
    disableDepthTestDistance: PropTypes.number,
    distanceDisplayCondition: PropTypes.any,
    id: PropTypes.any,
    outlineColor: PropTypes.any,
    outlineWidth: PropTypes.number,
    pixelSize: PropTypes.number,
    position: PropTypes.any,
    scaleByDistance: PropTypes.any,
    show: PropTypes.bool,
    translucencyByDistance: PropTypes.any,
  };

  static cesiumProps = [
    "color",
    "disableDepthTestDistance",
    "distanceDisplayCondition",
    "id",
    "outlineColor",
    "outlineWidth",
    "pixelSize",
    "position",
    "scaleByDistance",
    "show",
    "translucencyByDistance",
  ];

  createCesiumElement(options) {
    this.initialOptions = options;
    return null;
  }

  mountCesiumElement() {
    this.cesiumElement = this.props.primitives.add(this.initialOptions);
  }

  destroyCesiumElement(primitive) {
    const { primitives } = this.props;
    if (primitives && !primitives.isDestroyed() && primitive) {
      primitives.remove(primitive);
    }
    this.initialOptions = null;
  }

  initialOptions = null;
}

const PointPrimitiveContainer = props => (
  <PointPrimitiveCollectionContext.Consumer>
    {primitives => <PointPrimitiveCollection {...props} primitives={primitives} />}
  </PointPrimitiveCollectionContext.Consumer>
);

export default PointPrimitiveContainer;
