/**
 * SPREAD 05 — The Structure That Protects Your Investment
 *
 * Publication shell only (stock, running head, folio). The body is the approved
 * Magic Patterns composition, ported in `Section05Body`.
 */

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import Section05Body from "./Section05Body";

export default function Spread05Structure({ isActive = false }: { isActive?: boolean }) {
  void isActive;

  return (
    <Page stock="ink">
      <RunningHead chapter="05 / The Structure That Protects Your Investment" issue="DIS Origin" />

      <PageBody>
        <Section05Body />
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="05" />
    </Page>
  );
}
