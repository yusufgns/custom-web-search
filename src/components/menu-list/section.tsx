import React, { useCallback } from "react";
import { MenuListRow, CstSearchListType } from ".";
import { Icon } from "..";

type Props = {
  searchList: {
    item: CstSearchListType;
  }[];
  refIndex?: number;
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
    <div className="pt-2">
      {searchList?.map((item, index) => (
        <div
          key={
            item?.item?.title + "-custom-web-search-menu-list-section" + index
          }
          className="flex hover:cursor-pointer items-start justify-start content-start gap-2 px-4 py-2 hover:bg-gray-50 hover:bg-opacity-70"
          onClick={(e: never) => handleRowClick(e, () => item.item.action)}
        >
          {item?.item?.icon ? (
            <div className="min-w-4 min-h-4">
              <Icon
                item={{
                  icon: item?.item?.icon ?? null,
                }}
              />
            </div>
          ) : null}
          <MenuListRow title={item?.item?.title} label={item?.item?.label} />
        </div>
      ))}
    </div>
  );
}
