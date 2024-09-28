import { IoSearchSharp } from "react-icons/io5";
import { CustomWebSearch, CstWebSearchPopup } from "./components";
import { CstSearchDataType, CstSearchListType } from "./components/menu-list";

export default function App() {
  const cstSearchData: CstSearchDataType[] = [
    {
      list: [
        {
          title: "User Settings",
          action: () => {
            console.log("User Settings");
          }
        },
        {
          title: "Team Settings",
          label: "Add members, create teams",
          action: () => {
            console.log("Team Settings");
          },
          icon: IoSearchSharp,
        },
      ],
      categoryName: "Settings",
    },
    {
      list: [
        {
          title: "Category List",
          label: "Your category list",
          action: () => {
            console.log("Category List");
          },
          icon: IoSearchSharp,
        },
        {
          title: "Category Detail",
          action: () => {
            console.log("Category Detail");
          },
          icon: IoSearchSharp,
        },
      ],
      categoryName: "Category",
    },
  ];

  const defaultSearchList: {
    list: {
      item: CstSearchListType;
    }[];
    categoryName?: string;
  }[] = [
      {
        list: [
          {
            item: {
              title: "Profile",
              label: "View your profile",
              action: () => {
                console.log("Profile");
              }
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
              action: () => {
                console.log("Payment");
              }
            },
          },
          {
            item: {
              title: "Billing",
              action: () => {
                console.log("Billing");
              }
            },
          },
          {
            item: {
              title: "Subscription",
              action: () => {
                console.log("Subscription");
              }
            },
          },
        ],
        categoryName: "Account",
      },
    ];
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center">
      <CstWebSearchPopup
        defaultSearchList={defaultSearchList}
        cstSearchData={cstSearchData}
      />
    </div>
  );
}
