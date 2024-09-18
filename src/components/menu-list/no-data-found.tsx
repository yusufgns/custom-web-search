import React from "react";
import { TbError404 } from "react-icons/tb";

type Props = {
  searchValue: string;
};

export function NoDataFound({ searchValue }: Props): React.ReactElement {
  return (
    <div className="flex flex-col items-center text-sm content-start gap-2 px-4 py-5 text-center">
      <TbError404 className="text-[50px] text-gray-700" />
      <p className="font-semibold leading-4 text-gray-700">No Data Found</p>
      <div className="mt-1 -mb-2 flex gap-1">
        <div className="flex items-center">
          "
          <p className="line-clamp-1 break-all max-w-[100px]">
            {searchValue}
          </p>
          "
        </div>
        did not match any data.
      </div>
      <p>Please try again</p>
    </div>
  );
}
