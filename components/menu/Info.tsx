import { IItemCardProps } from "@/common/types/Menu";
import Image from "next/image";
import React, { FC, useMemo } from "react";
import { SiSquare } from "react-icons/si";
import { twMerge } from "tailwind-merge";

const Info: FC<IItemCardProps> = ({
  label,
  description,
  originalPrice,
  sellingPrice,
  type,
  image,
  status,
}) => {
  const discount = useMemo(() => {
    const result = (originalPrice - sellingPrice) / originalPrice;
    return Math.round(result * 100);
  }, [originalPrice, sellingPrice]);
  return (
    <div className="py-4 md:py-0">
      <div className="flex gap-6">
        <div>
          <Image
            alt={label}
            src={image}
            height={100}
            width={100}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className={type === "VEG" ? "text-green-500" : "text-red-500"}>
              <SiSquare size={20} />
            </div>
            <h1 className="text-xl font-semibold">{label}</h1>
            <span
              className={twMerge(
                "px-2 py-1 text-[10px] rounded text-white font-medium",
                status === "ACTIVE" ? "bg-primary" : "bg-red-500"
              )}
            >
              {status}
            </span>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
          <span className="text-[10px] font-semibold bg-green-600 p-1 px-2 text-white rounded w-fit">
            {discount}% OFF
          </span>
          <div className="flex items-baseline gap-2">
            <h2 className="text-primary text-2xl font-semibold">
              ${sellingPrice}
            </h2>
            <span className="text-gray-500 text-base font-semibold line-through">
              ${originalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
