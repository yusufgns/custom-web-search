import { IoSearchSharp } from "react-icons/io5";
import { CustomWebSearch } from "./components";

export default function App() {
  const cstSearchData = [
    {
      list: [
        {
          title: "User Settings",
        },
        {
          title: "Team Settings",
          label: "Add members, create teams",
        },
      ],
      categoryName: "Settings",
    },
    {
      list: [
        {
          title: "Category List",
          label: "Your category list",
          icon: IoSearchSharp,
        },
        {
          title: "Category Detail",
          icon: IoSearchSharp,
        },
      ],
      categoryName: "Category",
    },
  ];

  const defaultSearchList = [
    {
      list: [
        {
          item: {
            title: "Profile",
            label: "View your profile",
          },
        },
      ],
      categoryName: "Profile",
    },
    {
      list: [
        {
          item: {
            title: "Payment",
          },
        },
        {
          item: {
            title: "Billing",
          },
        },
        {
          item: {
            title: "Subscription",
          },
        },
      ],
      categoryName: "Account",
    },
  ];
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center">
      <CustomWebSearch
        defaultSearchList={defaultSearchList}
        cstSearchData={cstSearchData}
      />
    </div>
  );
}
