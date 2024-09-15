import React from "react";
import { cn } from "../utils/cn";
import { DropDownKeyList } from ".";
import { MenuListSection, NoDataFound } from "./menu-list";
import { CstSearchListType } from "./menu-list/type";
import { fuseSearch } from "../utils/fuse-search";
import { fuseOptionsType } from "./type";

type Props = {
  searchData: {
    list: CstSearchListType[];
    listTitle?: string;
  }[];
  defaultSearchList: {
    list: {
      item: CstSearchListType;
    }[];
    listTitle?: string;
  }[];
  searchValue: string;
  fuseOptions?: fuseOptionsType;
};

export function DropDown({
  defaultSearchList,
  searchValue,
  searchData,
  fuseOptions,
}: Props): React.ReactElement {
  // const getSearchList = () => {
  //   const fuseSearchData = fuseSearch(
  //     searchData.list,
  //     searchValue,
  //     fuseOptions
  //   );
  //   if (fuseSearchData?.length > 0 || searchValue.length > 0) {
  //     return fuseSearchData;
  //   } else {
  //     return defaultSearchList.list;
  //   }
  // };

  const getDefaultSearchList = () => {
    console.log(defaultSearchList);
    return defaultSearchList
      .map((item) => {
        const itemList = item.list.map((i) => i.item);
        const result = fuseSearch(itemList, searchValue, fuseOptions);
        return result.length > 0 ? result : null;
      })
      .filter((result) => result !== null);
  };

  console.log(getDefaultSearchList());

  return (
    <div
      className={cn(
        "absolute flex flex-col w-[355px] select-none ",
        "rounded-lg mt-[6px]",
        "border border-gray-300 overflow-hidden"
      )}
    >
      {/* {getSearchList()?.length > 0 ? (
        <>
          <MenuListSection searchList={getSearchList()} />
          <DropDownKeyList />
        </>
      ) : (
        <NoDataFound searchValue={searchValue} />
      )} */}
    </div>
  );
}
