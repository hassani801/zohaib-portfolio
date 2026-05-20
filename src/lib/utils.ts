export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatStat(value: number, suffix = ""): string {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(0)}M${suffix}`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(0)}${suffix}`;
  }
  return `${value}${suffix}`;
}
