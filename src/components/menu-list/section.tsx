import React, { useCallback, useEffect, useState } from "react";
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
  wasFocused: {
    value: boolean;
  };
  searchValue: string;
};

export function MenuListSection({ searchList, wasFocused, searchValue }: Props): React.ReactElement {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const flatSearchList = searchList?.flatMap((category) => {
    return category?.data?.map((item) => ({
      ...item,
      categoryName: category.categoryName,
    }));
  });

  const handleRowClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, action: () => void) => {
      e.preventDefault();
      e.stopPropagation();
      action();
    },
    []
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (flatSearchList.length === 0) return;

      if (e.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          prevIndex < flatSearchList.length - 1 ? prevIndex + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : flatSearchList.length - 1
        );
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < flatSearchList.length) {
          const selectedItem = flatSearchList[selectedIndex];
          console.log("Selected item:", selectedItem);
        }
      }
    },
    [flatSearchList, selectedIndex]
  );

  useEffect(() => {
    if (searchValue) {
      setSelectedIndex(-1);
    }
  }, [searchValue]);

  useEffect(() => {
    if (wasFocused.value) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [wasFocused.value, handleKeyDown]);

  return (
    <div className="pt-2 max-h-64 overflow-scroll">
      {searchList?.map((category) => (
        <div
          className={cn(searchList.indexOf(category) === 0 ? "" : "pt-2")}
          key={
            category?.categoryName +
            "-custom-web-search-menu-list-container" +
            Math.random()
          }
        >
          {category?.categoryName ? (
            <p className="px-4 text-xs">{category?.categoryName}</p>
          ) : null}
          {category?.data?.map((item) => {
            const data = item?.item;
            const globalIndex = flatSearchList.findIndex(
              (listItem) => listItem.item.title === item.item.title
            );
            return (
              <div
                key={item?.item?.title + "-custom-web-search-menu-list-section"}
                className={cn(
                  "flex hover:cursor-pointer items-start justify-start content-start gap-2 px-4 py-1 hover:bg-gray-50 hover:bg-opacity-70",
                  selectedIndex === globalIndex ? "bg-gray-100 hover:bg-gray-100" : ""
                )}
                onClick={(e: never) => handleRowClick(e, () => data.action)}
              >
                <MenuListRow
                  icon={data?.icon}
                  title={data?.title}
                  label={data?.label}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
