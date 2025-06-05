"use client"
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="border-b sticky top-0 bg-white z-20">
      <div className="flex items-center justify-between py-4 px-8">
        <div>
          <SidebarTrigger className="!text-xl" />
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => router.push("/dashboard/notifications")}
        >
          <IoNotificationsOutline size={20} />
          <span className="bg-primary absolute right-0 top-0 flex h-2 w-2 rounded-full">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
