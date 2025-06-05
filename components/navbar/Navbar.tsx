"use client";
// import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";
import ModalWithDrawer from "@/common/components/ModalWithDrawer";
import Login from "../login/Login";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  // temporary login state
  const isLoggedIn = false;
  const [openLoginModal, setOpenLoginModal] = useState(false);
  return (
    <>
      <div className="py-4 sticky top-0 px-4">
        <div className="max-screen border px-6 py-3 rounded-lg bg-white/10 backdrop-blur-lg flex justify-between items-center">
          <h1 className="flex-1 text-2xl md:text-3xl font-bold">
            {/* <Image src="/logo.png" alt="logo" width={100} height={10} /> */}
            Digi<span className="text-primary">Dine</span>
          </h1>
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-4">
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
          </div>
          <div
            className="text-primary md:hidden"
            onClick={() => setOpenMenu(true)}
          >
            <RiMenu2Fill size={24} />
          </div>
          <MobileNav
            open={openMenu}
            setOpen={setOpenMenu}
            isLoggedIn={isLoggedIn}
            setOpenLoginModal={setOpenLoginModal}
          />
        </div>
      </div>
      <ModalWithDrawer
        isOpen={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        title="Welcome back!"
        description="Enter your credentials to login to your account."
      >
        <Login />
      </ModalWithDrawer>
    </>
  );
};

export default Navbar;

const navLinks = [
  {
    name: "My Orders",
    href: "/my-orders",
  },
  {
    name: "Profile",
    href: "/my-profile",
  },
];
