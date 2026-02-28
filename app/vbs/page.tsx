import AnimatedSection from "@/components/animated-section";

const rows = [
  ["1000-5000", "0.70", "30 Sec."],
  ["5001-30,000", "0.65", "30 Sec."],
  ["30,001-50,000", "0.62", "30 Sec."],
  ["50,001-100,000", "0.60", "30 Sec."],
  ["100,001-200,000", "0.58", "30 Sec."],
  ["200,001+", "0.56", "30 Sec."]
];

export default function VBSPage() {
  return (
    <AnimatedSection>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Voice Broadcasting Service (VBS)</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Deliver voice campaigns quickly with clear rates and dependable routing.</p>
        </div>
        <div className="card overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="px-2 py-3">Slab</th>
                <th className="px-2 py-3">Rate</th>
                <th className="px-2 py-3">Duration</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-b border-slate-100 dark:border-slate-800">
                  {row.map((cell) => (
                    <td key={cell} className="px-2 py-3 text-slate-600 dark:text-slate-300">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedSection>
  );
}
