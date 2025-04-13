import { ICONS } from "../../../constants/icons";
import { IconProps } from "../../../constants/types";
import NotFound from "../errorHandlings/notFound";
import clsx from "clsx";

const Icon = ({
  name,
  size = "14",
  className = "text-secondary",
}: IconProps) => {
  const iconSVG = ICONS[name];

  return !iconSVG ? (
    <NotFound />
  ) : (
    <span
      className={clsx("d-inline-block", className)}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {iconSVG}
    </span>
  );
};

export default Icon;
