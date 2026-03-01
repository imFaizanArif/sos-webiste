import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";
import { MissionVision } from "@/components/sections/MissionVision";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { PageBanner } from "@/components/PageBanner";
import { ValuesStrip } from "@/components/sections/ValuesStrip";

export const metadata: Metadata = {
  title: "About Us | Security Operations Services (SOS)",
  description:
    "UK-based security and crowd management. Our mission, vision, and commitment to preparation, professionalism, and prevention.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
        imageAlt="Professional security team"
      />
      <AboutContent />
      <MissionVision />
      <ValuesStrip />
      <WhyChooseSection />
    </>
  );
}
