import React from "react";
import { IconType } from "react-icons";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { Icon } from "./icon";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

type CstKeyListProps = {
  icon?: IconType;
  title: string;
  icons?: { icon: IconType }[];
};

export const CstKeyList: CstKeyListProps[] = [
  {
    title: "To navigate",
    icons: [
      {
        icon: IoMdArrowDropdown,
      },
      {
        icon: IoMdArrowDropup,
      },
    ],
  },
  {
    title: "To select",
    icon: MdSubdirectoryArrowLeft,
  },
];

export function DropDownKeyList(): React.ReactElement {
  return (
    <div className="h-[36px] bg-gray-50 w-full border-t-gray-300 border-t-[1px] px-4 flex items-center hover:cursor-default">
      <div className="flex items-center gap-4">
        {CstKeyList.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.icon ? (
              <Icon
                item={{
                  icon: item.icon,
                }}
              />
            ) : null}
            {item?.icons ? (
              <div className="flex gap-[2px]">
                {item.icons
                  ? item.icons.map((item, idx) => (
                      <Icon
                        key={idx + "-custom-web-search-key-list-icon"}
                        item={{
                          icon: item.icon,
                        }}
                      />
                    ))
                  : null}
              </div>
            ) : null}
            <p className="text-[10px]">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
