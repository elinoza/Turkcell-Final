import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "react-bootstrap";
import Icon from "../_components/ui/Icon";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1 className="p-9">{t("title")}</h1>
      <h2>{t("title")}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, esse?
      </p>
      <Link href="/about">{t("about")}</Link>
      <Button variant="secondary2">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="sm">Button</Button>
      <Icon name="check" />
    </div>
  );
}
