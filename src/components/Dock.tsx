import { FC } from "react";
import { DockMenu } from "@/shared/constants";

const Dock: FC = () => {
  return (
    <div className="dock widget-dock">
      {DockMenu.map((item) => (
        <div className="item group relative" key={item.name}>
          <span className="hidden absolute bottom-32 -left-1 text-center w-32 group-hover:inline text-white bg-black/50 rounded-md">
            {item.name}
          </span>
          <img
            className="dock-icon w-14 p-1 h-auto rounded-md cursor-pointer transition-all duration-300 origin-top-1/2 group-hover:scale-200 group-hover:mx-8"
            src={item.icon}
            alt=""
            onClick={() => (window.location.href = item.link || "")}
          />
        </div>
      ))}
    </div>
  );
};

export default Dock;
