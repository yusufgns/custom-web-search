import React, {
  useCallback,
  useState,
  SetStateAction,
  useRef,
  useEffect,
} from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useBoolean } from "usehooks-ts";
import { cn } from "../utils/cn";
import { DropDown } from ".";
import { CstSearchListType } from "./menu-list";
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
  fuseOptions?: fuseOptionsType;
};

export function CustomWebSearch({
  cstSearchData,
  defaultSearchList,
  fuseOptions = {
    includeScore: true,
    keys: ["title", "label"],
  },
}: Props): React.ReactElement {
  const isFocused = useBoolean(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const wasFocused = useBoolean(false);

  const handleChangeSearch = useCallback(
    (e: { target: { value: SetStateAction<string> } }) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const handleClearSearch = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (wasFocused.value) {
        inputRef?.current?.focus();
        setSearchValue("");
        return;
      }

      setSearchValue("");
    },
    [wasFocused.value]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(e.target as Node)
      ) {
        wasFocused.setFalse();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wasFocused]);

  return (
    <div
      onClick={() => {
        inputRef?.current?.focus();
      }}
      ref={componentRef}
      className="relative text-sm text-gray-500"
    >
      <div
        className={cn(
          "flex items-center justify-between w-[355px] rounded-lg h-[36px] px-3 py-2 hover:cursor-pointer",
          wasFocused.value && inputRef.current
            ? "border border-blue-500"
            : "border border-gray-300"
        )}
      >
        <div className={cn("flex items-center gap-3 rounded-md w-full")}>
          <IoSearchSharp
            fontSize={20}
            className={cn(
              wasFocused.value ? "text-gray-700" : "text-gray-400",
              "min-w-5 min-h-5"
            )}
          />

          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            placeholder="Search or ask ..."
            className={cn(
              "outline-none w-full",
              wasFocused.value ? "text-gray-700" : "text-gray-400"
            )}
            onFocus={() => {
              isFocused.setTrue();
              wasFocused.setTrue();
            }}
            onBlur={() => {
              isFocused.setFalse();
            }}
            onChange={handleChangeSearch}
          />
        </div>

        {searchValue ? (
          <button
            className=" hover:text-black text-nowrap ml-2 text-xs select-none"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        ) : null}
      </div>

      {wasFocused.value ? (
        <DropDown
          wasFocused={wasFocused}
          fuseOptions={fuseOptions}
          searchValue={searchValue}
          cstSearchData={cstSearchData}
          defaultSearchList={defaultSearchList}
        />
      ) : null}
    </div>
  );
}
