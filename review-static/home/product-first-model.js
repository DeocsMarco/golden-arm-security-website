export const HOME_BUBBLE_ARRIVALS = Object.freeze({
  dashboard: Object.freeze({ start: 0, end: 0.2, x: 0, y: 7, scale: 0.94, rotate: 0, opacity: 0.74 }),
  dtr: Object.freeze({ start: 0.06, end: 0.48, x: 42, y: -32, scale: 0.82, rotate: 4.5, opacity: 0 }),
  schedules: Object.freeze({ start: 0.22, end: 0.66, x: -46, y: 22, scale: 0.84, rotate: -4.5, opacity: 0 }),
  locations: Object.freeze({ start: 0.38, end: 0.8, x: 46, y: 24, scale: 0.84, rotate: 4.5, opacity: 0 }),
});

const clamp01 = (value) => Math.max(0, Math.min(1, value));
const lerp = (start, end, amount) => start + ((end - start) * amount);
const smooth = (amount) => {
  const value = clamp01(amount);
  return value * value * (3 - (2 * value));
};
const interval = (progress, start, end) => smooth((progress - start) / (end - start));

const layerStateAt = (progress, spec) => {
  const amount = interval(progress, spec.start, spec.end);
  return Object.freeze({
    x: lerp(spec.x, 0, amount),
    y: lerp(spec.y, 0, amount),
    scale: lerp(spec.scale, 1, amount),
    rotate: lerp(spec.rotate, 0, amount),
    opacity: lerp(spec.opacity, 1, amount),
  });
};

export function homeTechnologyBubbleStateAt(progress) {
  const normalized = clamp01(Number(progress));
  const approvedOpacity = interval(normalized, 0.88, 0.98);
  return Object.freeze({
    progress: normalized,
    approvedOpacity,
    generatedOpacity: 1 - approvedOpacity,
    layers: Object.freeze(Object.fromEntries(
      Object.entries(HOME_BUBBLE_ARRIVALS).map(([name, spec]) => [name, layerStateAt(normalized, spec)]),
    )),
  });
}
