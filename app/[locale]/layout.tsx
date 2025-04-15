import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { DM_Sans } from "next/font/google";
import "./styles/main.scss";
import NavBar from "./components/templates/NavBar";
import Footer from "./components/templates/Footer";
import { ThemeProvider } from "./components/templates/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* <Script
  id="theme"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      try {
        const raw = sessionStorage.getItem("theme-storage");
        const parsed = raw ? JSON.parse(raw) : null;
        const theme = parsed?.state?.theme ?? (
          window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        );
        document.documentElement.setAttribute("data-bs-theme", theme);
      } catch (e) {
        document.documentElement.setAttribute("data-bs-theme", "light");
      }
    `,
  }}
/> */}
</head>
          
      <body className={`${dmSans.className}`}>
      <ThemeProvider />
        <NextIntlClientProvider> <NavBar/>{children}<Footer/></NextIntlClientProvider>
      </body>
    </html>
  );
}
