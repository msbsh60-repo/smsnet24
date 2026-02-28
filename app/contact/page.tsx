import AnimatedSection from "@/components/animated-section";

export default function ContactPage() {
  return (
    <AnimatedSection>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Digital Lab, 2nd floor, CPDL Paragon City, 11/12 Sirajuddoullah Road, Anderkilla, Chittagong 4000, Bangladesh
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">D&B D-U-N-S® Number: 73-169-7475</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Phone: +880 1705691269, +8801733393711-12, +880 9648223344
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Email: admin2@digitallabbd.com, digitallabbd@gmail.com, info@@digitallabbd.com
          </p>
        </div>
        <form className="card grid gap-4">
          <input placeholder="Your Name" className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 dark:border-slate-700" />
          <input placeholder="Email Address" className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 dark:border-slate-700" />
          <textarea placeholder="Your Message" rows={5} className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 dark:border-slate-700" />
          <button type="button" className="rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700">Send Message</button>
        </form>
      </div>
    </AnimatedSection>
  );
}
