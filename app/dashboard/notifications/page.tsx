import NotificationsList from "@/components/notifications/NotificationsList";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-secondary">
            Notifications
          </h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            architecto.
          </p>
        </div>
        <NotificationsList />
      </div>
    </div>
  );
};

export default page;
