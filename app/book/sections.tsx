import type { BookSection } from "@/components/book/types";
import { SECTIONS_FRONT } from "./sections/front";
import { SECTIONS_PART1 } from "./sections/part1";
import { SECTIONS_PART2 } from "./sections/part2";
import { SECTIONS_345 } from "./sections/part345";
import { SECTIONS_PART4 } from "./sections/part4";
import { SECTIONS_PART6 } from "./sections/part6";

const byId = (arr: BookSection[], id: string) =>
  arr.find((s) => s.id === id);

/* Canonical order: Part I → II → III → IV → V → VI → VII.
   Each section file is authored by part, so we pick specific ids. */
export const SECTIONS: BookSection[] = [
  ...SECTIONS_FRONT,
  byId(SECTIONS_PART1, "p1-trial"),
  byId(SECTIONS_PART1, "p1-pipeline"),
  byId(SECTIONS_PART2, "p2-signals"),
  byId(SECTIONS_PART2, "p2-intent"),
  byId(SECTIONS_345, "p3-content"),
  byId(SECTIONS_PART4, "p4-tech"),
  byId(SECTIONS_345, "p5-links"),
  byId(SECTIONS_PART6, "p6-roadmap"),
  byId(SECTIONS_PART4, "p7-troubleshoot"),
].filter((s): s is BookSection => s !== undefined);