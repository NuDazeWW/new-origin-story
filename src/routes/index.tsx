import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import Publication from "@/components/Publication";
import Spread00Cover from "@/components/spreads/Spread00Cover";
import Spread01Problem from "@/components/spreads/Spread01Problem";
import Spread02Insight from "@/components/spreads/Spread02Insight";
import Spread03Solution from "@/components/spreads/Spread03Solution";
import Spread04Flywheel from "@/components/spreads/Spread04Flywheel";
import Spread05Structure from "@/components/spreads/Spread05Structure";
import Spread06Moat from "@/components/spreads/Spread06Moat";
import Spread07BusinessModel from "@/components/spreads/Spread07BusinessModel";
import Spread08StrategicPlay from "@/components/spreads/Spread08StrategicPlay";
import Spread09Traction from "@/components/spreads/Spread09Traction";
import Spread10Vanguard from "@/components/spreads/Spread10Vanguard";
import Spread11WhyUs from "@/components/spreads/Spread11WhyUs";
import Spread12Roles from "@/components/spreads/Spread12Roles";
import Spread13Ask from "@/components/spreads/Spread13Ask";
import Spread14UseOfFunds from "@/components/spreads/Spread14UseOfFunds";
import Spread15Closing from "@/components/spreads/Spread15Closing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIS ORIGIN — The Readiness Terminal" },
      {
        name: "description",
        content:
          "Decision Intelligence Systems: the intelligence infrastructure layer for the $90B sports sponsorship market.",
      },
      { property: "og:title", content: "DIS ORIGIN — The Readiness Terminal" },
      {
        property: "og:description",
        content:
          "An investor publication from Decision Intelligence Systems — building the readiness standard for sponsorship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [currentSpread, setCurrentSpread] = useState(0);

  const spreads = [
    <Spread00Cover key="cover" />,
    <Spread01Problem key="p01" isActive={currentSpread === 1} />,
    <Spread02Insight key="p02" isActive={currentSpread === 2} />,
    <Spread03Solution key="p03" isActive={currentSpread === 3} />,
    <Spread04Flywheel key="p04" isActive={currentSpread === 4} />,
    <Spread05Structure key="p05" isActive={currentSpread === 5} />,
    <Spread06Moat key="p06" isActive={currentSpread === 6} />,
    <Spread07BusinessModel key="p07" isActive={currentSpread === 7} />,
    <Spread08StrategicPlay key="p08" isActive={currentSpread === 8} />,
    <Spread09Traction key="p09" isActive={currentSpread === 9} />,
    <Spread10Vanguard key="p10" isActive={currentSpread === 10} />,
    <Spread11WhyUs key="p11" isActive={currentSpread === 11} />,
    <Spread12Roles key="p12" isActive={currentSpread === 12} />,
    <Spread13Ask key="p13" isActive={currentSpread === 13} />,
    <Spread14UseOfFunds key="p14" isActive={currentSpread === 14} />,
    <Spread15Closing key="p15" isActive={currentSpread === 15} />,
  ];

  return (
    <Publication spreadCount={spreads.length} onSpreadChange={setCurrentSpread}>
      {spreads}
    </Publication>
  );
}
