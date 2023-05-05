import React from "react";
import { ListItem } from "../ui/listitems";
import cn from "classnames";
import superAdminContent from "./superAdminContent";
import adminContent from "./adminContent";
import { useLocation } from "react-router-dom";

const Sidebar = ({ className }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <aside className={cn(className, " bg-primary")}>
      {superAdminContent.map((content, key) => {
        return (
          <div key={key}>
            <h3
              key={key}
              className="text-sm font-medium text-primary-light px-5 py-3"
            >
              {content.title}
            </h3>
            {content.ListMenu.map((items, key) => {
              return (
                <ListItem
                  icon={items.icon}
                  listTitle={items.name}
                  navigate={items.path}
                  key={key}
                  className={`hover:bg-blue-500 ${
                    location.pathname == items.path ? "bg-dark" : ""
                  }  hover:rounded-sm`}
                />
              );
            })}
            {/* <ListItem
              icon={content.content.icon}
              listTitle={content.content.name}
              navigate={content.content.path}
            /> */}
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
