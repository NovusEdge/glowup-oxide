import type { Register } from 'claude-code'
import { warpFrames, meterRows, dividerFor } from './draw.ts'

// glowup asks every renderer for every pack; this one answers for oxide and passes the rest on.
const PACK = 'oxide'

export const register: Register = on => {
  on('glowup.field', async (_$, e, next) => e.pack === PACK ? { value: warpFrames(e.cols, e.rows, e.colors, e.reduced) } : next(e))
  on('glowup.meter', async (_$, e, next) => e.pack === PACK ? { value: meterRows(e.width, e.windows, e.ctxPercent, e.colors) } : next(e))
  on('glowup.divider', async (_$, e, next) => e.pack === PACK ? { value: dividerFor(e.turn, e.colors) } : next(e))
}
