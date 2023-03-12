import React from "react";
import { ListItem } from "../ui/listitems";
import cn from "classnames";
import superAdminContent from "./superAdminContent";
import adminContent from "./adminContent";

const Sidebar = ({ className }) => {
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
                  className="hover:bg-dark hover:rounded-md"
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
