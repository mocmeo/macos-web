import { FC } from "react";
import TopMenuLeft from "@/components/TopMenuLeft";
import TopMenuRight from "@/components/TopMenuRight";

const TopMenu: FC = () => {
  return (
    <div className="top-menu bg-bg h-7 flex justify-between fixed top-0 left-0 right-0 px-2 z-40">
      <TopMenuLeft />
      <TopMenuRight />
    </div>
  );
};

export default TopMenu;
