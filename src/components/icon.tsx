import React from "react";

type Props = {
  item: {
    icon: React.ElementType | null;
  };
};

export function Icon({ item }: Props): React.ReactElement {
  return (
    <>
      {item.icon ? (
        <div className="min-w-5 min-h-5 rounded-[4px] bg-[#E4ECF1]">
          <item.icon className="min-w-5 min-h-5 p-[4px]" fontSize={16} />
        </div>
      ) : null}
    </>
  );
}
