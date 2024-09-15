import { IoSearchSharp } from "react-icons/io5";
import { CustomWebSearch } from "./components";

export default function App() {
  const CstSearchList = [
    {
      list: [
        {
          title: "CstSearchList 1.1",
          label: "Default for react on the web",
          icon: IoSearchSharp,
        },
        {
          title: "CstSearchList 1.2",
          label: "Default for react on the web",
          icon: IoSearchSharp,
        },
      ],
      listTitle: "CstSearchList 1",
    },
    {
      list: [
        {
          title: "CstSearchList 2.1",
          label: "Default for react on the web",
          icon: IoSearchSharp,
        },
        {
          title: "CstSearchList 2.2",
          label: "Default for react on the web",
          icon: IoSearchSharp,
        },
      ],
      listTitle: "CstSearchList 2",
    },
  ];

  const defaultSearchList = [
    {
      list: [
        {
          item: {
            title: "sjndfkdsnfjsjnsdfkjsnd Search 1.1",
            label: "Search for react on the web",
            icon: IoSearchSharp,
          },
        },
      ],
      listTitle: "Default Search 1",
    },
    {
      list: [
        {
          item: {
            title: "Default Search 2.1",
            label: "Search for react on the web",
            icon: IoSearchSharp,
          },
        },
        {
          item: {
            title: "Default Search 2.2",
            label: "Search for react on the web",
            icon: IoSearchSharp,
          },
        },
      ],
      listTitle: "Default Search 2",
    },
  ];
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center">
      <CustomWebSearch
        defaultSearchList={defaultSearchList}
        CstSearchList={CstSearchList}
      />
    </div>
  );
}
