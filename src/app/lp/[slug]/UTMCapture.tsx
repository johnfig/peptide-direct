"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/utm";

/** Captures UTM parameters from the URL on mount and persists them to sessionStorage. */
export default function UTMCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);

  return null;
}
