import { IoSearchSharp } from "react-icons/io5";
import { CustomWebSearch } from "./components";

export default function App() {
  const CstSearchList = {
    list: [
      {
        title: "Default for 'asdasasdsadsdaas'",
        label: "Default for react on the web",
        icon: IoSearchSharp,
      },
      {
        title: "Default for 'reacasdadasdasdsadsat'",
        label: "Default for react on the web",
        icon: IoSearchSharp,
      },
    ],
    listTitle: "Default Search",
  };

  const defaultSearchList = {
    list: [
      {
        item: {
          title: "Search for 'react'",
          label: "Search for react on the web",
          icon: IoSearchSharp,
        },
      },
    ],
    listTitle: "Default Search",
  };
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center">
      <CustomWebSearch
        defaultSearchList={defaultSearchList}
        CstSearchList={CstSearchList}
      />
    </div>
  );
}
