import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NavBar from "../components/templates/NavBar";
import Footer from "../components/templates/Footer";

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

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <><NavBar/>
      {children}
      <Footer/>
    </>
  );
}
