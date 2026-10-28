import { Pipe, PipeTransform } from '@angular/core';

const auto = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const units: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 365 * 24 * 60 * 60 * 1000],
  ["month", 30 * 24 * 60 * 60 * 1000],
  ["day", 24 * 60 * 60 * 1000],
  ["hour", 60 * 60 * 1000],
  ["minute", 60 * 1000],
  ["second", 1000],
];

@Pipe({ name: 'relativeTimePipe', pure: false })
export class RelativeTimePipe implements PipeTransform {
  transform(timestamp: number): string {
    let diff = timestamp - Date.now();
    for (const [unit, ms] of units) {
      if (Math.abs(diff) >= ms) {
        return auto.format(Math.round(diff / ms), unit);
      }
    }
    return auto.format(0, "second");
  }
}
