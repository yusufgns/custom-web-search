import React from "react";

export interface CstSearchListType {
  icon?: React.ElementType;
  title?: string;
  label?: string;
  action?: () => void;
}

export interface CstSearchDataType {
  list: CstSearchListType[];
  categoryName?: string;
}
