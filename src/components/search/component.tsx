import React from 'react'
import { cn } from '../../utils/cn';
import { IoSearchSharp } from 'react-icons/io5';

type Props = {
    wasFocused?: {
        value: boolean;
        setTrue: () => void;
    };
    inputRef?: React.RefObject<HTMLInputElement>;
    searchValue?: string;
    isFocused?: {
        setTrue: () => void;
        setFalse: () => void;
    };
    handleChangeSearch?: (e: { target: { value: string } }) => void;
    handleClearSearch?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClick?: () => void;
    classNameContainer?: string;
}

export function CustomWebSearchComponent({
    wasFocused,
    inputRef,
    searchValue,
    isFocused,
    handleChangeSearch,
    handleClearSearch,
    onClick,
    classNameContainer
}: Props) {
    return (
        <div
            className={cn(
                "flex items-center justify-between w-[355px] rounded-lg h-[36px] px-3 py-2 hover:cursor-pointer bg-white",
                wasFocused && wasFocused.value && inputRef && inputRef.current
                    ? "border border-blue-500"
                    : "border border-gray-300",
                classNameContainer
            )}
        >
            <div className={cn("flex items-center gap-3 rounded-md w-full")}>
                <IoSearchSharp
                    fontSize={20}
                    className={cn(
                        wasFocused && wasFocused.value ? "text-gray-700" : "text-gray-400",
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
                        wasFocused && wasFocused.value ? "text-gray-700" : "text-gray-400"
                    )}
                    onFocus={() => {
                        isFocused && isFocused.setTrue();
                        wasFocused && wasFocused.setTrue();
                    }}
                    onBlur={() => {
                        isFocused && isFocused.setFalse();
                    }}
                    onChange={handleChangeSearch}
                    onClick={onClick}
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
    )
}
