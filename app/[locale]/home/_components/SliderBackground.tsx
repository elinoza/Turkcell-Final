"use client";
import Image from "next/image";
import { useThemeStore } from "../../store/ThemeStore";

const SliderBackground = () => {
  const { theme } = useThemeStore();
  return (
    <div className="position-absolute top-0 start-0 end-0 bg-surface w-100 h-75 d-flex justify-content-end align-items-center">
      {theme === "light" ? (
        <Image src="/slider.svg" alt="slider-bg-img" width="570" height="448" />
      ) : (
        <Image
          src="/slider-dark.svg"
          alt="slider-bg-img"
          width="570"
          height="448"
        />
      )}
    </div>
  );
};

export default SliderBackground;
