import { useBoolean } from 'usehooks-ts';
import { CustomWebSearch, CustomWebSearchComponent } from '.'
import { CstSearchListType } from '../menu-list';
import { useEffect, useRef } from 'react';

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
}

export function CstWebSearchPopup({ defaultSearchList, cstSearchData }: Props) {
    const wasFocused = useBoolean(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const handleFocus = () => {
        wasFocused.setTrue();
    }

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
        <>
            <div
                className='absolute top-0'
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleFocus();
                }}
            >
                {!wasFocused.value && (
                    <CustomWebSearchComponent
                        classNameContainer={"w-96"}
                    />
                )}
            </div>
            {
                wasFocused.value && (
                    <div ref={componentRef}>
                        <CustomWebSearch
                            handleFocus={handleFocus}
                            cstSearchData={cstSearchData}
                            defaultSearchList={defaultSearchList}
                        />
                    </div>
                )
            }
        </>
    )
}
