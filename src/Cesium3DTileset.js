import React from "react";
import PropTypes from "prop-types";
import { Cesium3DTileset as CesiumCesium3DTileset } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { cesium3DTilesetType, primitiveCollectionType, sceneType, viewerType } from "./types";

import { SceneContext, Cesium3DTilesetContext } from "./context"

class Cesium3DTileset extends CesiumComponent {
  static propTypes = {
    url: PropTypes.any,
    show: PropTypes.bool,
    // modelMatrix: PropTypes., // Matrix4 Matrix4.IDENTITY  optional A 4x4 transformation matrix that transforms the tileset's root tile.
    // shadows: PropTypes., // ShadowMode  ShadowMode.ENABLED  optional Determines whether the tileset casts or receives shadows from each light source.
    maximumScreenSpaceError: PropTypes.number,
    maximumMemoryUsage: PropTypes.number,
    cullWithChildrenBounds: PropTypes.bool,
    dynamicScreenSpaceError: PropTypes.bool,
    dynamicScreenSpaceErrorDensity: PropTypes.number,
    dynamicScreenSpaceErrorFactor: PropTypes.number,
    dynamicScreenSpaceErrorHeightFalloff: PropTypes.number,
    skipLevelOfDetail: PropTypes.bool,
    baseScreenSpaceError: PropTypes.number,
    skipScreenSpaceErrorFactor: PropTypes.number,
    skipLevels: PropTypes.number,
    immediatelyLoadDesiredLevelOfDetail: PropTypes.bool,
    loadSiblings: PropTypes.bool,
    // clippingPlanes: PropTypes., //  ClippingPlaneCollection   optional The ClippingPlaneCollection used to selectively disable rendering the tileset.
    // classificationType: PropTypes., //  ClassificationType    optional Determines whether terrain, 3D Tiles or both will be classified by this tileset. See Cesium3DTileset#classificationType for details about restrictions and limitations.
    // ellipsoid: PropTypes., // Ellipsoid Ellipsoid.WGS84 optional The ellipsoid determining the size and shape of the globe.
    debugFreezeFrame: PropTypes.bool, 
    debugColorizeTiles: PropTypes.bool,
    debugWireframe: PropTypes.bool, 
    debugShowBoundingVolume: PropTypes.bool, 
    debugShowContentBoundingVolume: PropTypes.bool,
    debugShowViewerRequestVolume: PropTypes.bool,
    debugShowGeometricError: PropTypes.bool,
    debugShowRenderingStatistics: PropTypes.bool,
    debugShowMemoryUsage: PropTypes.bool,
    debugShowUrl: PropTypes.bool,
    pointCloudShading: PropTypes.object,
  };

  static contextTypes = {
    primitiveCollection: primitiveCollectionType,
    scene: sceneType,
    viewer: viewerType
  };

  static cesiumProps = [
    "url",
    "show",
    // "modelMatrix",
    // "shadows",
    "maximumScreenSpaceError",
    "maximumMemoryUsage",
    "cullWithChildrenBounds",
    "dynamicScreenSpaceError",
    "dynamicScreenSpaceErrorDensity",
    "dynamicScreenSpaceErrorFactor",
    "dynamicScreenSpaceErrorHeightFalloff",
    "skipLevelOfDetail",
    "baseScreenSpaceError",
    "skipScreenSpaceErrorFactor",
    "skipLevels",
    "immediatelyLoadDesiredLevelOfDetail",
    "loadSiblings",
    // "clippingPlanes",
    // "classificationType",
    // "ellipsoid",
    "debugFreezeFrame",
    "debugColorizeTiles",
    "debugWireframe",
    "debugShowBoundingVolume",
    "debugShowContentBoundingVolume",
    "debugShowViewerRequestVolume",
    "debugShowGeometricError",
    "debugShowRenderingStatistics",
    "debugShowMemoryUsage",
    "debugShowUrl",
    "pointCloudShading",
  ];

  static cesiumReadOnlyProps = [
    "asset",
    "basePath",
    "boundingSphere",
    // "classificationType",
    // "ellipsoid",
    "properties",
    "ready",
    "readyPromise",
    "tilesLoaded",
    "timeSinceLoad",
    "totalMemoryUsageInBytes",
  ];

  static cesiumEvents = [
    "allTilesLoaded",
    "loadProgress",
    "tileFailed",
    "tileLoad",
    "tileUnload",
    "tileVisible",
  ];

  createCesiumElement(options) {
    return new CesiumCesium3DTileset(options);
  }

  mountCesiumElement(cesiumElement) {
    this.props.scene.primitives.add(cesiumElement);
  }

  destroyCesiumElement(cesiumElement) {
    const primitives = this.props.scene.primitives;
    if (primitives) {
      primitives.remove(cesiumElement);
    }
  }

  render() {
    return (
      <Cesium3DTilesetContext.Provider value={this.cesiumElement}>
        {this.props.children}
      </Cesium3DTilesetContext.Provider>
    );
  }
}

const Cesium3DTilesetContainer = props => (
  <SceneContext.Consumer>
    {scene => <Cesium3DTileset {...props} scene={scene} />}
  </SceneContext.Consumer>
);

export default Cesium3DTilesetContainer;
