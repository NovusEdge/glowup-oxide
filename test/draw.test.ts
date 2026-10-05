import { test, expect } from 'claude-code/testing'
import { warpFrames, meterRows, dividerFor, FRAMES } from '../hooks/draw.ts'

const C = { accent: '#e0703a', text: '#e8dcc4', dim: '#b0a184', faint: '#a3533a' }
const cells = (row: { text: string }[]) => row.reduce((n, s) => n + [...s.text].length, 0)

test('warp: a full loop of frames, every row exactly the asked width, all braille or blank', async () => {
  const t0 = Date.now()
  const { ms, frames } = warpFrames(58, 40, C, false)
  const took = Date.now() - t0
  expect(frames.length).toBe(FRAMES)
  expect(ms).toBeGreaterThanOrEqual(40)
  for (const f of frames) {
    expect(f.length).toBe(40)
    for (const r of f) {
      expect(cells(r)).toBe(58)
      for (const s of r) expect(/^[⠀-⣿ ]+$/.test(s.text)).toBe(true)
    }
  }
  // glowup asks once per size and palette; a whole pane must not stall it
  expect(took).toBeLessThan(5000)
})

test('warp: still motion is one frame; the same input draws the same picture', async () => {
  expect(warpFrames(20, 6, C, true).frames.length).toBe(1)
  expect(JSON.stringify(warpFrames(20, 6, C, true))).toBe(JSON.stringify(warpFrames(20, 6, C, true)))
})

test('meters: one dithered bar per window, fitting the width, showing what is left', async () => {
  const rows = meterRows(50, [{ label: '5h', usedPercent: 14, reset: '↻3h0m' }, { label: 'wk', usedPercent: 26, reset: '↻Thu' }], 5, C)
  expect(rows.length).toBe(2)
  for (const r of rows) expect(cells(r)).toBe(50)
  const first = rows[0]!.map(s => s.text).join('')
  expect(first.startsWith('5h ')).toBe(true)
  expect(first).toContain(' 86%')
  expect(first).toContain('▓▒░')
  expect(first.endsWith('↻3h0m')).toBe(true)
})

test('meters: with no usage windows the context is the one bar', async () => {
  const rows = meterRows(40, [], 30, C)
  expect(rows.length).toBe(1)
  expect(rows[0]!.map(s => s.text).join('')).toContain('ctx ')
  expect(rows[0]!.map(s => s.text).join('')).toContain(' 70%')
})

test('divider: the turn number in accent between dithered ends, one fill cell', async () => {
  const d = dividerFor(3, C)
  expect(d.left.map(s => s.text).join('')).toBe('░▒▓━━ 03 ')
  expect(d.left[1]).toEqual({ text: '03', color: C.accent, bold: true })
  expect(d.fill.text).toBe('━')
  expect(d.right.map(s => s.text).join('')).toBe('▓▒░')
})
