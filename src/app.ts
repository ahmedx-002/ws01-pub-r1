import { OrderTotals } from "./types";

export function render(totals: OrderTotals): string {
  // now renders subtotal too, affects private orders API consumers
  return `subtotal=${totals.subtotal} total=${totals.total}`;
}
