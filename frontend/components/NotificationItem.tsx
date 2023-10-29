"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Tooltip } from "@mantine/core";
import { GoRead, GoUnread } from "react-icons/go";
import { useMutation } from "@tanstack/react-query";
import { updateNotification } from "@/utils/api";

interface Notification {
  id: number;
  notification: string;
  isRead: boolean;
  feedbackId: number;
}

export const NotificationItem = ({
  notification,
}: {
  notification: Notification;
}) => {
  const [isRead, setIsRead] = useState(notification.isRead);

  const mutation = useMutation({
    mutationFn: updateNotification,
    onSuccess: () => {
      setIsRead(!isRead);
    },
  });

  const changeReadStatus = (e: any) => {
    e.preventDefault();
    mutation.mutate({
      id: notification?.id,
      data: !isRead,
    });
  };

  return (
    <Link href={`/feedback/${notification.feedbackId}`}>
      <Menu.Item key={notification.id}>
        <div className="flex gap-5 items-center">
          <span className="h-10 w-14 bg-gray-200 rounded-full" />
          <span>
            {notification.notification.slice(0, 50) +
              "..." +
              notification.notification.slice(-4)}
          </span>
          {isRead ? (
            <Tooltip label="Mark as Unread">
              <span
                className="font-thin hover:bg-gray-300 p-2 rounded-full"
                onClick={(e) => changeReadStatus(e)}
              >
                <GoRead size={20} />
              </span>
            </Tooltip>
          ) : (
            <Tooltip label="Mark as Read">
              <span
                className="font-thin hover:bg-gray-300 p-2 rounded-full"
                onClick={(e) => changeReadStatus(e)}
              >
                <GoUnread size={20} />
              </span>
            </Tooltip>
          )}
        </div>
      </Menu.Item>
    </Link>
  );
};
