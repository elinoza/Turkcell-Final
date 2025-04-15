import { ICONS } from "../../../constants/icons";
import { IconProps } from "../../../constants/types";
import NotFound from "../errorHandlings/notFound";
import clsx from "clsx";

const Icon = ({
  name,
  size,
  className = "",
}: IconProps) => {
  const iconSVG = ICONS[name];

  return !iconSVG ? (
    <NotFound />
  ) : (
    <span
      className={clsx("icon centered-aligned-flex-row m-0 p-0 text-green", className)}
      style={
        size
          ? { width: `${size}px`, height: `${size}px`,  color: "var(--bs-body-color)",
            fill: "var(--bs-body-color)",  }
          : { fill: "var(--bs-body-color)"}
      }
    >
      {iconSVG}
    </span>
  );
};

export default Icon;
