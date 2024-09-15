import React from "react";
import { CstSearchListType } from ".";
import { GoDotFill } from "react-icons/go";
import { Icon } from "../icon";

export const MenuListRow = ({
  title,
  label,
  icon,
}: CstSearchListType): React.ReactElement => {
  return (
    <div>
      {title || label ? (
        <div className="w-full flex flex-col">
          <div className="flex item-center gap-2">
            <div className="min-w-4 min-h-4">
              {icon ? (
                <Icon
                  item={{
                    icon: icon ?? null,
                  }}
                />
              ) : (
                <Icon
                  className={"bg-transparent"}
                  item={{
                    icon: GoDotFill,
                  }}
                />
              )}
            </div>
            {title ? <p className="text-xs mt-[2px]">{title}</p> : null}
          </div>
          {label ? (
            <p className="text-[10px] leading-[12px] line-clamp-1 ml-7">
              {label}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
