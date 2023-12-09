import React from "react";
import Navbar from "../ui/home/navbar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default HomeLayout;
