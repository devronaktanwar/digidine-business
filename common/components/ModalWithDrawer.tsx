import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useDeviceType } from "../hooks/use-device";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { twMerge } from "tailwind-merge";

interface ModalOrDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string | null;
  children: React.ReactNode;
  hideTitle?: boolean;
  titleClassName?: string;
  headerClassName?: string;
  dialogClassName?: string;
}

export default function ModalWithDrawer({
  isOpen,
  onClose,
  title,
  description = null,
  children,
  hideTitle = false,
  titleClassName = "",
  headerClassName = "",
  dialogClassName = "",
}: ModalOrDrawerProps) {
  const { isMobile } = useDeviceType();

  return isMobile ? (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className={twMerge("p-4 !max-h-[95dvh] overflow-auto", dialogClassName)}>
        <DrawerHeader className={headerClassName}>
          <DrawerTitle
            className={twMerge(
              "text-center font-semibold text-2xl text-secondary",
              titleClassName
            )}
          >
            {title}
          </DrawerTitle>
          <DrawerDescription className="text-center hidden">
            {description}
          </DrawerDescription>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={"max-h-[95dvh] overflow-auto "+dialogClassName}>
        {!hideTitle && (
          <DialogHeader>
            <DialogTitle
              className={twMerge(
                "font-semibold text-2xl text-secondary",
                titleClassName
              )}
            >
              {title}
            </DialogTitle>
            <DialogDescription className="text-gray-500">
              {description}
            </DialogDescription>
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
}
