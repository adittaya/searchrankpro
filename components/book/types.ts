import type { ReactNode } from "react";

export type BookSection = {
  id: string;
  part: string;
  partIndex: number;
  title: string;
  blurb: string;
  minutes: number;
  num?: string;
  body: ReactNode;
};