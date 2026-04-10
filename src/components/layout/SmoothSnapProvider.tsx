"use client";

import { useSmoothSnap } from "@/hooks/useSmoothSnap";

export function SmoothSnapProvider() {
  useSmoothSnap();
  return null;
}
