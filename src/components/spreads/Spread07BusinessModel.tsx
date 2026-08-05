/**
 * SPREAD 07 — The Business Model
 * The publication shell (running head, folio, page number, carets, rail,
 * transitions) is owned here and unchanged. Only the body between the header
 * and footer dividers is the imported Section07Body composition.
 */

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";

import Section07Body from "./Section07Body";

export default function Spread07BusinessModel({ isActive = false }: { isActive?: boolean }) {
  void isActive;

  return (
    <Page stock="slate">
      <RunningHead chapter="07 / The Business Model" issue="DIS Origin" />

      <PageBody>
        <Section07Body />
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="07" />
    </Page>
  );
}
