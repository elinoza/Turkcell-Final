import PrimaryButton from "@/app/_components/ui/Buttons/PrimaryButton";
import React from "react";
import Partners from "./Partners";
import { useTranslations } from "next-intl";

const Slider = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="d-flex flex-column gap-9 pt-9 pb-0 w-50">
      <div className="d-flex flex-column gap-5 justify-content-center align-items-start ">
        <h1>{t("slider.title")}</h1>
        <p className="text-secondary">{t("slider.content")}</p>
        <PrimaryButton>{t("slider.start-button")}</PrimaryButton>
      </div>
      <div className="d-flex flex-column py-5">
        {" "}
        <h5>Our Partners</h5>
        <div className="d-flex gap-5 align-items-center py-5">
          {" "}
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default Slider;
