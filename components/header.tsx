"use client";

import Link from "next/link";
import { menuItems } from "@/lib/data";
import ThemeToggle from "@/components/theme-toggle";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="container-layout flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-brand-600 dark:text-brand-500">
          smsnet24
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <nav className={`${open ? "block" : "hidden"} absolute left-0 top-full w-full bg-white p-4 dark:bg-slate-950 md:static md:block md:w-auto md:bg-transparent md:p-0`}>
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            {menuItems.map((item) => (
              <li key={item.name} className="group relative">
                <Link href={item.href} className="text-sm font-medium hover:text-brand-600">
                  {item.name}
                </Link>
                {item.children && (
                  <ul className="mt-2 space-y-2 rounded-xl border border-slate-200 p-3 md:pointer-events-none md:absolute md:left-0 md:top-6 md:w-44 md:translate-y-2 md:opacity-0 md:transition group-hover:md:pointer-events-auto group-hover:md:translate-y-0 group-hover:md:opacity-100 dark:border-slate-700 dark:bg-slate-900">
                    {item.children.map((sub) => (
                      <li key={sub.name}>
                        <Link href={sub.href} className="text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
