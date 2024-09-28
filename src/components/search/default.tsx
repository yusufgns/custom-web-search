import React, {
    useCallback,
    useState,
    SetStateAction,
    useRef,
    useEffect,
} from "react";
import { useBoolean } from "usehooks-ts";
import { DropDown } from "..";
import { CstSearchListType } from "../menu-list";
import { fuseOptionsType } from "../type";
import { CustomWebSearchComponent } from ".";

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
    handleFocus?: () => void;
};

export function CustomWebSearch({
    cstSearchData,
    defaultSearchList,
    fuseOptions = {
        includeScore: true,
        keys: ["title", "label"],
    },
    handleFocus
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

    useEffect(() => {
        if (handleFocus) {
            inputRef?.current?.focus();
        }
    }, [handleFocus]);

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
            <CustomWebSearchComponent
                wasFocused={wasFocused}
                inputRef={inputRef}
                searchValue={searchValue}
                isFocused={isFocused}
                handleChangeSearch={handleChangeSearch}
                handleClearSearch={handleClearSearch}
            />

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
