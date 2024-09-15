import React, { useCallback } from "react";
import { MenuListRow, CstSearchListType } from ".";

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
          className="border-b border-gray-100"
          key={
            e?.categoryName +
            "-custom-web-search-menu-list-container" +
            Math.random()
          }
        >
          {e?.categoryName ? <p className="px-4">{e?.categoryName}</p> : null}
          {e?.data?.map((item) => {
            const data = item?.item;
            return (
              <div
                key={item?.item?.title + "-custom-web-search-menu-list-section"}
              >
                <div
                  className="flex hover:cursor-pointer items-start justify-start content-start gap-2 px-4 py-2 hover:bg-gray-50 hover:bg-opacity-70"
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
