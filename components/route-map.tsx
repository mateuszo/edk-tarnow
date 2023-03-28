import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import ReactLeafletKml from "react-leaflet-kml";

export default function RouteMap({ kmlLink }: { kmlLink: string }) {
  const [kml, setKml] = useState(null);

  useEffect(() => {
    fetch(kmlLink)
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, "text/xml");
        setKml(kml as any);
      });
  }, []);

  return (
    <div>
      <div>
        <MapContainer style={{ height: "500px", width: "100%" }} zoom={10} center={[50.008677, 20.976242]}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {kml && <ReactLeafletKml kml={kml} />}
        </MapContainer>
      </div>
    </div>
  );
}
