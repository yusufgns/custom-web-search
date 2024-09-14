import { IconType } from "react-icons";

export interface MenuListProps {
  Icon?: IconType;
  title?: string;
  label?: string;
  action?: () => void;
}

export interface fuseOptionsType {
  isCaseSensitive?: boolean;
  includeScore?: boolean;
  shouldSort?: boolean;
  includeMatches?: boolean;
  findAllMatches?: boolean;
  minMatchCharLength?: number;
  location?: number;
  threshold?: number;
  distance?: number;
  useExtendedSearch?: boolean;
  ignoreLocation?: boolean;
  ignoreFieldNorm?: boolean;
  fieldNormWeight?: number;
  keys?: string[];
}
