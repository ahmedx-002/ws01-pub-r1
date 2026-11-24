import { OrderTotals } from "./types";

export function render(totals: OrderTotals): string {
  return `total=${totals.total}`;
}
