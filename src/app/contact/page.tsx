import type { Metadata } from "next";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { PageBanner } from "@/components/PageBanner";
import { ContactCards } from "@/components/sections/ContactCards";

export const metadata: Metadata = {
  title: "Contact Us | Security Operations Services (SOS)",
  description:
    "Get in touch with SOS. United Kingdom. Email: info@securityoperationsservices.com. Phone: +44 7424 452729.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
        imageAlt="Contact SOS"
      />
      <ContactCards />
      <ContactInfo />
    </>
  );
}
