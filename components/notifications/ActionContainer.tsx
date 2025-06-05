"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const ActionContainer = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div>
      <div className="flex w-fit p-1 bg-white rounded-sm gap-0.5 md:gap-2">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.value}
              className={twMerge(
                "px-2 md:px-3 py-1 cursor-pointer text-sm md:text-base",
                activeTab === tab.value && "bg-primary-light text-primary font-medium rounded-sm"
              )}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
    </div>
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
