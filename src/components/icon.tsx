import React from "react";
import { cn } from "../utils/cn";

type Props = {
  item: {
    icon: React.ElementType | null;
  };
  className?: string;
};

export function Icon({ item, className }: Props): React.ReactElement {
  return (
    <>
      {item.icon ? (
        <div
          className={cn(
            "min-w-5 min-h-5 rounded-[4px] bg-[#E4ECF1]",
            className
          )}
        >
          <item.icon className="min-w-5 min-h-5 p-[4px]" fontSize={16} />
        </div>
      ) : null}
    </>
  );
}
