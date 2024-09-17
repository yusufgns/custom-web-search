import React, { useCallback } from "react";
import { MenuListRow, CstSearchListType } from ".";
import { cn } from "../../utils/cn";

type Props = {
  searchList: {
    data: {
      item: CstSearchListType;
      refIndex?: number;
    }[];
    categoryName?: string;
  }[];
};

export function MenuListSection({ searchList }: Props): React.ReactElement {
  const handleRowClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, action: () => void) => {
      e.preventDefault();
      e.stopPropagation();
      action();
    },
    []
  );

  return (
    <div className="pt-2 max-h-64 overflow-scroll">
      {searchList?.map((e) => (
        <div
          className={cn(searchList.indexOf(e) === 0 ? "" : "pt-2")}
          key={
            e?.categoryName +
            "-custom-web-search-menu-list-container" +
            Math.random()
          }
        >
          {e?.categoryName ? (
            <p className="px-4 text-xs">{e?.categoryName}</p>
          ) : null}
          {e?.data?.map((item) => {
            const data = item?.item;
            return (
              <div
                key={item?.item?.title + "-custom-web-search-menu-list-section"}
              >
                <div
                  className="flex hover:cursor-pointer items-start justify-start content-start gap-2 px-4 py-1 hover:bg-gray-50 hover:bg-opacity-70"
                  onClick={(e: never) => handleRowClick(e, () => data.action)}
                >
                  <MenuListRow
                    icon={data?.icon}
                    title={data?.title}
                    label={data?.label}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
