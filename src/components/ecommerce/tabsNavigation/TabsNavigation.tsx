import { TabSkeleton } from "@components/feedback/skeletons";
import useTabNavigation from "@hooks/useTabNavigation";
import { TProductsTab } from "@types";

type TTabNavigation = {
  tabs: TProductsTab;
  classes?: string;
  activeTab: number;
  setActiveTab: (tab: number) => void;
};
const TabsNavigation = ({
  tabs,
  classes,
  activeTab,
  setActiveTab,
}: TTabNavigation) => {
  const { activeTAbHandler, loading } = useTabNavigation(
    setActiveTab,
    activeTab
  );

  return (
    <ul
      className={`flex gap-3 items-center uppercase bg-gray-50 p-2 rounded-full text-sm text-gray-800 ${classes}`}
    >
      {loading === "pending"
        ? Array.from({ length: 5 }).map((_, i) => <TabSkeleton key={i} />)
        : tabs.map((tab, idx) => (
            <li
              key={idx}
              className={`px-5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                tab.id === activeTab &&
                "bg-white shadow-md font-bold text-black"
              }`}
              onClick={() => activeTAbHandler(tab.id)}
            >
              {tab.tabName}
            </li>
          ))}
    </ul>
  );
};

export default TabsNavigation;
