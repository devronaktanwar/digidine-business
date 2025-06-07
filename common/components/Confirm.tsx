"use client";

import { type FC } from "react";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConfirmProps {
  type?: "INFO" | "WARNING" | "ERROR" | "SUCCESS";
  primaryText: string;
  secondaryText?: string;
  yesButtonLabel: string;
  noButtonLabel: string;
  onYes: () => void;
  onNo: () => void;
  isVisible?: boolean;
}

const Confirm: FC<ConfirmProps> = ({
  type = "INFO",
  primaryText,
  secondaryText,
  yesButtonLabel,
  noButtonLabel,
  onYes,
  onNo,
}) => {
  // Define type-specific properties
  const typeConfig = {
    INFO: {
      icon: Info,
      iconColor: "text-blue-500",
      iconBgColor: "bg-blue-50",
      iconRingColor: "bg-blue-100",
      buttonBgColor: "bg-blue-600 hover:bg-blue-700",
    },
    WARNING: {
      icon: AlertTriangle,
      iconColor: "text-amber-500",
      iconBgColor: "bg-amber-50",
      iconRingColor: "bg-amber-100",
      buttonBgColor: "bg-amber-600 hover:bg-amber-700",
    },
    ERROR: {
      icon: AlertCircle,
      iconColor: "text-red-500",
      iconBgColor: "bg-red-50",
      iconRingColor: "bg-red-100",
      buttonBgColor: "bg-red-600 hover:bg-red-700",
    },
    SUCCESS: {
      icon: CheckCircle,
      iconColor: "text-green-500",
      iconBgColor: "bg-green-100",
      iconRingColor: "bg-green-200",
      buttonBgColor: "bg-green-600 hover:bg-green-700",
    },
  };

  const {
    icon: Icon,
    iconColor,
    iconBgColor,
    iconRingColor,
    buttonBgColor,
  } = typeConfig[type];

  return (
    <div className="px-2">
      <div className="flex flex-col items-center">
        <div className={cn("relative mt-2 mb-3")}>
          <div className={cn("rounded-full w-16 h-16", iconRingColor)}></div>
          <div
            className={cn(
              "absolute inset-1 rounded-full flex items-center justify-center",
              iconBgColor
            )}
          >
            <Icon className={cn("w-8 h-8", iconColor)} />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-1 text-gray-700">
          {primaryText}
        </h2>
        {secondaryText && (
          <p className="text-gray-500 text-center mb-6 text-sm sm:text-base max-w-sm">
            {secondaryText}
          </p>
        )}
        <div className="grid grid-cols-2 gap-3 w-full mt-2 mb-2">
          <button
            onClick={onNo}
            className="py-3 px-4 rounded-md border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 cursor-pointer"
          >
            {noButtonLabel}
          </button>
          <button
            onClick={onYes}
            className={cn(
              "py-3 px-4 rounded-md text-white font-medium cursor-pointer",
              buttonBgColor,
              ""
            )}
          >
            {yesButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
