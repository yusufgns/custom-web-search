import React from "react";
import { CstSearchListType } from ".";
import { Icon } from "../icon";

export const MenuListRow = ({
  title,
  label,
  icon,
}: CstSearchListType): React.ReactElement => {
  return (
    <div className="py-1">
      {title || label ? (
        <div className="w-full flex items-start gap-[8px]">
          {icon ? (
            <div className="min-w-4 min-h-4">
              <Icon
                item={{
                  icon: icon ?? null,
                }}
              />
            </div>
          ) : null}
          <div>
            {title ? <p className="text-xs text-black">{title}</p> : null}
            {label ? <p className="text-xs leading-3 line-clamp-1">{label}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};
