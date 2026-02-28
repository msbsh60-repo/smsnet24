import AnimatedSection from "@/components/animated-section";

export default function SupportPage() {
  return (
    <AnimatedSection>
      <div className="card">
        <h1 className="text-3xl font-bold">SMS Support</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Our dedicated support team assists with onboarding, sender approval, campaign optimization, and delivery troubleshooting.
        </p>
      </div>
    </AnimatedSection>
  );
}
