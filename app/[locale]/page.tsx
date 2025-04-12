import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "react-bootstrap";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1 className="text-primary">{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <Button>Button</Button>
    </div>
  );
}
