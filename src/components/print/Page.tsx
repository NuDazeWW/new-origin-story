/**
 * Print shell primitives — the shared "printed page" chrome used by every spread.
 * Stock (ink / paper) is set on the Page wrapper and inherited via CSS variables,
 * so no child primitive hardcodes a colour.
 */

import type { ReactNode } from "react";

export type Stock = "ink" | "paper";

export function Page({
  stock = "ink",
  children,
  className = "",
}: {
  stock?: Stock;
  children: ReactNode;
  className?: string;
}) {
  return <div className={`pg pg--${stock} ${className}`.trim()}>{children}</div>;
}

export function RunningHead({ chapter, issue }: { chapter: string; issue: string }) {
  return (
    <div className="pg__margin">
      <div className="run-head">
        <span>{chapter}</span>
        <span>{issue}</span>
      </div>
    </div>
  );
}

export function Folio({ volume, page }: { volume: string; page: string }) {
  return (
    <div className="pg__margin">
      <div className="folio">
        <span>{volume}</span>
        <span>{page}</span>
      </div>
    </div>
  );
}

export function PageBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`pg__body ${className}`.trim()}>{children}</div>;
}
