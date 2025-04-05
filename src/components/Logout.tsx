"use client";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "@/actions/auth.action";

const Logout = () => {
  const handleLogout = async () => {
    await signOut();
    window.location.href = "/sign-in";
  };
  return (
    <>
      <Button
        onClick={handleLogout}
        className="bg-red-400 hover:bg-red-500 text-white cursor-pointer"
      >
        <LogOut />
        Logout
      </Button>
    </>
  );
};

export default Logout;
