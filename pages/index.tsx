import EdkRoute from "@/components/edk-route";
import { EDK_ROUTES } from "@/data/edk_routes";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>EDK Tarnów</title>
        <meta name="description" content="Ekstremalna Droga Krzyżowa - Tarnów" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css" />
      </Head>
      <Header />
      <main>
        <h1 className="text-5xl font-bold">EDK Tarnów 2023 - 31.03.2023</h1>
        <p className="mt-2">
          EDK-Tarnów 2023 rozpocznie się Mszą Świętą o godzinie 21:00 w kościele Księży Misjonarzy w Tarnowie (parafia
          Świętej Rodziny).
        </p>
        <p className="my-2">
          Rejestracja możliwa jest do środy 29.03.2023 do godziny 23:59. Nie zapewniamy materiałów. We własnym zakresie
          należy zapenić sobie odblaski, rozważania, oraz opis trasy. Materiały w wersji elektronicznej dostępne są za
          darmo na stronie WWW oraz w darmowej aplikacja EDK.
        </p>

        {EDK_ROUTES.map((edkRoute) => (
          <EdkRoute key={edkRoute.id} edkRouteData={edkRoute} />
        ))}
      </main>
    </>
  );
}
