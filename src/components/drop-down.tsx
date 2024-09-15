import React from "react";
import { cn } from "../utils/cn";
import { DropDownKeyList } from ".";
import { MenuListSection, NoDataFound } from "./menu-list";
import { CstSearchListType } from "./menu-list/type";
import { fuseSearch } from "../utils/fuse-search";
import { fuseOptionsType } from "./type";

type Props = {
  cstSearchData: {
    list: CstSearchListType[];
    categoryName?: string;
  }[];
  defaultSearchList: {
    list: {
      item: CstSearchListType;
    }[];
    categoryName?: string;
  }[];
  searchValue: string;
  fuseOptions?: fuseOptionsType;
};

export function DropDown({
  defaultSearchList,
  searchValue,
  cstSearchData,
  fuseOptions,
}: Props): React.ReactElement {
  const getDefaultSearchList = () => {
    return defaultSearchList
      .map((item) => {
        const result = item.list;
        if (result.length > 0) {
          return {
            data: result?.length > 0 ? result : [],
            categoryName: item.categoryName,
          };
        } else return null;
      })
      .filter((result) => result !== null);
  };

  const getCstSearchList = () => {
    return cstSearchData
      .map((item) => {
        const itemList = item.list;
        const result = fuseSearch(itemList, searchValue, fuseOptions);
        if (result.length > 0) {
          return {
            data:
              result.length > 0
                ? result.map((r) => ({ item: r.item, refIndex: r.refIndex }))
                : [],
            categoryName: item.categoryName,
          };
        } else return null;
      })
      .filter((result) => result !== null);
  };

  const getSearchList = () => {
    if (getCstSearchList()?.length > 0 || searchValue.length > 0) {
      return getCstSearchList();
    } else {
      return getDefaultSearchList();
    }
  };

  return (
    <div
      className={cn(
        "absolute flex flex-col w-[355px] select-none ",
        "rounded-lg mt-[6px]",
        "border border-gray-300 overflow-hidden"
      )}
    >
      {getSearchList()?.length > 0 ? (
        <>
          <MenuListSection searchList={getSearchList()} />
          <DropDownKeyList />
        </>
      ) : (
        <NoDataFound searchValue={searchValue} />
      )}
    </div>
  );
}
