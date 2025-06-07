"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import ModalWithDrawer from "@/common/components/ModalWithDrawer";
import Confirm from "@/common/components/Confirm";
import { toast } from "sonner";

const ActionContainer = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [modalOpen, setModalOpen] = useState({
    readAll: false,
    deleteAll: false,
  });
  return (
    <>
      <div className="flex justify-between lg:items-center flex-col-reverse gap-4 lg:gap-2 lg:flex-row">
        <div className="flex w-fit p-1 bg-white rounded-sm gap-0.5 md:gap-2">
          {tabs.map((tab) => {
            return (
              <div
                key={tab.value}
                className={twMerge(
                  "px-2 md:px-3 py-1 cursor-pointer text-sm font-medium text-secondary",
                  activeTab === tab.value &&
                    "bg-primary-light text-primary rounded-sm"
                )}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Button
            variant="outline"
            className="!px-3 !text-xs"
            onClick={() => setModalOpen({ readAll: true, deleteAll: false })}
          >
            Mark all as read
          </Button>
          <Button
            variant="destructive"
            className="!px-3 !text-xs"
            onClick={() => setModalOpen({ readAll: false, deleteAll: true })}
          >
            Delete all
          </Button>
        </div>
      </div>
      <ModalWithDrawer
        isOpen={modalOpen.deleteAll}
        onClose={() => setModalOpen({ readAll: false, deleteAll: false })}
      >
        <Confirm
          type="ERROR"
          primaryText="Delete all notifications ?"
          secondaryText="All notifications will be deleted permanently and cannot be recovered"
          yesButtonLabel="Delete"
          noButtonLabel="Go back"
          onYes={() => toast.success("All notifications deleted")}
          onNo={() => setModalOpen({ readAll: false, deleteAll: false })}
        />
      </ModalWithDrawer>
      <ModalWithDrawer
        isOpen={modalOpen.readAll}
        onClose={() => setModalOpen({ readAll: false, deleteAll: false })}
        hideTitle={false}
      >
        <Confirm
          type="INFO"
          primaryText="Mark All as Read ?"
          secondaryText="This will mark all your notifications as read. You won’t be able to distinguish unread ones afterward."
          yesButtonLabel="Yes"
          noButtonLabel="Go back"
          onYes={() => toast.success("All notifications marked as read")}
          onNo={() => setModalOpen({ readAll: false, deleteAll: false })}
        />
      </ModalWithDrawer>
    </>
  );
};

export default ActionContainer;

const tabs = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Today",
    value: "today",
  },
  {
    name: "Yesterday",
    value: "yesterday",
  },
  {
    name: "This Week",
    value: "week",
  },
  {
    name: "This Month",
    value: "month",
  },
];
