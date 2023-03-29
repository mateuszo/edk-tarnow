// @ts-ignore
import { createLayerComponent, LayerProps, LeafletContextInterface } from "@react-leaflet/core";
import * as L from "leaflet";
import "leaflet-kml";

interface IProps {
  kml: XMLDocument;
  kmlOptions?: {
    iconOptions: object;
  };
}

const updateOnCanvas = (map: L.Map) => {
  if (map.options.preferCanvas) {
    // @ts-ignore
    map._renderer._update();
  }
};

const createLeafletElement = (props: IProps, context: LeafletContextInterface) => {
  const { kml, kmlOptions } = props;
  // @ts-ignore
  const instance = new L.KML(kml, kmlOptions);
  if (context.map.options.preferCanvas) {
    setTimeout(
      (map: L.Map) => {
        // Handling react-leaflet bug of canvas renderer not updating
        // @ts-ignore
        map._renderer._update();
      },
      0,
      context.map
    );
  }
  return { instance, context };
};

const updateLeafletElement = (instance: L.Layer, props: IProps, prevProps: IProps) => {
  // @ts-ignore
  updateOnCanvas(instance._map);
};

export default createLayerComponent<L.Layer, LayerProps & IProps>(createLeafletElement, updateLeafletElement);
