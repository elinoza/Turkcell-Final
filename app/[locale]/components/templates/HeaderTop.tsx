import { useTranslations } from "next-intl";
import { Container } from "react-bootstrap";
import LogoLg from "./LogoLg";

const HeaderTop = () => {
  const t = useTranslations("Footer");

  const sections = [
    {
      key: "products",
      items: ["spot", "usdtPerpetual", "inversePerpetual", "launchpad", "exchange"]
    },
    {
      key: "services",
      items: ["buyCrypto", "referralProgram", "affiliateProgram", "apiDocumentation"]
    },
    {
      key: "support",
      items: ["helpCenter", "submitRequest", "authenticityCheck", "userFeedback", "tradingFee"]
    },
    {
      key: "aboutUs",
      items: ["aboutBybit", "bybitLearn", "blog", "careers", "businessContacts"]
    }
  ];

  return (
    <div className="py-6">
      <Container className="d-flex justify-content-between align-items-start flex-wrap gap-4">
        <div className="d-flex flex-column gap-2">
          <LogoLg />
          <h5>{t("talk-caption")}</h5>
          <p>{t("tel-number")}</p>
          <p>{t("mail")}</p>
          <p>{t("copyright")}</p>
        </div>

        {sections.map((section) => (
          <div key={section.key} className="d-flex flex-column gap-2">
            <p className="caption1 fw-bold">{t(`${section.key}.caption`)}</p>
            {section.items.map((item) => (
              <p key={item} className="text-secondary">{t(`${section.key}.${item}`)}</p>
            ))}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default HeaderTop;
