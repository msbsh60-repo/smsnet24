import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import { services } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <AnimatedSection>
        <div className="card bg-gradient-to-br from-brand-600 to-slate-900 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Trusted Enterprise Messaging</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Modern SMS, VBS & Communication Solutions</h1>
          <p className="mt-4 max-w-2xl text-blue-100">
            smsnet24 delivers reliable, secure and scalable communication services for Bangladesh businesses with transparent pricing and premium support.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/bulk-sms" className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900">Explore Pricing</Link>
            <Link href="/contact" className="rounded-xl border border-white/70 px-5 py-3 font-semibold">Contact Sales</Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div>
          <h2 className="text-2xl font-bold">Core Services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="card">
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Professionally managed service with high deliverability and enterprise level support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
