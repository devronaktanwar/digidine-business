"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { SiSquare } from "react-icons/si";
import { FiEye } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import ModalWithDrawer from "@/common/components/ModalWithDrawer";
import Confirm from "@/common/components/Confirm";
import { toast } from "sonner";

const ItemCard: FC<IItemCardProps> = ({
  image,
  label,
  description,
  price,
  type,
}) => {
  const [openModal, setOpenModal] = useState({
    info: false,
    delete: false,
    edit: false,
  });
  return (
    <>
      <div className="relative border h-auto bg-white rounded-xl">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2">
          <Image
            src={image}
            alt="logo"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="p-4 w-full flex flex-col gap-2 pt-16">
          <h2 className="text-xl font-semibold text-center">{label}</h2>
          <p className="text-sm text-center">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-center text-secondary">
                ${price}
              </h2>
            </div>
            <div className="flex gap-4 justify-end pt-2 cursor-pointer">
              <FiEye
                className="text-secondary"
                onClick={() => setOpenModal({ ...openModal, info: true })}
              />
              <FiEdit3
                className="text-primary"
                onClick={() => setOpenModal({ ...openModal, edit: true })}
              />
              <FiTrash2
                className="text-red-500"
                onClick={() => setOpenModal({ ...openModal, delete: true })}
              />
            </div>
          </div>
        </div>
        <div
          className={twMerge(
            "absolute right-4 top-4",
            type === "VEG" ? "text-green-500" : "text-red-500"
          )}
        >
          <SiSquare size={20} />
        </div>
      </div>
      <ModalWithDrawer
        isOpen={openModal.info}
        onClose={() => setOpenModal({ ...openModal, info: false })}
      >
        <h1>hello</h1>
      </ModalWithDrawer>
      <ModalWithDrawer
        isOpen={openModal.delete}
        onClose={() => setOpenModal({ ...openModal, delete: false })}
      >
        <Confirm
          type="ERROR"
          primaryText="Delete this menu ?"
          secondaryText="This menu will be deleted permanently and cannot be recovered"
          yesButtonLabel="Delete"
          noButtonLabel="Go back"
          onYes={() => toast.success("Menu item is deleted")}
          onNo={() => setOpenModal({ ...openModal, delete: false })}
        />
      </ModalWithDrawer>
    </>
  );
};

export default ItemCard;
interface IItemCardProps {
  image: string;
  label: string;
  description: string;
  price: number;
  type: string;
}
