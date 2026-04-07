import type { Metadata } from "next";
import BPC157Content from "./BPC157Content";

export const metadata: Metadata = {
  title: "BPC-157 Peptide Therapy | Recovery & Healing | PeptideRx Direct",
  description:
    "Physician-prescribed BPC-157 peptide therapy for accelerated recovery, joint repair, and gut healing. Starting at $149/month. Free shipping.",
};

export default function BPC157Page() {
  return <BPC157Content />;
}
