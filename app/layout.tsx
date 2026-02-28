import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "smsnet24 - Modern Communication Platform",
  description: "Bulk SMS, VBS, IVR, PUSH PULL and more from smsnet24."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="container-layout py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
