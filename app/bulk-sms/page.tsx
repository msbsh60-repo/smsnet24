import AnimatedSection from "@/components/animated-section";

const maskData = [
  ["1000-5000", "0.55", "0.55", "0.55", "0.55", "0.55"],
  ["5001-50,000", "0.52", "0.52", "0.52", "0.52", "0.52"],
  ["50,001-200,000", "0.50", "0.50", "0.50", "0.50", "0.50"],
  ["200,000+", "0.49", "0.49", "0.49", "0.49", "0.49"]
];

const nonMaskData = [
  ["1000-5000", "0.40", "0.40", "0.40", "0.40", "0.40"],
  ["5001-10,000", "0.36", "0.36", "0.36", "0.36", "0.36"],
  ["10,001-50,000", "0.35", "0.35", "0.35", "0.35", "0.35"],
  ["50,001-100,000", "0.33", "0.33", "0.33", "0.33", "0.33"],
  ["100,001-200,000", "0.32", "0.32", "0.32", "0.32", "0.32"],
  ["200,001+", "0.31", "0.31", "0.31", "0.31", "0.31"]
];

const areaBasedData = [
  ["20,000-50,000", "0.46", "0.46", "0.45", "0.46"],
  ["50,001-100,000", "0.43", "0.45", "0.43", "0.45"],
  ["100,001-200,000", "0.42", "0.44", "0.42", "0.44"],
  ["200,001-300,000", "0.40", "0.43", "0.40", "0.43"],
  ["300,001-500,000", "0.38", "0.42", "0.38", "0.42"],
  ["500,001+", "0.36", "0.42", "0.37", "0.42"]
];

function PriceTable({ title, headers, rows, id }: { title: string; headers: string[]; rows: string[][]; id: string }) {
  return (
    <div id={id} className="card overflow-x-auto scroll-mt-24">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            {headers.map((h) => (
              <th key={h} className="px-2 py-3 font-semibold">{h}</th>
            ))}
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
  );
}

export default function BulkSMSPage() {
  return (
    <div className="space-y-8">
      <AnimatedSection>
        <div>
          <h1 className="text-3xl font-bold">Bulk SMS Pricing</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Transparent operator-wise pricing for Mask, Non-Mask and Area Based campaigns.</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <PriceTable
          id="mask"
          title="Mask SMS"
          headers={["Price SLAB", "GrameenPhone", "ROBI", "BanglaLink", "Airtel", "Teletalk"]}
          rows={maskData}
        />
      </AnimatedSection>
      <AnimatedSection>
        <PriceTable
          id="non-mask"
          title="Non-Mask SMS"
          headers={["Price SLAB", "GrameenPhone", "ROBI", "BanglaLink", "Airtel", "Teletalk"]}
          rows={nonMaskData}
        />
      </AnimatedSection>
      <AnimatedSection>
        <PriceTable
          id="area-based"
          title="Area Based SMS"
          headers={["Price SLAB", "GrameenPhone", "ROBI", "BanglaLink", "Airtel"]}
          rows={areaBasedData}
        />
      </AnimatedSection>
    </div>
  );
}
