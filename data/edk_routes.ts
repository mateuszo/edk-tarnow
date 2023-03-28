export interface EdkRouteData {
  id: number;
  name: string;
  length?: number;
  ascent?: number;
  start?: string;
  end?: string;
  description?: string;
  descriptionLink?: string;
  kmlLink?: string;
  mapLink?: string;
}

export const EDK_ROUTES: EdkRouteData[] = [
  {
    id: 8619,
    name: "Tarnów - Jamna",
    start: "Tarnów",
    end: "Jamna",
    length: 41,
    ascent: 1246,
    description: `Kościół Św. Rodziny w Tarnowie → Zawada → Poręba Radlna →
    Słona Góra → Pleśna → Rychwałd → Wał → Siemiechów →
    Brzozowa → Jastrzębia → Jamna`,
    descriptionLink: "/edk_routes/Tarnów - Jamna/EDK Tarnów - Jamna - 2021 v11.pdf",
    kmlLink: "/edk_routes/Tarnów - Jamna/Tarnów - Jamna - v5.kml",
    mapLink: "/edk_routes/Tarnów - Jamna/EDK - Tarnów - Jamna - mapa - v1.pdf",
  },
  {
    id: 8620,
    name: "Tarnów - Panieńska Góra - Kozieniec",
    start: "Tarnów",
    end: "Kozieniec",
    length: 54,
    ascent: 869,
    description: "Kościół Św. Rodziny w Tarnowie →Łukanowice→Wojnicz→Panieńska Góra→Roztoka→Zakliczyn→Czchów→Kozieniec",
    descriptionLink:
      "/edk_routes/Tarnów - Panieńska Góra - Kozieniec/EDK - Tarnow - Panieńska Góra - Kozieniec - 2022 v9.pdf",
    kmlLink: "/edk_routes/Tarnów - Panieńska Góra - Kozieniec/Tarnów - Panieńska Góra - Kozieniec - v2.kml",
  },
  {
    id: 8621,
    name: "Tarnów - Pleśna - Kozieniec",
    start: "Tarnów",
    end: "Kozieniec",
    length: 47,
    ascent: 912,
    description:
      "Kościół Św. Rodziny w Tarnowie → Nowodworze → Radlna → Świebodzin → Woźnicza → Pleśna → Lubinka → Wróblowice → Zakliczyn → Wesołów → Filipowice → Piaski Drużków → Czchów-Zapora → Kościół w Czchowie na Kozieńcu",
    descriptionLink:
      "/edk_routes/Tarnów - Pleśna - Kozieniec/EDK - Tarnow - Pleśna - Zakliczyn - Kozieniec - 2023 v6.pdf",
    kmlLink: "/edk_routes/Tarnów - Pleśna - Kozieniec/EDK - Tarnow - Plesna - Zakliczyn - Kozieniec - 2023 v6.kml",
    mapLink:
      "public/edk_routes/Tarnów - Pleśna - Kozieniec/EDK - Tarnow - Pleśna - Zakliczyn - Kozieniec - mapa - v1.pdf",
  },
  {
    id: 8622,
    name: "Tarnów - Szczepanowice - Kozieniec",
    start: "Tarnów",
    end: "Kozieniec",
    length: 46,
    ascent: 801,
    description:
      "Kościół Św. Rodziny w Tarnowie → Koszyce →  Błonie → Szczepanowice → Lubinka → Janowice → Wróblowice → Zakliczyn → Wesołów → Filipowice → Piaski Drużków → Czchów-Zapora → Kościół w Czchowie na Kozieńcu",
    descriptionLink:
      "/edk_routes/Tarnów - Szczepanowice - Kozieniec/Opis EDK - Tarnow - Szczepanowice - Zakliczyn - Kozieniec - 2023 v6.pdf",
    kmlLink:
      "/edk_routes/Tarnów - Szczepanowice - Kozieniec/EDK - Tarnow - Szczepanowice - Zakliczyn - Kozieniec - v2.kml",
    mapLink:
      "/edk_routes/Tarnów - Szczepanowice - Kozieniec/Mapa EDK - Tarnów - Szczepanowice - Zakliczyn - Kozieniec - mapa v1.pdf",
  },
  {
    id: 8623,
    name: "Tarnów - Wojnicz - Kozieniec",
    start: "Tarnów",
    end: "Kozieniec",
    length: 47,
    ascent: 836,
    description: "Kościół Św. Rodziny w Tarnowie →Łukanowice→Wojnicz→Grabno→Złota→Lewniowa→Tworkowa→Czchów→Kozieniec",
    descriptionLink: "/edk_routes/Tarnów - Wojnicz - Kozieniec/EDK - Tarnow - Wojnicz - Kozieniec - 2022 v6.pdf",
    kmlLink: "/edk_routes/Tarnów - Wojnicz - Kozieniec/EDK - Tarnów - Wojnicz - Kozieniec - v5.kml",
    mapLink: "/edk_routes/Tarnów - Wojnicz - Kozieniec/EDK - Tarnow - Wojnicz - Kozieniec - mapka.pdf",
  },
  {
    id: 8624,
    name: "Tarnów – Tuchów – Kozieniec",
    start: "Tarnów",
    end: "Kozieniec",
    length: 65,
    ascent: 1883,
    description:
      "Kościół Św. Rodziny w Tarnowie -> Zawada -> Poręba Radlna -> Piotrkowice -> Tuchów -> Meszna Opacka -> Siedliska -> Chojnik -> Polichty -> Olszowa -> Borowa -> Ruda Kameralna -> Piaski Drużków -> Czchów -> Kozieniec",
    descriptionLink: "/edk_routes/Tarnów - Tuchów - Kozieniec/EDK - Tarnow -Tuchów - Kozieniec - 2019 v8.pdf",
    kmlLink: "/edk_routes/Tarnów - Tuchów - Kozieniec/Trasa Polichty - v2.kml",
  },
  {
    id: 8625,
    name: "Tarnów - Tarnów",
    start: "Tarnów",
    end: "Tarnów",
    length: 47,
    ascent: 476,
    description:
      "Kościół Św. Rodziny w Tarnowie → Zawada → Skrzyszów → Łękawica → Pogórska Wola → Wola Rzędzińska → Tarnów Krzyż → Biała → Tarnów Mościce → Tarnów",
    descriptionLink: "/edk_routes/Tarnów - Tarnów/EDK Tarnów - Tarnów - 2022v9 - Krzysiek - bez moich uwag.pdf",
    kmlLink: "/edk_routes/Tarnów - Tarnów/Tarnów - Tarnów - v4.kml",
  },
  {
    id: 8626,
    name: "100-lecia odzyskania niepodległości",
    start: "Tarnów",
    end: "Tuchów",
    length: 42,
    ascent: 688,
    description: "Tarnów - Szczepanowice - Lubinka - Łowczówek - Buchcice -  Tuchów",
    descriptionLink: "/edk_routes/Tarnów - Tuchów - 100/Opis EDK - Tarnow - Tuchów - 2018 v3.pdf",
    kmlLink: "/edk_routes/Tarnów - Tuchów - 100/Trasa - final - v8.kml",
  },
  {
    id: 8627,
    name: "Tarnów – Gorzejowa",
    start: "Tarnów",
    end: "Gorzejowa",
    length: 43,
    ascent: 1115,
    description:
      "Tarnów - Góra św.Marcina - Łękawica - Trzemesna - Kościół MB Dobrej Rady w Szynwałdzie - Góra Kokocz (Lubcza) - Góra Budyń (Słotowa) - Zagórze - Bielowy - Kościół św.Grzegorza (Gorzejowa)",
    descriptionLink: "/edk_routes/Tarnów - Gorzejowa/EDK Tarnów - Gorzejowa - 2020 v1.pdf",
    kmlLink: "/edk_routes/Tarnów - Gorzejowa/EDK Tarnów - Gorzejowa - 2020 v1.kml",
  },
  {
    id: 8628,
    name: "Trasa 14 szczytów",
    start: "Tarnów",
    end: "Kozieniec",
    length: 68,
    ascent: 2260,
    description: "Tarnów - Łowczówek - Jurasówka - Siemiechów - Kozieniec",
    descriptionLink: "/edk_routes/Tarnów - 14 szczytow/Trasa 14 szczytów - v4.pdf",
    kmlLink: "/edk_routes/Tarnów - 14 szczytow/Trasa 14 szczytów - 2022 v3 .kml",
  },
  {
    id: 8629,
    name: "Tarnów - Południowo - Zachodnia",
    start: "Tarnów",
    end: "Tarnów",
    length: 42,
    ascent: 618,
    description:
      "Tarnów – Zbylitowska Góra – Błonie – Rzuchowa – Kłokowa – Słona Góra – Poręba Radlna - Zawada – Tarnów",
    descriptionLink: "/edk_routes/Tarnów - Płd Zach/EDK 2020 trasa południowa - v4.pdf",
    kmlLink: "/edk_routes/Tarnów - Płd Zach/Tarnów trasa południowo - zachodnia - v6.kml",
  },
  {
    id: 8630,
    name: "Tarnów - Brzesko Via Regia",
    start: "Tarnów",
    end: "Brzesko",
    length: 40,
    ascent: 639,
    description:
      "Kościół św Rodziny Tarnów → Zbylitowska Góra → Łukanowice → Wojnicz → Sufczyn → Dębno → Porąbka Uszewska → Góra św Anny → Okocim → Sanktuarium św. Jakuba Brzesko",
    descriptionLink: "public/edk_routes/Tarnów - Brzesko - Via Regia/Tarnów - Brzesko - Via regia - v4.pdf",
    kmlLink: "/edk_routes/Tarnów - Brzesko - Via Regia/Tarnów - Brzesko - Via regia - v1.kml",
    mapLink: "/edk_routes/Tarnów - Brzesko - Via Regia/Tarnów - Brzesko - Via regia - mapa - 2022 v1.pdf",
  },
  {
    id: 8799,
    name: "Kozieniec - Kozieniec - św. Urbana",
    start: "Kozieniec",
    end: "Kozieniec",
    length: 40,
    ascent: 1382,
    description: "Kozieniec → Połom Mały → Kąty → Rajbrot → Iwkowa  → Machulec → Kozieniec",
    descriptionLink: "/edk_routes/Kozieniec - Kozieniec/Trasa Kozieniec -Kozieniec - v1.pdf",
    kmlLink: "/edk_routes/Kozieniec - Kozieniec/Kozieniec - Kozieniec - v2.kml",
  },
];
