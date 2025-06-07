"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FiPlus } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { Search } from "lucide-react";
import ModalWithDrawer from "@/common/components/ModalWithDrawer";
import AddItem from "./AddItem";

const ActionContainer = () => {
  const [openModal, setOpenModal] = useState({ filter: false, add: false });
  return (
    <>
      <div className="flex md:items-center justify-between gap-3 md:gap-6 flex-col-reverse md:flex-row">
        <div className="flex items-center w-full max-w-md border rounded-full px-3 py-3 bg-white focus-within:ring-1 focus-within:ring-[#4300FF]">
          <Search className="w-5 h-5 text-primary mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 text-sm"
          />
        </div>
        <div className="flex items-center gap-6 justify-end">
          <Button
            size="icon"
            variant="secondary"
            className="border bg-primary-light text-primary"
          >
            <IoFilter />
          </Button>
          <Button size="lg" className="flex items-center" onClick={() => setOpenModal({ ...openModal, add: true })}>
            <FiPlus /> Add new item
          </Button>
        </div>
      </div>
      <ModalWithDrawer
        isOpen={openModal.add}
        onClose={() => setOpenModal({ ...openModal, add: false })}
        dialogClassName="!max-w-2xl"
        title="Add New Item"
        description="Add a new item to the menu"
      >
        <AddItem />
      </ModalWithDrawer>
    </>
  );
};

export default ActionContainer;
