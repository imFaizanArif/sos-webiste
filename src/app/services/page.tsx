import type { Metadata } from "next";
import { ServicesList } from "@/components/sections/ServicesList";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Our Services | Security Operations Services (SOS)",
  description:
    "Venue security, event security, sports events, local authority support, security consultancy, and close protection across the UK.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        imageSrc="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80"
        imageAlt="Event security"
      />
      <ServicesList />
    </>
  );
}
