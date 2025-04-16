import { useTranslations } from "next-intl";
import Image from "next/image";
import Icon from "@/app/_components/ui/Icon";
import PrimaryButton from "@/app/_components/ui/Buttons/PrimaryButton";

const About = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="d-flex flex-column flex-xl-row align-items-center gap-5">
      <div className="position-relative ">
        <Image
          src="/comp.png"
          alt="laptop-img"
          width={716}
          height={450}
        />
      </div>
      <div className="d-flex flex-column gap-3">
        <h2 className="fw-bold">{t("rockie.title")}</h2>
        <p className="text-secondary">{t("rockie.description")}</p>

        <div className="d-flex flex-column gap-3 mt-3">
    
          <div className="d-flex gap-3 align-items-start">
            <Icon name="check" className="text-primary mt-1"/>
            <div>
              <h5 className="fw-bold">{t("rockie.features.realtimePrices.title")}</h5>
              <p className="body3 text-secondary">{t("rockie.features.realtimePrices.description")}</p>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-start">
            <Icon name="check" className="text-primary mt-1"/>
            <div>
              <h5 className="fw-bold">{t("rockie.features.buySellCoins.title")}</h5>
              <p className="body3 text-secondary">{t("rockie.features.buySellCoins.description")}</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <PrimaryButton className="px-4 py-3">{t("rockie.button")}</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default About;
