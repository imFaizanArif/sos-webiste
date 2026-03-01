import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-red-100 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">
              <span className="sos-gradient-text">SOS</span>
              <span className="text-neutral-800"> Security</span>
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Protection with Precision.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/" className="text-sm text-neutral-600 hover:text-red-600">Home</Link></li>
              <li><Link href="/about" className="text-sm text-neutral-600 hover:text-red-600">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-neutral-600 hover:text-red-600">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-neutral-600 hover:text-red-600">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Contact</h3>
            <ul className="mt-3 space-y-1 text-sm text-neutral-600">
              <li>United Kingdom</li>
              <li><a href="mailto:info@securityoperationsservices.com" className="hover:text-red-600">info@securityoperationsservices.com</a></li>
              <li><a href="tel:+447424452729" className="hover:text-red-600">+44 7424 452729</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Security Operations Services (SOS). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
