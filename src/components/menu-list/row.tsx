import React from "react";
import { CstSearchListType } from ".";

export const MenuListRow = ({
  title,
  label,
}: CstSearchListType): React.ReactElement => {
  return (
    <div>
      {title || label ? (
        <div className="w-full flex flex-col">
          {title ? <p className="text-xs mt-[2px]">{title}</p> : null}
          {label ? (
            <p className="text-[10px] leading-[12px] line-clamp-1">{label}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
