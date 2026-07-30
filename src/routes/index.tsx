import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import Publication from "@/components/Publication";
import Spread00Cover from "@/components/spreads/Spread00Cover";
import Spread01Problem from "@/components/spreads/Spread01Problem";
import Spread02Insight from "@/components/spreads/Spread02Insight";

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
    <Publication spreadCount={3} onSpreadChange={setCurrentSpread}>
      <Spread00Cover />
      <Spread01Problem isActive={currentSpread === 1} />
      <Spread02Insight isActive={currentSpread === 2} />
    </Publication>
  );
}
