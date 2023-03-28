import { EdkRouteData } from "@/data/edk_routes";
import { ArrowTrendingUpIcon, DocumentTextIcon, MapIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
// import RouteMap from "./route-map";

export default function EdkRoute({ edkRouteData }: { edkRouteData: EdkRouteData }) {
  const RouteMap = dynamic(() => import("./route-map"), {
    ssr: false,
  });

  return (
    <>
      <div className="flex mt-8">
        <div className="flex-1">
          <h2 className="text-4xl font-bold">
            <span className="text-black bg-white">{edkRouteData.name} </span>
          </h2>
          <p>{edkRouteData.description}</p>
          <h3 className="text-2xl font-bold mt-4">Początek trasy</h3>
          <p>{edkRouteData.start}</p>
          <h3 className="text-2xl font-bold mt-4">Koniec trasy</h3>
          <p>{edkRouteData.end}</p>
          <div className="flex">
            <div className="flex-1">
              <h4 className="text-xl font-bold mt-4">Długość trasy</h4>
              <p>{edkRouteData.length} km</p>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mt-4">Suma podejść</h4>
              <p>{edkRouteData.ascent} m</p>
            </div>
          </div>
          <div className="flex text-black justify-evenly mt-4">
            {edkRouteData.descriptionLink ? (
              <Link href={edkRouteData.descriptionLink} target="_blank">
                <div className="bg-white rounded-lg m-2 p-2">
                  <DocumentTextIcon className="h-6 w-6 inline-block mr-2" />
                  Opis trasy
                </div>
              </Link>
            ) : (
              ""
            )}
            {edkRouteData.kmlLink ? (
              <Link href={edkRouteData.kmlLink} target="_blank">
                <div className="bg-white rounded-lg m-2 p-2">
                  <ArrowTrendingUpIcon className="h-6 w-6 inline-block mr-2" />
                  Ślad GPS
                </div>
              </Link>
            ) : (
              ""
            )}

            {edkRouteData.mapLink ? (
              <Link href={edkRouteData.mapLink} target="_blank">
                <div className="bg-white rounded-lg m-2 p-2">
                  <MapIcon className="h-6 w-6 inline-block mr-2" />
                  Mapa trasy
                </div>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex-1">{edkRouteData.kmlLink ? <RouteMap kmlLink={edkRouteData.kmlLink} /> : ""}</div>
      </div>
    </>
  );
}
