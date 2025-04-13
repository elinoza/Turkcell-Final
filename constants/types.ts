import { ICONS } from "./icons";

export type IconName = keyof typeof ICONS;
export type IconProps = {
  name: IconName;
  size?: string;
  className?: string;
};
