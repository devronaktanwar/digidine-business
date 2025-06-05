import React, { FC } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const MobileNav: FC<IMobileNavProps> = ({
  open,
  setOpen,
  isLoggedIn,
  setOpenLoginModal,
}) => {
  const router = useRouter();
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[300px] px-4">
          <SheetHeader>
            <SheetTitle className="flex-1 text-2xl font-bold">
              {/* <Image src="/logo.png" alt="logo" width={100} height={10} /> */}
              Digi<span className="text-primary">Dine</span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col justify-center gap-4">
            <Button className="!py-6 !px-6" variant="secondary">
              Request a demo
            </Button>
            {isLoggedIn ? (
              <Button
                className="!py-6 !px-6"
                onClick={() => router.push("/dashboard")}
              >
                Go to dashboard
              </Button>
            ) : (
              <Button
                className="!py-6 !px-6"
                onClick={() => setOpenLoginModal(true)}
              >
                Login
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
interface IMobileNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}
