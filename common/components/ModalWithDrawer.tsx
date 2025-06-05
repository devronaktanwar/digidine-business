import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useDeviceType } from "../hooks/use-device";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";


interface ModalOrDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string | null;
  children: React.ReactNode;
  hideTitle?: boolean;
}

export default function ModalWithDrawer({
  isOpen,
  onClose,
  title,
  description = null,
  children,
  hideTitle = false,
}: ModalOrDrawerProps) {
  const { isMobile } = useDeviceType();

  return isMobile ? (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="p-4">
        {!hideTitle && (
          <DrawerHeader>
            <DrawerTitle className="text-center font-bold text-2xl">
              {title}
            </DrawerTitle>
            <DrawerDescription className="text-center">
              {description}
            </DrawerDescription>
          </DrawerHeader>
        )}
        {children}
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {!hideTitle && (
          <DialogHeader>
            <DialogTitle className="font-bold text-3xl">{title}</DialogTitle>
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
