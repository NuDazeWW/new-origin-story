import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import Publication from "@/components/Publication";
import Spread00Cover from "@/components/spreads/Spread00Cover";
import Spread01Problem from "@/components/spreads/Spread01Problem";
import Spread02Insight from "@/components/spreads/Spread02Insight";
import Spread03Solution from "@/components/spreads/Spread03Solution";
import Spread04Flywheel from "@/components/spreads/Spread04Flywheel";
import Spread04Structure from "@/components/spreads/Spread04Structure";
import Spread05Moat from "@/components/spreads/Spread05Moat";


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

  return (
    <Publication spreadCount={7} onSpreadChange={setCurrentSpread}>
      <Spread00Cover />
      <Spread01Problem isActive={currentSpread === 1} />
      <Spread02Insight isActive={currentSpread === 2} />
      <Spread03Solution isActive={currentSpread === 3} />
      <Spread04Flywheel isActive={currentSpread === 4} />
      <Spread04Structure isActive={currentSpread === 5} />
      <Spread05Moat isActive={currentSpread === 6} />
    </Publication>

  );
}
