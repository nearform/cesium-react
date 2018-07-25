import { Camera, Cesium3DTileset, CesiumWidget, DataSourceCollection, EntityCollection, ImageryLayerCollection, PointPrimitiveCollection as PointPrimitiveCollection$1, PrimitiveCollection, Scene, ScreenSpaceEventHandler, Viewer, SceneMode, Entity, CustomDataSource, CzmlDataSource, GeoJsonDataSource, KmlDataSource, Primitive, ImageryLayer } from 'cesium';
import PropTypes from 'prop-types';
import React$1 from 'react';
import ReactDOMServer from 'react-dom/server.browser';

var cameraType = PropTypes.instanceOf(Camera);
var cesium3DTilesetType = PropTypes.instanceOf(Cesium3DTileset);
var cesiumWidgetType = PropTypes.instanceOf(CesiumWidget);
var dataSourceCollectionType = PropTypes.instanceOf(DataSourceCollection);
var entityCollectionType = PropTypes.instanceOf(EntityCollection);
var imageryLayerCollectionType = PropTypes.instanceOf(ImageryLayerCollection);
var pointPrimitiveCollectionType = PropTypes.instanceOf(PointPrimitiveCollection$1);
var primitiveCollectionType = PropTypes.instanceOf(PrimitiveCollection);
var sceneType = PropTypes.instanceOf(Scene);
var screenSpaceEventHandlerType = PropTypes.instanceOf(ScreenSpaceEventHandler);
var viewerType = PropTypes.instanceOf(Viewer);

var types = /*#__PURE__*/Object.freeze({
  cameraType: cameraType,
  cesium3DTilesetType: cesium3DTilesetType,
  cesiumWidgetType: cesiumWidgetType,
  dataSourceCollectionType: dataSourceCollectionType,
  entityCollectionType: entityCollectionType,
  imageryLayerCollectionType: imageryLayerCollectionType,
  pointPrimitiveCollectionType: pointPrimitiveCollectionType,
  primitiveCollectionType: primitiveCollectionType,
  sceneType: sceneType,
  screenSpaceEventHandlerType: screenSpaceEventHandlerType,
  viewerType: viewerType
});

var Cesium3DTilesetContext = React$1.createContext(null);
var ViewerContext = React$1.createContext(null);
var CameraContext = React$1.createContext();
var CesiumWidgetContext = React$1.createContext();
var DataSourcesContext = React$1.createContext();
var EntitiesContext = React$1.createContext();
var PointPrimitiveCollectionContext = React$1.createContext();
var PrimitiveCollectionContext = React$1.createContext();
var SceneContext = React$1.createContext();
var ScreenSpaceEventHandlerContext = React$1.createContext();

var index = /*#__PURE__*/Object.freeze({
  Cesium3DTilesetContext: Cesium3DTilesetContext,
  ViewerContext: ViewerContext,
  CameraContext: CameraContext,
  CesiumWidgetContext: CesiumWidgetContext,
  DataSourcesContext: DataSourcesContext,
  EntitiesContext: EntitiesContext,
  PointPrimitiveCollectionContext: PointPrimitiveCollectionContext,
  PrimitiveCollectionContext: PrimitiveCollectionContext,
  SceneContext: SceneContext,
  ScreenSpaceEventHandlerContext: ScreenSpaceEventHandlerContext
});

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var attachEvents = function attachEvents(target, events) {
  Object.entries(events).forEach(function (_ref) {
    var k = _ref[0],
        v = _ref[1];
    if (typeof v !== "function") return;
    target[k].addEventListener(v);
  });
};
var detachEvents = function detachEvents(target, events) {
  Object.entries(events).forEach(function (_ref2) {
    var k = _ref2[0],
        v = _ref2[1];
    if (typeof v !== "function") return;
    target[k].removeEventListener(v);
  });
};
var updateEvents = function updateEvents(target, prevEvents, newEvents) {
  var pek = Object.keys(prevEvents);
  var nek = Object.keys(newEvents); // removed events

  var re = pek.map(function (k) {
    return [k, prevEvents[k]];
  }).reduce(function (e, _ref3) {
    var k = _ref3[0],
        v = _ref3[1];

    if (nek.indexOf(k) === -1 || v !== newEvents[k] || typeof v !== "function") {
      e[k] = v;
    }

    return e;
  }, {}); // new events

  var ne = nek.map(function (k) {
    return [k, newEvents[k]];
  }).reduce(function (e, _ref4) {
    var k = _ref4[0],
        v = _ref4[1];

    if ((pek.indexOf(k) === -1 || v !== prevEvents[k]) && typeof v === "function") {
      e[k] = v;
    }

    return e;
  }, {});
  detachEvents(target, re);
  attachEvents(target, ne);
}; // eslint-disable-next-line react/destructuring-assignment

var getEventProps = function getEventProps(eventNames, props) {
  var a = eventNames.reduce(function (a, b) {
    var _objectSpread2;

    var pn = "on" + b[0].toUpperCase() + b.slice(1).replace(/Event$/, ""); // eslint-disable-next-line react/destructuring-assignment

    return typeof props[pn] === "function" ? _objectSpread({}, a, (_objectSpread2 = {}, _objectSpread2[b] = props[pn], _objectSpread2)) : a;
  }, {});
  return a;
};

var CesiumComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(CesiumComponent, _React$PureComponent);

  function CesiumComponent(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.cesiumElement = null;
    _this._mounted = false;

    if (!_this.constructor.initCesiumComponentWhenComponentDidMount) {
      _this._create();
    }

    return _this;
  }

  var _proto = CesiumComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.constructor.initCesiumComponentWhenComponentDidMount) {
      this._create();
    }

    this._mount();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var cesiumElement = this.cesiumElement;

    if (cesiumElement) {
      var events = this.getCesiumEvents();
      updateEvents(cesiumElement, getEventProps(events, prevProps), getEventProps(events, this.props));
    }

    var props = this.props;

    if (this.getCesiumReadOnlyProps().some(function (p) {
      return prevProps[p] !== props[p];
    })) {
      this._remount();

      return;
    }

    this.getCesiumProps().filter(function (p) {
      return prevProps[p] !== props[p];
    }).forEach(function (p) {
      cesiumElement[p] = props[p];
    });

    if (this.updateCesiumElement) {
      this.updateCesiumElement(cesiumElement, prevProps);
    }

    var onUpdate = this.props.onUpdate;

    if (onUpdate) {
      onUpdate(cesiumElement, prevProps);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._unmount();
  };

  _proto.getCesiumEvents = function getCesiumEvents() {
    return this.constructor.cesiumEvents || [];
  };

  _proto.getCesiumProps = function getCesiumProps() {
    return this.constructor.cesiumProps || [];
  };

  _proto.getCesiumReadOnlyProps = function getCesiumReadOnlyProps() {
    return this.constructor.cesiumReadOnlyProps || [];
  };

  _proto.getPropsForCesium = function getPropsForCesium() {
    var _this2 = this;

    return this.getCesiumProps().concat(this.getCesiumReadOnlyProps()).reduce(function (a, b) {
      var _objectSpread2;

      return typeof _this2.props[b] === "undefined" ? a : _objectSpread({}, a, (_objectSpread2 = {}, _objectSpread2[b] = _this2.props[b], _objectSpread2));
    }, {});
  };

  _proto._create = function _create() {
    var _this3 = this;

    if (!this.createCesiumElement) return;
    this.cesiumElement = this.createCesiumElement(this.getPropsForCesium());

    if (this.constructor.setCesiumOptionsAfterCreate && this.cesiumElement) {
      // eslint-disable-next-line react/destructuring-assignment
      this.getCesiumProps().filter(function (p) {
        return typeof _this3.props[p] !== "undefined";
      }).forEach(function (p) {
        // eslint-disable-next-line react/destructuring-assignment
        _this3.cesiumElement[p] = _this3.props[p];
      });
    }

    if (this.cesiumElement) {
      attachEvents(this.cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
    }
  };

  _proto._mount = function _mount() {
    if (this.mountCesiumElement) {
      this.mountCesiumElement(this.cesiumElement);
    }

    var onMount = this.props.onMount;

    if (onMount) {
      onMount(this.cesiumElement);
    }

    this._mounted = true;
    this.forceUpdate();
  };

  _proto._unmount = function _unmount() {
    var cesiumElement = this.cesiumElement;
    var onUnmount = this.props.onUnmount;

    if (onUnmount) {
      onUnmount(cesiumElement);
    }

    if (cesiumElement) {
      detachEvents(cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
    }

    if (this.destroyCesiumElement) {
      this.destroyCesiumElement(cesiumElement);
    }

    this.cesiumElement = null;
  };

  _proto._remount = function _remount() {
    this._unmount();

    this._create();

    this._mount();
  };

  _proto.render = function render() {
    var children = this.props.children;
    return this._mounted && typeof children !== "undefined" && !this.constructor.cesiumNoRender ? children : null;
  };

  return CesiumComponent;
}(React$1.PureComponent);

CesiumComponent.propTypes = {
  children: PropTypes.any,
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
  onUpdate: PropTypes.func
};

var Viewer$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Viewer$$1, _CesiumComponent);

  function Viewer$$1() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this;
    _this.element = null;
    return _this;
  }

  var _proto = Viewer$$1.prototype;

  _proto.componentDidMount = function componentDidMount() {
    _CesiumComponent.prototype.componentDidMount.call(this);

    this.forceUpdate();
  };

  _proto.createCesiumElement = function createCesiumElement(options) {
    if (this.element) {
      var v = new Viewer(this.element, options);
      if (!v) return null; // failed to initialize Viewer

      var extend = this.props.extend;

      if (extend) {
        if (Array.isArray(extend)) {
          extend.forEach(function (e) {
            v.extend(e);
          });
        } else {
          v.extend(extend);
        }
      }

      return v;
    }

    return null;
  };

  _proto.updateCesiumElement = function updateCesiumElement(cesiumElement, prev) {
    if (!cesiumElement) return;

    if (this.props.selectedEntity !== prev.selectedEntity) {
      cesiumElement.selectedEntity = this.props.selectedEntity;
    }

    if (this.props.trackedEntity !== prev.trackedEntity) {
      cesiumElement.trackedEntity = this.props.trackedEntity;
    }
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    if (!cesiumElement) return;
    cesiumElement.destroy();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        containerProps = _this$props.containerProps,
        className = _this$props.className,
        full = _this$props.full,
        id = _this$props.id,
        style = _this$props.style;
    return React$1.createElement("div", _extends({
      className: className,
      id: id,
      ref: function ref(e) {
        _this2.element = e;
      },
      style: _objectSpread({}, full ? {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0"
      } : {}, style)
    }, containerProps), this.cesiumElement ? React$1.createElement(ViewerContext.Provider, {
      value: this.cesiumElement
    }, React$1.createElement(SceneContext.Provider, {
      value: this.cesiumElement.scene
    }, React$1.createElement(EntitiesContext.Provider, {
      value: this.cesiumElement.entities
    }, React$1.createElement(DataSourcesContext.Provider, {
      value: this.cesiumElement.dataSourceDisplay.dataSources
    }, children)))) : null);
  };

  return Viewer$$1;
}(CesiumComponent);

Viewer$1.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
  animation: PropTypes.any,
  automaticallyTrackDataSourceClocks: PropTypes.any,
  baseLayerPicker: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  clockViewModel: PropTypes.any,
  containerProps: PropTypes.object,
  contextOptions: PropTypes.any,
  creditContainer: PropTypes.any,
  creditViewport: PropTypes.any,
  dataSources: PropTypes.any,
  extend: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.any]),
  full: PropTypes.bool,
  fullscreenButton: PropTypes.any,
  fullscreenElement: PropTypes.any,
  geocoder: PropTypes.any,
  globe: PropTypes.any,
  homeButton: PropTypes.any,
  id: PropTypes.string,
  imageryProvider: PropTypes.any,
  imageryProviderViewModels: PropTypes.any,
  infoBox: PropTypes.any,
  mapMode2D: PropTypes.any,
  mapProjection: PropTypes.any,
  navigationHelpButton: PropTypes.any,
  navigationInstructionsInitiallyVisible: PropTypes.any,
  onSelectedEntityChanged: PropTypes.func,
  onTrackedEntityChanged: PropTypes.func,
  orderIndependentTranslucency: PropTypes.any,
  projectionPicker: PropTypes.any,
  scene3DOnly: PropTypes.any,
  sceneMode: PropTypes.any,
  sceneModePicker: PropTypes.any,
  selectedEntity: PropTypes.any,
  selectedImageryProviderViewModel: PropTypes.any,
  selectedTerrainProviderViewModel: PropTypes.any,
  selectionIndicator: PropTypes.any,
  shadows: PropTypes.any,
  showRenderLoopErrors: PropTypes.any,
  skyAtmosphere: PropTypes.any,
  skyBox: PropTypes.any,
  style: PropTypes.object,
  targetFrameRate: PropTypes.any,
  terrainExaggeration: PropTypes.any,
  terrainProvider: PropTypes.any,
  terrainProviderViewModels: PropTypes.any,
  terrainShadows: PropTypes.any,
  timeline: PropTypes.any,
  trackedEntity: PropTypes.any,
  useDefaultRenderLoop: PropTypes.any,
  vrButton: PropTypes.any
});
Viewer$1.defaultProps = {
  style: {}
};
Viewer$1.cesiumProps = ["animation", "baseLayerPicker", "fullscreenButton", "vrButton", "geocoder", "homeButton", "infoBox", "sceneModePicker", "selectionIndicator", "timeline", "navigationHelpButton", "navigationInstructionsInitiallyVisible", "scene3DOnly", "clockViewModel", "selectedImageryProviderViewModel", "imageryProviderViewModels", "selectedTerrainProviderViewModel", "terrainProviderViewModels", "imageryProvider", "terrainProvider", "skyBox", "skyAtmosphere", "fullscreenElement", "useDefaultRenderLoop", "targetFrameRate", "showRenderLoopErrors", "automaticallyTrackDataSourceClocks", "contextOptions", "sceneMode", "mapProjection", "globe", "orderIndependentTranslucency", "creditContainer", "creditViewport", "dataSources", "terrainExaggeration", "shadows", "terrainShadows", "mapMode2D", "projectionPicker"];
Viewer$1.cesiumEvents = ["selectedEntityChanged", "trackedEntityChanged"];
Viewer$1.initCesiumComponentWhenComponentDidMount = true;

var CesiumWidget$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(CesiumWidget$$1, _CesiumComponent);

  function CesiumWidget$$1() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this;
    _this.element = null;
    return _this;
  }

  var _proto = CesiumWidget$$1.prototype;

  _proto.componentDidMount = function componentDidMount() {
    _CesiumComponent.prototype.componentDidMount.call(this);

    this.forceUpdate();
  };

  _proto.createCesiumElement = function createCesiumElement(options) {
    if (this.element) {
      return new CesiumWidget(this.element, options);
    }

    return null;
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    cesiumElement.destroy();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        containerProps = _this$props.containerProps,
        className = _this$props.className,
        full = _this$props.full,
        id = _this$props.id,
        style = _this$props.style;
    return React$1.createElement("div", _extends({
      className: className,
      id: id,
      ref: function ref(e) {
        _this2.element = e;
      },
      style: _objectSpread({}, full ? {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0"
      } : {}, style)
    }, containerProps), this.cesiumElement ? React$1.createElement(CesiumWidgetContext.Provider, {
      value: this.cesiumElement
    }, React$1.createElement(SceneContext.Provider, {
      value: this.cesiumElement.scene
    }, children)) : null);
  };

  return CesiumWidget$$1;
}(CesiumComponent);

CesiumWidget$1.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
  children: PropTypes.any,
  className: PropTypes.string,
  clock: PropTypes.any,
  containerProps: PropTypes.object,
  contextOptions: PropTypes.any,
  creditContainer: PropTypes.any,
  creditViewport: PropTypes.any,
  full: PropTypes.bool,
  globe: PropTypes.any,
  id: PropTypes.string,
  imageryProvider: PropTypes.any,
  mapMode2D: PropTypes.any,
  mapProjection: PropTypes.any,
  orderIndependentTranslucency: PropTypes.any,
  scene3DOnly: PropTypes.any,
  sceneMode: PropTypes.any,
  shadows: PropTypes.any,
  showRenderLoopErrors: PropTypes.any,
  skyAtmosphere: PropTypes.any,
  skyBox: PropTypes.any,
  style: PropTypes.object,
  targetFrameRate: PropTypes.any,
  terrainExaggeration: PropTypes.any,
  terrainProvider: PropTypes.any,
  terrainShadows: PropTypes.any,
  useDefaultRenderLoop: PropTypes.any
});
CesiumWidget$1.defaultProps = {
  style: {}
};
CesiumWidget$1.cesiumProps = ["scene3DOnly", "clock", "imageryProvider", "terrainProvider", "skyBox", "skyAtmosphere", "useDefaultRenderLoop", "targetFrameRate", "showRenderLoopErrors", "contextOptions", "sceneMode", "mapProjection", "globe", "orderIndependentTranslucency", "creditContainer", "creditViewport", "terrainExaggeration", "shadows", "terrainShadows", "mapMode2D"];
CesiumWidget$1.initCesiumComponentWhenComponentDidMount = true;

var Scene$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Scene$$1, _CesiumComponent);

  function Scene$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Scene$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement() {
    var cesiumWidget = this.context.cesiumWidget;
    var s = cesiumWidget.scene;

    if (typeof this.props.mode !== "undefined") {
      this._changeMode(s);
    }

    return s;
  };

  _proto.updateCesiumElement = function updateCesiumElement(scene, prev) {
    if (prev.mode !== this.props.mode) {
      this._changeMode(scene);
    }
  };

  _proto._changeMode = function _changeMode(scene) {
    var _this$props = this.props,
        mode = _this$props.mode,
        morph = _this$props.morph;
    if (typeof mode !== "number") return;

    if (typeof morph === "number") {
      switch (mode) {
        case SceneMode.SCENE2D:
          scene.morphTo2D(morph);
          break;

        case SceneMode.COLUMBUS_VIEW:
          scene.morphToColumbusView(morph);
          break;

        case SceneMode.SCENE3D:
          scene.morphTo3D(morph);
          break;

        default:
          scene.mode = mode;
      }
    } else {
      scene.mode = mode;
    }
  };

  _proto.render = function render() {
    return React.createElement(SceneContext.Provider, {
      value: this.cesiumElement
    }, this.props.children);
  };

  return Scene$$1;
}(CesiumComponent);

Scene$1.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
  backgroundColor: PropTypes.any,
  canvas: PropTypes.any,
  completeMorphOnUserInput: PropTypes.any,
  debugCommandFilter: PropTypes.any,
  debugShowCommands: PropTypes.any,
  debugShowDepthFrustum: PropTypes.any,
  debugShowFramesPerSecond: PropTypes.any,
  debugShowFrustumPlanes: PropTypes.any,
  debugShowFrustums: PropTypes.any,
  debugShowGlobeDepth: PropTypes.any,
  eyeSeparation: PropTypes.any,
  farToNearRatio: PropTypes.any,
  focalLength: PropTypes.any,
  fog: PropTypes.any,
  fxaa: PropTypes.any,
  globe: PropTypes.any,
  imagerySplitPosition: PropTypes.any,
  invertClassification: PropTypes.any,
  invertClassificationColor: PropTypes.any,
  mapMode2D: PropTypes.any,
  mapProjection: PropTypes.any,
  minimumDisableDepthTestDistance: PropTypes.any,
  mode: PropTypes.any,
  moon: PropTypes.any,
  morph: PropTypes.number,
  nearToFarDistance2D: PropTypes.any,
  onMorphComplete: PropTypes.func,
  onMorphStart: PropTypes.func,
  onPostRender: PropTypes.func,
  onPreRender: PropTypes.func,
  onRenderError: PropTypes.func,
  onTerrainProviderChanged: PropTypes.func,
  pickTranslucentDepth: PropTypes.any,
  rethrowRenderErrors: PropTypes.any,
  shadowMap: PropTypes.any,
  skyAtmosphere: PropTypes.any,
  skyBox: PropTypes.any,
  sun: PropTypes.any,
  sunBloom: PropTypes.any,
  terrainExaggeration: PropTypes.any,
  terrainProvider: PropTypes.any,
  useDepthPicking: PropTypes.any,
  useWebVR: PropTypes.any
});
Scene$1.contextTypes = {
  cesiumWidget: cesiumWidgetType
};
Scene$1.cesiumProps = ["backgroundColor", "canvas", "completeMorphOnUserInput", "debugCommandFilter", "debugShowCommands", "debugShowDepthFrustum", "debugShowFramesPerSecond", "debugShowFrustumPlanes", "debugShowFrustums", "debugShowGlobeDepth", "eyeSeparation", "farToNearRatio", "focalLength", "fog", "fxaa", "globe", "imagerySplitPosition", "invertClassification", "invertClassificationColor", "mapMode2D", "mapProjection", "minimumDisableDepthTestDistance", "moon", "nearToFarDistance2D", "pickTranslucentDepth", "rethrowRenderErrors", "shadowMap", "skyAtmosphere", "skyBox", "sun", "sunBloom", "terrainExaggeration", "terrainProvider", "useDepthPicking", "useWebVR"];
Scene$1.cesiumEvents = ["morphComplete", "morphStart", "postRender", "preRender", "renderError", "terrainProviderChanged"];
Scene$1.setCesiumOptionsAfterCreate = true;

var Camera$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Camera$$1, _CesiumComponent);

  function Camera$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Camera$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement() {
    var camera = this.props.scene.camera;

    if (typeof this.props.viewBoundingSphere === "object") {
      camera.viewBoundingSphere(this.props.viewBoundingSphere.boundingSphere, this.props.viewBoundingSphere.offset);
    } else if (typeof this.props.view === "object") {
      camera.setView(this.props.view);
    }

    return camera;
  };

  _proto.updateCesiumElement = function updateCesiumElement(camera, prev) {
    if (this.props.view !== prev.viewBoundingSphere && typeof this.props.viewBoundingSphere === "object") {
      camera.viewBoundingSphere(this.props.viewBoundingSphere.boundingSphere, this.props.viewBoundingSphere.offset);
    } else if (this.props.view !== prev.view && typeof this.props.view === "object") {
      camera.setView(this.props.view);
    }
  };

  _proto.render = function render() {
    return React.createElement(CameraContext.Provider, {
      value: this.cesiumElement
    }, this.props.children);
  };

  return Camera$$1;
}(CesiumComponent);

Camera$1.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
    offset: PropTypes.any
  })
});
Camera$1.cesiumProps = ["constrainedAxis", "defaultLookAmount", "defaultMoveAmount", "defaultRotateAmount", "defaultZoomAmount", "direction", "frustum", "maximumZoomFactor", "percentageChanged", "position", "right", "up"];
Camera$1.cesiumEvents = ["changed", "moveEnd", "moveStart"];
Camera$1.setCesiumOptionsAfterCreate = true;

var CameraContainer = function CameraContainer(props) {
  return React.createElement(SceneContext.Consumer, null, function (scene) {
    return React.createElement(Camera$1, _extends({}, props, {
      scene: scene
    }));
  });
};

var Entity$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Entity$$1, _CesiumComponent);

  function Entity$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Entity$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    var entity = new Entity(options);

    if (this.props.children) {
      entity.description = ReactDOMServer.renderToStaticMarkup(this.props.children);
    }

    return entity;
  };

  _proto.mountCesiumElement = function mountCesiumElement(entity) {
    this.props.entities.add(entity);
  };

  _proto.updateCesiumElement = function updateCesiumElement(entity, prev) {
    if (prev.children !== this.props.children) {
      if (this.props.children) {
        entity.description = ReactDOMServer.renderToStaticMarkup(this.props.children);
      } else {
        entity.description = this.props.description;
      }
    }
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(entity) {
    var entities = this.props.entities;

    if (entities) {
      entities.remove(entity);
    }
  };

  _createClass(Entity$$1, [{
    key: "parent",
    get: function get() {
      var entities = this.props.entities.entities;

      if (entities) {
        return entities;
      }

      return null;
    }
  }]);

  return Entity$$1;
}(CesiumComponent);

Entity$1.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
  availability: PropTypes.any,
  billboard: PropTypes.any,
  box: PropTypes.any,
  children: PropTypes.any,
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
  wall: PropTypes.any
});
Entity$1.cesiumProps = ["availability", "show", "description", "position", "orientation", "viewFrom", "parent", "billboard", "box", "corridor", "cylinder", "ellipse", "ellipsoid", "label", "model", "name", "path", "plane", "point", "polygon", "polyline", "properties", "polylineVolume", "rectangle", "wall"];
Entity$1.cesiumReadOnlyProps = ["id"];
Entity$1.cesiumEvents = ["definitionChanged"];
Entity$1.cesiumNoRender = true;

var EntityContainer = function EntityContainer(props) {
  return React$1.createElement(EntitiesContext.Consumer, null, function (entities) {
    return React$1.createElement(Entity$1, _extends({}, props, {
      entities: entities
    }));
  });
};

var DataSource =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(DataSource, _CesiumComponent);

  function DataSource() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = DataSource.prototype;

  _proto.componentWillMount = function componentWillMount() {
    _CesiumComponent.prototype.componentWillMount.call(this);

    if (this.cesiumElement) {
      if (this.props.clock) {
        this.cesiumElement.clock = this.props.clock;
      }

      if (this.props.clustering) {
        this.cesiumElement.clustering = this.props.clustering;
      }

      if (this.props.name) {
        this.cesiumElement.name = this.props.name;
      }

      if (this.props.show === true || this.props.show === false) {
        this.cesiumElement.show = this.props.show;
      }
    }
  };

  _proto.createCesiumElement = function createCesiumElement() {
    throw new Error("DataSource#createCesiumElement is not implemented");
  };

  _proto.mountCesiumElement = function mountCesiumElement(entity) {
    this.parent.add(entity);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(entity) {
    var p = this.parent;

    if (p) {
      p.remove(entity);
    }
  };

  _proto.render = function render() {
    return React.createElement(EntitiesContext.Provider, {
      value: this.cesiumElement.entities
    }, this.props.children);
  };

  _createClass(DataSource, [{
    key: "parent",
    get: function get() {
      var dataSources = this.props.dataSources;

      if (dataSources && !dataSources.isDestroyed()) {
        return dataSources;
      }

      return null;
    }
  }]);

  return DataSource;
}(CesiumComponent);

DataSource.propTypes = {
  clock: PropTypes.any,
  clustering: PropTypes.any,
  name: PropTypes.string,
  onChanged: PropTypes.func,
  onError: PropTypes.func,
  onLoading: PropTypes.func,
  show: PropTypes.bool
};
DataSource.cesiumProps = ["clock", "clustering", "name", "show"];
DataSource.cesiumEvents = ["changedEvent", "errorEvent", "loadingEvent"];

var DataSourceContainer = function DataSourceContainer(props) {
  return React.createElement(DataSourcesContext.Consumer, null, function (dataSources) {
    return React.createElement(DataSource, _extends({}, props, {
      dataSources: dataSources
    }));
  });
};

DataSourceContainer.propTypes = DataSource.propTypes;
DataSourceContainer.cesiumProps = DataSource.cesiumProps;
DataSourceContainer.cesiumEvents = DataSource.cesiumEvents;

var CustomDataSource$1 =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(CustomDataSource$$1, _DataSource);

  function CustomDataSource$$1() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = CustomDataSource$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new CustomDataSource(options.name);
  };

  return CustomDataSource$$1;
}(DataSourceContainer);

CustomDataSource$1.PropTypes = _objectSpread({}, DataSourceContainer.propTypes);
CustomDataSource$1.cesiumProps = DataSourceContainer.cesiumProps.concat();
CustomDataSource$1.cesiumEvents = DataSourceContainer.cesiumEvents.concat();

var CzmlDataSource$1 =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(CzmlDataSource$$1, _DataSource);

  function CzmlDataSource$$1() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = CzmlDataSource$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new CzmlDataSource(options.name);
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this._load();
  };

  _proto.updateCesiumElement = function updateCesiumElement(ds, prev) {
    var _this$props = this.props,
        czml = _this$props.czml,
        url = _this$props.url;

    if (czml !== prev.czml || url !== prev.url) {
      this._load();
    }
  };

  _proto._load = function _load() {
    var _this = this;

    var _this$props2 = this.props,
        czml = _this$props2.czml,
        onError = _this$props2.onError,
        onLoad = _this$props2.onLoad,
        onProgress = _this$props2.onProgress,
        query = _this$props2.query,
        sourceUri = _this$props2.sourceUri,
        url = _this$props2.url;

    if (czml || url) {
      this.cesiumElement.load(czml || url, {
        sourceUri: sourceUri,
        query: query
      }).then(function () {
        try {
          if (onLoad) onLoad.apply(void 0, arguments);
        } catch (e) {
          console.error(e);
          throw e;
        }

        _this.parent.add(arguments.length <= 0 ? undefined : arguments[0]); // args[0] === this.cesiumElement

      }, onError, onProgress);
    }
  };

  return CzmlDataSource$$1;
}(DataSourceContainer);

CzmlDataSource$1.propTypes = _objectSpread({}, DataSourceContainer.propTypes, {
  czml: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onProgress: PropTypes.func,
  query: PropTypes.object,
  sourceUri: PropTypes.string,
  url: PropTypes.string
});
CzmlDataSource$1.cesiumProps = DataSourceContainer.cesiumProps.concat();
CzmlDataSource$1.cesiumEvents = DataSourceContainer.cesiumEvents.concat();

var GeoJsonDataSource$1 =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(GeoJsonDataSource$$1, _DataSource);

  function GeoJsonDataSource$$1() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = GeoJsonDataSource$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new GeoJsonDataSource(options.name);
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this._load();
  };

  _proto.updateCesiumElement = function updateCesiumElement(ds, prev) {
    var _this$props = this.props,
        data = _this$props.data,
        url = _this$props.url;

    if (data !== prev.data || url !== prev.url) {
      this._load();
    }
  };

  _proto._load = function _load() {
    var _this = this;

    var _this$props2 = this.props,
        clampToGround = _this$props2.clampToGround,
        data = _this$props2.data,
        describe = _this$props2.describe,
        fill = _this$props2.fill,
        markerColor = _this$props2.markerColor,
        markerSize = _this$props2.markerSize,
        markerSymbol = _this$props2.markerSymbol,
        onError = _this$props2.onError,
        onLoad = _this$props2.onLoad,
        onProgress = _this$props2.onProgress,
        sourceUri = _this$props2.sourceUri,
        stroke = _this$props2.stroke,
        strokeWidth = _this$props2.strokeWidth,
        url = _this$props2.url;

    if (data || url) {
      this.cesiumElement.load(data || url, {
        clampToGround: clampToGround,
        describe: describe,
        fill: fill,
        markerColor: markerColor,
        markerSize: markerSize,
        markerSymbol: markerSymbol,
        stroke: stroke,
        strokeWidth: strokeWidth,
        sourceUri: sourceUri
      }).then(function () {
        try {
          if (onLoad) onLoad.apply(void 0, arguments);
        } catch (e) {
          console.error(e);
          throw e;
        }

        _this.parent.add(arguments.length <= 0 ? undefined : arguments[0]); // args[0] === this.cesiumElement

      }, onError, onProgress);
    }
  };

  return GeoJsonDataSource$$1;
}(DataSourceContainer);

GeoJsonDataSource$1.propTypes = _objectSpread({}, DataSourceContainer.propTypes, {
  clampToGround: PropTypes.bool,
  data: PropTypes.object,
  describe: PropTypes.any,
  fill: PropTypes.any,
  markerColor: PropTypes.any,
  markerSize: PropTypes.number,
  markerSymbol: PropTypes.string,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onProgress: PropTypes.func,
  sourceUri: PropTypes.string,
  stroke: PropTypes.any,
  strokeWidth: PropTypes.number,
  url: PropTypes.string
});
GeoJsonDataSource$1.cesiumProps = DataSourceContainer.cesiumProps.concat();
GeoJsonDataSource$1.cesiumEvents = DataSourceContainer.cesiumEvents.concat();

var KmlDataSource$1 =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(KmlDataSource$$1, _DataSource);

  function KmlDataSource$$1() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = KmlDataSource$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    var scene = this.props.scene;
    return new KmlDataSource({
      camera: options.camera || (scene ? scene.camera : undefined),
      canvas: options.canvas || (scene ? scene.canvas : undefined),
      proxy: options.proxy
    });
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this._load();
  };

  _proto.updateCesiumElement = function updateCesiumElement(ds, prev) {
    var _this$props = this.props,
        data = _this$props.data,
        url = _this$props.url;

    if (data !== prev.data || url !== prev.url) {
      this._load();
    }
  };

  _proto._load = function _load() {
    var _this = this;

    var _this$props2 = this.props,
        clampToGround = _this$props2.clampToGround,
        data = _this$props2.data,
        query = _this$props2.query,
        onError = _this$props2.onError,
        onLoad = _this$props2.onLoad,
        onProgress = _this$props2.onProgress,
        sourceUri = _this$props2.sourceUri,
        url = _this$props2.url;

    if (data || url) {
      this.cesiumElement.load(data || url, {
        clampToGround: clampToGround,
        query: query,
        sourceUri: sourceUri
      }).then(function () {
        try {
          if (onLoad) onLoad.apply(void 0, arguments);
        } catch (e) {
          console.error(e);
          throw e;
        }

        _this.parent.add(arguments.length <= 0 ? undefined : arguments[0]); // args[0] === this.cesiumElement

      }, onError, onProgress);
    }
  };

  return KmlDataSource$$1;
}(DataSourceContainer);

KmlDataSource$1.propTypes = _objectSpread({}, DataSourceContainer.propTypes, {
  clampToGround: PropTypes.bool,
  data: PropTypes.any,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onProgress: PropTypes.func,
  onRefresh: PropTypes.func,
  onUnsupportedNode: PropTypes.func,
  query: PropTypes.object,
  sourceUri: PropTypes.string,
  url: PropTypes.string
});
KmlDataSource$1.cesiumProps = DataSourceContainer.cesiumProps.concat();
KmlDataSource$1.cesiumReadonlyProps = ["camera", "canvas", "proxy"];
KmlDataSource$1.cesiumEvents = DataSourceContainer.cesiumEvents.concat(["refreshEvent", "unsupportedNodeEvent"]);

var KmlDataSourceContainer = function KmlDataSourceContainer(props) {
  return React.createElement(SceneContext.Consumer, null, function (scene) {
    return React.createElement(KmlDataSource$1, _extends({}, props, {
      scene: scene
    }));
  });
};

var Primitive$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Primitive$$1, _CesiumComponent);

  function Primitive$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Primitive$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new Primitive(options);
  };

  _proto.mountCesiumElement = function mountCesiumElement(premitive) {
    this.props.primitiveCollection.add(premitive);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(premitive) {
    var primitiveCollection = this.props.primitiveCollection;

    if (primitiveCollection) {
      primitiveCollection.remove(premitive);
    }
  };

  return Primitive$$1;
}(CesiumComponent);

Primitive$1.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
  show: PropTypes.bool
});
Primitive$1.cesiumProps = ["allowPicking", "appearance", "cull", "debugShowBoundingVolume", "depthFailAppearance", "modelMatrix", "shadows", "show"];
Primitive$1.cesiumReadOnlyProps = ["asynchronous", "compressVertices", "geometryInstances", "interleave", "releaseGeometryInstances"];

var PrimitiveContainer = function PrimitiveContainer(props) {
  return React.createElement(SceneContext.Consumer, null, function (scene) {
    return React.createElement(PrimitiveCollectionContext.Consumer, null, function (primitiveCollection) {
      return React.createElement(Primitive$1, _extends({}, props, {
        primitiveCollection: primitiveCollection || scene.primitives
      }));
    });
  });
};

var PointPrimitive =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(PointPrimitive, _CesiumComponent);

  function PointPrimitive() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this;
    _this.initialOptions = null;
    return _this;
  }

  var _proto = PointPrimitive.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    this.initialOptions = options;
    return null;
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this.cesiumElement = this.props.primitives.add(this.initialOptions);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(primitive) {
    var primitives = this.props.primitives;

    if (primitives && !primitives.isDestroyed() && primitive) {
      primitives.remove(primitive);
    }

    this.initialOptions = null;
  };

  return PointPrimitive;
}(CesiumComponent);

PointPrimitive.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
  translucencyByDistance: PropTypes.any
});
PointPrimitive.cesiumProps = ["color", "disableDepthTestDistance", "distanceDisplayCondition", "id", "outlineColor", "outlineWidth", "pixelSize", "position", "scaleByDistance", "show", "translucencyByDistance"];

var PointPrimitiveContainer = function PointPrimitiveContainer(props) {
  return React.createElement(PointPrimitiveCollectionContext.Consumer, null, function (primitives) {
    return React.createElement(PointPrimitiveCollection, _extends({}, props, {
      primitives: primitives
    }));
  });
};

var PointPrimitiveCollection$2 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(PointPrimitiveCollection, _CesiumComponent);

  function PointPrimitiveCollection() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = PointPrimitiveCollection.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new PointPrimitiveCollection$1(options);
  };

  _proto.mountCesiumElement = function mountCesiumElement(col) {
    this.props.primitiveCollection.add(col);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(col) {
    var primitiveCollection = this.props.primitiveCollection;

    if (primitives && !primitives.isDestroyed()) {
      p.remove(col);
    }

    if (!col.isDestroyed()) {
      col.destroy();
    }
  };

  _proto.render = function render() {
    return React.createElement(PointPrimitiveCollectionContext.Provider, {
      value: this.cesiumElement
    }, this.props.children);
  };

  return PointPrimitiveCollection;
}(CesiumComponent);

PointPrimitiveCollection$2.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
  blendOption: PropTypes.any,
  debugShowBoundingVolume: PropTypes.bool,
  modelMatrix: PropTypes.any
});
PointPrimitiveCollection$2.cesiumProps = ["blendOption", "debugShowBoundingVolume", "modelMatrix"];

var PointPrimitiveCollectionContainer = function PointPrimitiveCollectionContainer(props) {
  return React.createElement(SceneContext.Consumer, null, function (scene) {
    return React.createElement(PrimitiveCollectionContext.Consumer, null, function (primitiveCollection) {
      return React.createElement(PointPrimitiveCollection$2, _extends({}, props, {
        primitiveCollection: primitiveCollection || scene.primitives
      }));
    });
  });
};

var ScreenSpaceEvent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ScreenSpaceEvent, _React$PureComponent);

  function ScreenSpaceEvent() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ScreenSpaceEvent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        screenSpaceEventHandler = _this$props.screenSpaceEventHandler,
        action = _this$props.action,
        modifier = _this$props.modifier,
        type = _this$props.type;

    if (action) {
      screenSpaceEventHandler.setInputAction(action, type, modifier);
    } else {
      // just remove default events
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var screenSpaceEventHandler = this.props.screenSpaceEventHandler;
    screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
    this.componentDidMount();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$props2 = this.props,
        screenSpaceEventHandler = _this$props2.screenSpaceEventHandler,
        action = _this$props2.action,
        modifier = _this$props2.modifier,
        type = _this$props2.type;

    if (screenSpaceEventHandler && !screenSpaceEventHandler.isDestroyed() && action) {
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ScreenSpaceEvent;
}(React$1.PureComponent);

ScreenSpaceEvent.propTypes = {
  action: PropTypes.func,
  modifier: PropTypes.number,
  type: PropTypes.number.isRequired
};

var ScreenSpaceEventContainer = function ScreenSpaceEventContainer(props) {
  return React$1.createElement(ScreenSpaceEventHandlerContext.Consumer, null, function (screenSpaceEventHandler) {
    return React$1.createElement(ScreenSpaceEvent, _extends({}, props, {
      screenSpaceEventHandler: screenSpaceEventHandler
    }));
  });
};

var ScreenSpaceEventHandler$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(ScreenSpaceEventHandler$$1, _CesiumComponent);

  function ScreenSpaceEventHandler$$1() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this;
    _this._useDefault = false;
    return _this;
  }

  var _proto = ScreenSpaceEventHandler$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement() {
    if (this.props.useDefault) {
      this._useDefault = true;
      return this.props.cesiumWidget.screenSpaceEventHandler;
    }

    return new ScreenSpaceEventHandler(this.parent.canvas);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    if (!this._useDefault) {
      cesiumElement.destroy();
    }
  };

  _proto.render = function render() {
    return React$1.createElement(ScreenSpaceEventHandlerContext.Provider, {
      value: this.cesiumElement
    }, this.props.children);
  };

  _createClass(ScreenSpaceEventHandler$$1, [{
    key: "parent",
    get: function get() {
      var scene = this.props.scene;

      if (scene && !scene.isDestroyed()) {
        return scene;
      }

      return null;
    }
  }]);

  return ScreenSpaceEventHandler$$1;
}(CesiumComponent);

ScreenSpaceEventHandler$1.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
  useDefault: PropTypes.bool
});

var ScreenSpaceEventHandlerContainer = function ScreenSpaceEventHandlerContainer(props) {
  return React$1.createElement(ViewerContext.Consumer, null, function (viewer) {
    return React$1.createElement(SceneContext.Consumer, null, function (scene) {
      return React$1.createElement(ScreenSpaceEventHandler$1, _extends({}, props, {
        scene: scene,
        cesiumWidget: viewer.cesiumWidget
      }));
    }, "}");
  });
};

var ImageryLayer$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(ImageryLayer$$1, _CesiumComponent);

  function ImageryLayer$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = ImageryLayer$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    var imageryProvider = options.imageryProvider,
        opts = _objectWithoutPropertiesLoose(options, ["imageryProvider"]);

    return new ImageryLayer(imageryProvider, opts);
  };

  _proto.mountCesiumElement = function mountCesiumElement(layer) {
    this.parent.add(layer);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(layer) {
    var p = this.parent;

    if (p) {
      p.remove(layer);
    }
  };

  _createClass(ImageryLayer$$1, [{
    key: "parent",
    get: function get() {
      var scene = this.props.scene;

      if (scene && !scene.isDestroyed()) {
        return scene.imageryLayers;
      }

      return null;
    }
  }]);

  return ImageryLayer$$1;
}(CesiumComponent);

ImageryLayer$1.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
  wall: PropTypes.any
});
ImageryLayer$1.cesiumProps = ["alpha", "brightness", "contrast", "hue", "saturation", "gamma", "splitDirection", "minificationFilter", "magnificationFilter", "show"];
ImageryLayer$1.cesiumReadOnlyProps = ["imageryProvider", "rectangle", "maximumAnisotropy", "minimumTerrainLevel", "maximumTerrainLevel"];
ImageryLayer$1.cesiumEvents = ["definitionChanged"];

var ImageryLayerContainer = function ImageryLayerContainer(props) {
  return React.createElement(SceneContext.Consumer, null, function (scene) {
    return React.createElement(ImageryLayer$1, _extends({}, props, {
      scene: scene
    }));
  });
};

var CameraOperation =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(CameraOperation, _React$PureComponent);

  function CameraOperation() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = CameraOperation.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.cameraOperationStart(this.camera);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.camera.cancelFlight();
    this.cameraOperationStart(this.camera);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var cancelCameraFlight = this.props.cancelCameraFlight;

    if (cancelCameraFlight) {
      this.camera.cancelFlight();
    }
  };

  _proto.render = function render() {
    return null;
  };

  return CameraOperation;
}(React$1.PureComponent);

CameraOperation.propTypes = {
  cancelCameraFlight: PropTypes.bool
};

var CameraOperationContainer = function CameraOperationContainer(props) {
  return React$1.createElement(SceneContext.Consumer, null, function (scene) {
    return React$1.createElement(CameraContext.Consumer, null, function (camera) {
      return React$1.createElement(CameraOperation, _extends({}, props, {
        camera: camera || scene.camera
      }));
    });
  });
};

var CameraFlyHome =
/*#__PURE__*/
function (_CameraOperation) {
  _inheritsLoose(CameraFlyHome, _CameraOperation);

  function CameraFlyHome() {
    return _CameraOperation.apply(this, arguments) || this;
  }

  var _proto = CameraFlyHome.prototype;

  _proto.cameraOperationStart = function cameraOperationStart(camera) {
    var duration = this.props.duration;
    camera.flyHome(duration);
  };

  return CameraFlyHome;
}(CameraOperationContainer);

CameraFlyHome.propTypes = _objectSpread({}, CameraOperationContainer.propTypes, {
  duration: PropTypes.number
});

var CameraFlyTo =
/*#__PURE__*/
function (_CameraOperation) {
  _inheritsLoose(CameraFlyTo, _CameraOperation);

  function CameraFlyTo() {
    return _CameraOperation.apply(this, arguments) || this;
  }

  var _proto = CameraFlyTo.prototype;

  _proto.cameraOperationStart = function cameraOperationStart(camera) {
    var _this$props = this.props,
        destination = _this$props.destination,
        orientation = _this$props.orientation,
        duration = _this$props.duration,
        onComplete = _this$props.onComplete,
        onCancel = _this$props.onCancel,
        endTransform = _this$props.endTransform,
        maximumHeight = _this$props.maximumHeight,
        pitchAdjustHeight = _this$props.pitchAdjustHeight,
        flyOverLongitude = _this$props.flyOverLongitude,
        flyOverLongitudeWeight = _this$props.flyOverLongitudeWeight,
        easingFunction = _this$props.easingFunction;
    camera.flyTo({
      destination: destination,
      orientation: orientation,
      duration: duration,
      complete: onComplete,
      cancel: onCancel,
      endTransform: endTransform,
      maximumHeight: maximumHeight,
      pitchAdjustHeight: pitchAdjustHeight,
      flyOverLongitude: flyOverLongitude,
      flyOverLongitudeWeight: flyOverLongitudeWeight,
      easingFunction: easingFunction
    });
  };

  return CameraFlyTo;
}(CameraOperationContainer);

CameraFlyTo.propTypes = _objectSpread({}, CameraOperationContainer.propTypes, {
  destination: PropTypes.any.isRequired,
  duration: PropTypes.number,
  easingFunction: PropTypes.any,
  endTransform: PropTypes.any,
  flyOverLongitude: PropTypes.number,
  flyOverLongitudeWeight: PropTypes.number,
  maximumHeight: PropTypes.number,
  onCancel: PropTypes.func,
  onComplete: PropTypes.func,
  orientation: PropTypes.object,
  pitchAdjustHeight: PropTypes.number
});

var CameraFlyToBoundingSphere =
/*#__PURE__*/
function (_CameraOperation) {
  _inheritsLoose(CameraFlyToBoundingSphere, _CameraOperation);

  function CameraFlyToBoundingSphere() {
    return _CameraOperation.apply(this, arguments) || this;
  }

  var _proto = CameraFlyToBoundingSphere.prototype;

  _proto.cameraOperationStart = function cameraOperationStart(camera) {
    var _this$props = this.props,
        boundingSphere = _this$props.boundingSphere,
        offset = _this$props.offset,
        duration = _this$props.duration,
        onComplete = _this$props.onComplete,
        onCancel = _this$props.onCancel,
        endTransform = _this$props.endTransform,
        maximumHeight = _this$props.maximumHeight,
        pitchAdjustHeight = _this$props.pitchAdjustHeight,
        flyOverLongitude = _this$props.flyOverLongitude,
        flyOverLongitudeWeight = _this$props.flyOverLongitudeWeight,
        easingFunction = _this$props.easingFunction;
    camera.flyToBoundingSphere(boundingSphere, {
      offset: offset,
      duration: duration,
      complete: onComplete,
      cancel: onCancel,
      endTransform: endTransform,
      maximumHeight: maximumHeight,
      pitchAdjustHeight: pitchAdjustHeight,
      flyOverLongitude: flyOverLongitude,
      flyOverLongitudeWeight: flyOverLongitudeWeight,
      easingFunction: easingFunction
    });
  };

  return CameraFlyToBoundingSphere;
}(CameraOperationContainer);

CameraFlyToBoundingSphere.propTypes = _objectSpread({}, CameraOperationContainer.propTypes, {
  boundingSphere: PropTypes.any.isRequired,
  duration: PropTypes.number,
  easingFunction: PropTypes.any,
  endTransform: PropTypes.any,
  flyOverLongitude: PropTypes.number,
  flyOverLongitudeWeight: PropTypes.number,
  maximumHeight: PropTypes.number,
  offset: PropTypes.any,
  onCancel: PropTypes.func,
  onComplete: PropTypes.func,
  pitchAdjustHeight: PropTypes.number
});

var Cesium3DTileset$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Cesium3DTileset$$1, _CesiumComponent);

  function Cesium3DTileset$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Cesium3DTileset$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new Cesium3DTileset(options);
  };

  _proto.mountCesiumElement = function mountCesiumElement(cesiumElement) {
    this.props.scene.primitives.add(cesiumElement);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    var primitives = this.props.scene.primitives;

    if (primitives) {
      primitives.remove(cesiumElement);
    }
  };

  _proto.render = function render() {
    return React$1.createElement(Cesium3DTilesetContext.Provider, {
      value: this.cesiumElement
    }, this.props.children);
  };

  return Cesium3DTileset$$1;
}(CesiumComponent);

Cesium3DTileset$1.propTypes = {
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
  pointCloudShading: PropTypes.object
};
Cesium3DTileset$1.contextTypes = {
  primitiveCollection: primitiveCollectionType,
  scene: sceneType,
  viewer: viewerType
};
Cesium3DTileset$1.cesiumProps = ["url", "show", // "modelMatrix",
// "shadows",
"maximumScreenSpaceError", "maximumMemoryUsage", "cullWithChildrenBounds", "dynamicScreenSpaceError", "dynamicScreenSpaceErrorDensity", "dynamicScreenSpaceErrorFactor", "dynamicScreenSpaceErrorHeightFalloff", "skipLevelOfDetail", "baseScreenSpaceError", "skipScreenSpaceErrorFactor", "skipLevels", "immediatelyLoadDesiredLevelOfDetail", "loadSiblings", // "clippingPlanes",
// "classificationType",
// "ellipsoid",
"debugFreezeFrame", "debugColorizeTiles", "debugWireframe", "debugShowBoundingVolume", "debugShowContentBoundingVolume", "debugShowViewerRequestVolume", "debugShowGeometricError", "debugShowRenderingStatistics", "debugShowMemoryUsage", "debugShowUrl", "pointCloudShading"];
Cesium3DTileset$1.cesiumReadOnlyProps = ["asset", "basePath", "boundingSphere", // "classificationType",
// "ellipsoid",
"properties", "ready", "readyPromise", "tilesLoaded", "timeSinceLoad", "totalMemoryUsageInBytes"];
Cesium3DTileset$1.cesiumEvents = ["allTilesLoaded", "loadProgress", "tileFailed", "tileLoad", "tileUnload", "tileVisible"];

var Cesium3DTilesetContainer = function Cesium3DTilesetContainer(props) {
  return React$1.createElement(SceneContext.Consumer, null, function (scene) {
    return React$1.createElement(Cesium3DTileset$1, _extends({}, props, {
      scene: scene
    }));
  });
};

export { types as PropTypes, index as CesiumContext, Viewer$1 as Viewer, CesiumWidget$1 as CesiumWidget, Scene$1 as Scene, CameraContainer as Camera, EntityContainer as Entity, DataSourceContainer as DataSource, CustomDataSource$1 as CustomDataSource, CzmlDataSource$1 as CzmlDataSource, GeoJsonDataSource$1 as GeoJsonDataSource, KmlDataSourceContainer as KmlDataSource, PrimitiveContainer as Primitive, PointPrimitiveContainer as PointPrimitive, PointPrimitiveCollectionContainer as PointPrimitiveCollection, ScreenSpaceEventContainer as ScreenSpaceEvent, ScreenSpaceEventHandlerContainer as ScreenSpaceEventHandler, ScreenSpaceEventHandlerContainer as ScreenSpaceCameraController, ImageryLayerContainer as ImageryLayer, CameraOperationContainer as CameraOperation, CameraFlyHome, CameraFlyTo, CameraFlyToBoundingSphere, Cesium3DTilesetContainer as Cesium3DTileset };
