import React from "react";
import { IonResource } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Cesium3DTileset from "../Cesium3DTileset";
import ViewerContext from "../context/ViewerContext";
import Cesium3DTilesetContext from "../context/Cesium3DTilesetContext";

export default () => {
  storiesOf("Cesium3DTileset", module).addWithJSX("default", () => (
    <Viewer full>
      <ViewerContext.Consumer>
        {viewer => (
          <Cesium3DTileset
            url={IonResource.fromAssetId(3838)}
            onMount={tileset => viewer.zoomTo(tileset)}>
            <Cesium3DTilesetContext.Consumer>
              {cesium3DTileset => console.log('cesium3DTileset')}
            </Cesium3DTilesetContext.Consumer>
          </Cesium3DTileset>
        )}
      </ViewerContext.Consumer>
    </Viewer>
  ));
};
