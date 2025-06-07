import ActionContainer from "@/components/notifications/ActionContainer";
import NotificationsList from "@/components/notifications/NotificationsList";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl md:text-2xl font-bold text-secondary">
            Notifications
          </h1>
          <p className="text-sm text-gray-500">
            Receive alerts for new orders.
          </p>
        </div>
        <div>
          <ActionContainer />
        </div>
        <NotificationsList />
      </div>
    </div>
  );
};

export default page;
