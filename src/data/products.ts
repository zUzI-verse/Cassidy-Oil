import {
  FrameA,
  FrameB,
  FrameC,
  FrameD,
  FrameE,
  FrameF,
  FrameG,
  FrameH,
  FrameI,
  FrameJ,
  FrameK,
  FrameL,
  FrameM,
  FrameN,
  FrameO,
  FrameQ,
  FrameR,
  FrameU,
  FrameV,
} from "../assets";


type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  noButton?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "CASSKET PREMIUM 4T 20W-40 Api SL/MA2",
    description: " Premium Multigrade Okada, Kekenapep engine oil ",
    image: FrameF,
  },
  {
    id: 2,
    name: "CASSTEK MOTO 4T 20W-40 API SF/CF",
    description: "High Performance Multigrade Okada, Kekenapep engine oil",
    image: FrameG,
  },
  {
    id: 3,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF",
    description:
      "Super Performance Multigrade designed with deposit guard technology",
    image: FrameE,
  },
  {
    id: 4,
    name: "CASSGOLD POWER MOTOR OIL SAE40 API SF/CF",
    description: "High Performance mono-grade mineral engine oil",
    image: FrameU,
  },
  {
    id: 5,
    name: "CASSGOLD PASSENGER MOTOR OIL 20W-50 API SG/CF-4",
    description:
      "World class mineral technology engine oil designed for superior wear protection",
    image: FrameD,
  },
  {
    id: 6,
    name: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-40 API SN/CF",
    description:
      "Synthetic technology engine oil designed for superior wear protection",
    image: FrameO,
  },
  {
    id: 7,
    name: "CASSTURBO HD SAE40 API CF/SF",
    description: "Heavy duty Mono-grade mineral engine oil",
    image: FrameL,
  },
  {
    id: 8,
    name: "CASSTURBO HD PLUS 15W40 CF-4/SG",
    description:
      "Fleet multigrade diesel engine oil designed to provide superior performanc for trucks, buses, light commercial vehicle.",
    image: FrameK,
  },
  {
    id: 9,
    name: "CASSTURBO HD ULTRA 15W40 CI-4",
    description:
      "Long drain premium performance Multigrade diesel engine oil designed for modern heavy duty engine",
    image: FrameC,
  },
  {
    id: 10,
    name: "CASSTURBO HD FORCE 15W40 CH-4",
    description:
      "Superior Performance Multigrade diesel engine oil designed with active protection",
    image: FrameB,
  },
  {
    id: 11,
    name: "CASSTRANS DEX D2 ATF DEXRON IID",
    description:
      "Multivehicle automatics transmission fluid and power steering fluid",
    image: FrameM,
  },
  {
    id: 12,
    name: "CASSTRANS DEX H3 ATF DEXRON IIIH/IIIM",
    description:
      "Multivehicle automatics transmission fluid and power steering fluid",
    image: FrameA,
  },
  {
    id: 13,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-30 API SN-CF",
    description:
      "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameD,
  },
  {
    id: 14,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-40 API SN-CF",
    description:
      "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameR,
  },
  {
    id: 15,
    name: "CASSGOLD ADVANCED FULLY SYNTHETIC MOTOR OIL 5W-30 API SN/CF",
    description:
      "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameV,
  },
  {
    id: 16,
    name: "CASSGOLD ULTRATECH FULLY SYNTHETIC MOTOR OIL 0W-20 API SN-CF",
    description:
      "Fully synthetic technology engine oil designed for superior wear protection",
    image: FrameQ,
  },
  {
    id: 17,
    name: "CASSTURBO HD SAE40 API SF/CF 25L",
    description: "",
    image: FrameI,
    noButton: true,
  },
  {
    id: 18,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF 25L",
    description: "",
    image: FrameN,
    noButton: true,
  },
  {
    id: 19,
    name: "CASSGOLD SUPER MOTOR OIL 20W-50 API SL/CF  200L",
    description: "",
    image: FrameH,
    noButton: true,
  },
  {
    id: 20,
    name: "CASSTURBO HD SAE40 API SF/CF 25L 200L",
    description: "",
    image: FrameJ,
    noButton: true,
  },
];

export { products };
export type { Product };