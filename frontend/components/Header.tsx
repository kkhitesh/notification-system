"use client";

import { MdNotificationsNone } from "react-icons/md";
import { GoRead, GoUnread } from "react-icons/go";
import { Menu, Tooltip } from "@mantine/core";
import { checkNewNotification, getAllNotifications } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { NotificationItem } from "./NotificationItem";
import Link from "next/link";

interface Notification {
  id: number;
  notification: string;
  isRead: boolean;
  feedbackId: number;
}

export const Header = () => {
  const query = useQuery({
    queryKey: ["notifications"],
    queryFn: getAllNotifications,
  });

  const newNotifications = useQuery({
    queryKey: ["newNotifications"],
    queryFn: checkNewNotification,
    refetchInterval: 30000,
  });

  return (
    <header className="h-14 md:h-16 flex justify-between items-center px-10 py-3 md:px-24 sticky bg-white top-0 z-50">
      <Link href="/">
        <div>
          <img src="/wrenly.svg" className="w-36 p-3" />
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <Menu
          shadow="md"
          width={400}
          position="bottom-end"
          closeOnItemClick={false}
        >
          <Menu.Target>
            <span className="relative">
              <MdNotificationsNone className="text-md h-8 w-8 md:text-4xl hover:bg-gray-200 md:h-10 md:w-10 p-2 rounded-full" />
              {newNotifications.data && (
                <span className="absolute top-2.5 right-2.5 md:top-3 md:right-3 text-xs bg-red-500 rounded-full h-1.5 w-1.5 md:h-2 md:w-2 " />
              )}
            </span>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Notifications</Menu.Label>
            <Menu.Divider />
            {query.isLoading ? (
              <Menu.Item>Loading...</Menu.Item>
            ) : (
              query.data?.map((notification: Notification) => (
                // <Menu.Item key={notification.id}>
                //   <div className="flex gap-5 items-center">
                //     <span className="h-10 w-14 bg-gray-200 rounded-full" />
                //     <span>
                //       {notification.notification.slice(0, 50) +
                //         "..." +
                //         notification.notification.slice(-4)}
                //     </span>
                //     {notification.isRead ? (
                //       <Tooltip label="Mark as Unread">
                //         <span className="font-thin hover:bg-gray-300 p-2 rounded-full">
                //           <GoRead size={20} />
                //         </span>
                //       </Tooltip>
                //     ) : (
                //       <Tooltip label="Mark as Read">
                //         <span className="font-thin hover:bg-gray-300 p-2 rounded-full">
                //           <GoUnread size={20} />
                //         </span>
                //       </Tooltip>
                //     )}
                //   </div>
                // </Menu.Item>
                <NotificationItem
                  notification={notification}
                  key={notification.id}
                />
              ))
            )}
          </Menu.Dropdown>
        </Menu>
        <span className="w-8 h-8 rounded-full bg-blue-200/80 md:h-10 md:w-10 items-center flex justify-center font-bold">
          A
        </span>
      </div>
    </header>
  );
};
