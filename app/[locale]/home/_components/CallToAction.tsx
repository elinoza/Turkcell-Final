import { useTranslations } from "next-intl";
import ButtonDefault from "@/app/_components/ui/Buttons/ButtonDefault";
import Image from "next/image";

const CallToAction = () => {
  const t = useTranslations("HomePage");

  return (
      <div className="position-relative  py-3 d-flex text-main-surface flex-column flex-md-row align-items-center justify-content-between gap-4">
        <div>
          <h3 className="fw-bold">{t("testimonials.cta.title")}</h3>
          <p className="body3 m-0">{t("testimonials.cta.subtitle")}</p>
        </div>
        <ButtonDefault className="bg-white text-dark rounded-pill fw-bold px-4 py-2">
          {t("testimonials.cta.button")}
        </ButtonDefault>
      </div>
  );
};

export default CallToAction;
