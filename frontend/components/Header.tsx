'use client';

import { MdNotificationsNone } from "react-icons/md";
import { Menu } from "@mantine/core";

const items = ["Settings is the most important setting which are applicable to an ser and can be changed by clicking here", "Logout ", "Profile"]

export const Header = () => {
  return (
    <header className="h-14 md:h-16 flex justify-between items-center px-10 py-3 md:px-24 sticky bg-white top-0 z-50">
      <div>Logo+name</div>
      <div className="flex items-center gap-3 mf:gap-5">
        <Menu shadow="md" width={400} position="bottom-end">
          <Menu.Target>
            <span><MdNotificationsNone className="text-md h-8 w-8 md:text-4xl hover:bg-gray-200 md:h-10 md:w-10 p-2 rounded-full"/></span>
          </Menu.Target>
          <Menu.Dropdown>
          <Menu.Label>Notifications</Menu.Label>
          <Menu.Divider />
          {items.map((item) => (
            <Menu.Item >
              {item}
            </Menu.Item>))}
          </Menu.Dropdown>
        </Menu>
        <span className="w-8 h-8 rounded-full bg-blue-200/80 md:h-10 md:w-10 items-center flex justify-center font-bold">A</span>
      </div>
    </header>
  );
};
