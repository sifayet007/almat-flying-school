import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IContactType {
  value: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
}
[];
