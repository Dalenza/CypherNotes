import React from "react";
import Navbar from "../ui/home/navbar";
import ProtectedRoute from "@/components/protected-route";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <Navbar />
      {children}
    </ProtectedRoute>
  );
}

export default HomeLayout;
